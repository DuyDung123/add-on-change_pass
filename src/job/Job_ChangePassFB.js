import { FBModel } from "../model/FBModel";
import { StepChangeVia } from "../object/StepChangeVia";
import { Via } from "../object/Via";
import { CHANGE_2FA_WAIT, CODE2FA, FB, STEP, VIA } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils";

export class Job_ChangePass {

    changePass = async () => {
        const changePassFBModel = new FBModel;
        const systemUtils = new SystemUtils;

        let st = new StepChangeVia();
        systemUtils.saveDataToStorage(data = {'step': st});

        await systemUtils.sleep(2000);

        let step = new StepChangeVia(await systemUtils.getDataToStorage(STEP));
        const fb = new FB;
        let url = document.location.href;
        let title = document.getElementsByTagName('title')[0].innerText;
        let checkMHLogin = document.getElementById('login_error');
        let checkMHHome = document.getElementsByClassName('_4g34 _6ber _78cq _7cdk _5i2i _52we');
        console.log(title);
        console.log(url);
        if (url.includes(fb.BASE_URL_M_FB) && checkMHLogin !== null) {

            const message = {};
            message.data = 'getData';
            message.type = 'load_data';
            systemUtils.requestGetDataToBackground(message);

            while (true) {
                if (await systemUtils.checkDataToStorage(VIA)) {
                    break;
                } else {
                    await systemUtils.sleep(5000);
                }
            }

            let via = new Via(await systemUtils.getDataToStorage(VIA));
            changePassFBModel.login(via);
        }
        if (url.includes(fb.URL_SAVE_DEVICE)) {
            changePassFBModel.noSaveDevice();
        }
        if (url.includes(fb.BASE_URL_M_FB) && title === 'Facebook' && checkMHHome.length != 0) {
            window.location.href = fb.URL_SETTING;
        }
        if (url.includes(fb.URL_SETTING) || url.includes(fb.URL_SETTING_2)) {
            let via = new Via(await systemUtils.getDataToStorage(VIA));
            if (via.isChangePass === fb.CHANGE_PASS_WAIT) {
                window.location.href = fb.URL_SECURITY_PASSWORD;
            } else if (via.islogOut === fb.LOGOUT_WAIT) {
                window.location.href = fb.URL_LOG_OUT_DEVICE
            } else if (via.isChangeMail === fb.CHANGE_MAIL_WAIT) {
                window.location.href = fb.URL_CHANGE_MAIL;
            } else if (via.is2Fa === fb.CHANGE_2FA_WAIT) {
                window.location.href = fb.URL_2FA;
            }
        }
        if (url.includes(fb.URL_CONFRIM_MAIL)) {//lấy code xác nhận email

            let via = new Via(await systemUtils.getDataToStorage(VIA));
            const message = {};
            message.data = via.emailNew;
            message.type = 'request_CodeEmail';
            systemUtils.requestGetDataToBackground(message);
        }
        if (url.includes("/ntdelegatescreen/?params")) {
            //add mail và đặt làm mail chính và for gỡ mail
            let via = new Via(await systemUtils.getDataToStorage(VIA));

            // xác nhận mail
            changePassFBModel.confirmMail();

            let addEmail = $('div[class="_59k _2rgt _1j-f _2rgt"]');//_a58 _a5v _9_7 _2rgt _1j-g _2rgt _86-3 _2rgt _1j-g _2rgt(-1)
            if (via.isChangeMail === fb.CHANGE_MAIL_WAIT) {
                changePassFBModel.changeMail(addEmail, via)
            } else if (step.isEmailChinh === step.WAIT) {
                changePassFBModel.setMainMail(addEmail, via);
            } else if (step.isRemoveEmail  === step.WAIT) {
                addEmail = $('div[class="_a58 _a5v _9_7 _2rgt _1j-g _2rgt _86-3 _2rgt _1j-g _2rgt"]');
                changePassFBModel.removeMail(addEmail, via);
            }

        }
        if (url.includes("settings/security/password")) { // change pass
            let via = new Via(await systemUtils.getDataToStorage(VIA));
            changePassFBModel.changePass(via);
        }
        if (url.includes("settings/security_login/sessions")) { // log out
            let via = new Via(await systemUtils.getDataToStorage(VIA));
            changePassFBModel.logOutAllDervice(via);
        }

        // bật 2fa
        if (url.includes("/security/2fac/setup/intro/metadata/?source=1") || url.includes("/security/2fac/setup/qrcode/generate/?ext=")
            || url.includes("https://m.facebook.com/password/reauth/?next=") || url.includes("https://m.facebook.com/checkpoint/block")) {

            let via = new Via(await systemUtils.getDataToStorage(VIA));
            changePassFBModel.enable2Fa(via);

            // lấy mẫ qRCode
            changePassFBModel.getCode2Fa();

            await systemUtils.sleep(1000);

            // confirm 2fa
            changePassFBModel.confirm2Fa(via);

        } 
        
        if (url.includes("https://m.facebook.com/security/2fac/setup/type_code/")) {
            //set code 2fa

            while (true) {
                if (await systemUtils.checkDataToStorage(CODE2FA)) {
                    break;
                } else {
                    await systemUtils.sleep(5000);
                }
            }
            let code2Fa = await systemUtils.getDataToStorage(CODE2FA);
            changePassFBModel.setCode2Fa(code2Fa);
        }
    }
}