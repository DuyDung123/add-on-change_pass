import { FBModel } from "../model/FBModel";
import { FB } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils";

export class Job_ChangePass {

    changePass = () => {

        const changePassFBModel = new FBModel;
        const systemUtils = new SystemUtils;
        const fb = new FB;
        let url = document.location.href;
        let title = document.getElementsByTagName('title')[0].innerText;
        let checkMHLogin = document.getElementById('login_error');
        let checkMHHome = document.getElementsByClassName('_4g34 _6ber _78cq _7cdk _5i2i _52we');
        console.log(title);
        console.log(url);
        if (url.includes(fb.BASE_URL_M_FB) && checkMHLogin !== null) {
            systemUtils.requestGetDataToBackground(message = { data: 'getData', type: 'load_data' })

            while (true) {
                if (systemUtils.checkDataToStorage('data')) {
                    break;
                } else {
                    systemUtils.sleep(5000);
                }
            }

            let via = systemUtils.getDataToStorage(key);

            changePassFBModel.login(via);
        }
        if (url.includes(fb.URL_SAVE_DEVICE)) {
            changePassFBModel.noSaveDevice();
        }
        if (url.includes(fb.BASE_URL_M_FB) && title === 'Facebook' && checkMHHome.length != 0) {
            window.location.href = fb.URL_SETTING;
        }
        if (url.includes(fb.URL_SETTING) || url.includes(fb.URL_SETTING_2)) {
            const data = systemUtils.getDataToStorage('data');
            if (data.isChangePass) {
                window.location.href = fb.URL_SECURITY_PASSWORD;
            } else if (data.islogOut === true) {
                window.location.href = fb.URL_LOG_OUT_DEVICE
            } else if (data.isChangeMail === true) {
                window.location.href = fb.URL_CHANGE_MAIL;
            } else if (data.is2Fa === true) {
                window.location.href = fb.URL_2FA;
            }
        }
        if (url.includes(fb.URL_CONFRIM_MAIL)) {//lấy code xác nhận email

            const data =  systemUtils.getDataToStorage('data');
            systemUtils.requestGetDataToBackground(message = {data: data.emailNew, type: 'request_CodeEmail'});
        }
        if (url.includes("/ntdelegatescreen/?params")) {
            //add mail và đặt làm mail chính và for gỡ mail
            const data =  getDataToStorage('data');

            // xác nhận mail
            changePassFBModel.confirmMail();

            let addEmail = $('div[class="_59k _2rgt _1j-f _2rgt"]');//_a58 _a5v _9_7 _2rgt _1j-g _2rgt _86-3 _2rgt _1j-g _2rgt(-1)
            if (data.isChangeMail === true) 
            {
                changePassFBModel.changeMail(addEmail, data)
            } else if (data.isEmailChinh) {
                changePassFBModel.setMainMail(addEmail, data);
            } else if (data.isRemoveEmail) {
                addEmail = $('div[class="_a58 _a5v _9_7 _2rgt _1j-g _2rgt _86-3 _2rgt _1j-g _2rgt"]');
                changePassFBModel.removeMail(addEmail, data);
            }

        }
        if (url.includes("settings/security/password")) { // change pass
            const via =  systemUtils.getDataToStorage('data');
            changePassFBModel.changePass(via);
        }
        if (url.includes("settings/security_login/sessions")) {
            //log out
            changePassFBModel.logOutAllDervice();
        }

        // bật 2fa
        if (url.includes("/security/2fac/setup/intro/metadata/?source=1") || url.includes("/security/2fac/setup/qrcode/generate/?ext=")
            || url.includes("https://m.facebook.com/password/reauth/?next=") || url.includes("https://m.facebook.com/checkpoint/block")) {
            
            const via =  systemUtils.getDataToStorage('data');
            changePassFBModel.enable2Fa(via);

            // lấy mẫ qRCode
            changePassFBModel.getCode2Fa();

             systemUtils.sleep(1000);

            // confirm 2fa
            changePassFBModel.confirm2Fa(via);

        } if (url.includes("https://m.facebook.com/security/2fac/setup/type_code/")) {
        //set code 2fa
            const via =  systemUtils.getDataToStorage('data');
            changePassFBModel.setCode2Fa();
        }
    }
}