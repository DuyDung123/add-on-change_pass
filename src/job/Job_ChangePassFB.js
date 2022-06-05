import { ChangePassFBModel } from "../model/ChangePassFBModel";
import { FB } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils";

export class Job_ChangePass {

    changePass = () => {

        const changePassFBModel = new ChangePassFBModel;
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
                if (await checkDataToStorage('data')) {
                    break;
                } else {
                    await sleep(5000);
                }
            }

            via = systemUtils.getDataToStorage(key);

            changePassFBModel.login(via)
        }
        if (url.includes(fb.URL_SAVE_DEVICE)) {
            changePassFBModel.noSaveDevice();
        }
        if (url.includes(fb.BASE_URL_M_FB) && title === 'Facebook' && checkMHHome.length != 0) {
            window.location.href = fb.URL_SETTING;
        }
        if (url.includes(fb.URL_SETTING) || url.includes(fb.URL_SETTING_2)) {
            const data = await systemUtils.getDataToStorage('data');
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

            const data = await systemUtils.getDataToStorage('data');
            systemUtils.requestGetDataToBackground(message = {data: data.emailNew, type: 'request_CodeEmail'});
        }
        if (url.includes("/ntdelegatescreen/?params")) {
            //add mail và đặt làm mail chính và for gỡ mail
            const data = await getDataToStorage('data');

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
        if (url.includes("settings/security/password")) {

            if ($('input[name="password_old"]') != null) {
                $('input[name="password_old"]').val(data.password);
            }
            await sleep(1000);

            if ($('input[name="password_new"]') != null) {
                $('input[name="password_new"]').val(data.passwordNew);
            }
            await sleep(1000);

            if ($('input[name="password_confirm"]') != null) {
                $('input[name="password_confirm"]').val(data.passwordNew);
            }
            await sleep(1000);

            if ($('button[name="save"]') != null) {
                $('button[name="save"]').click();
            }
        }
        if (url.includes("settings/security_login/sessions")) {
            //log out
            if ($('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bt _52jg"]') != null) {
                $('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bt _52jg"]')[0].click();

                await sleep(5000); // nghỉ 5 giây đợi load trang

                if ($('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bu _52jg"]') != null) {
                    //$('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bu _52jg"]')[0].click();
                }
            }
        }

        // bật 2fa
        if (url.includes("/security/2fac/setup/intro/metadata/?source=1") || url.includes("/security/2fac/setup/qrcode/generate/?ext=")
            || url.includes("https://m.facebook.com/password/reauth/?next=") || url.includes("https://m.facebook.com/checkpoint/block")) {

            if ($('span[class="mfsm"]') != null) {
                let messageError = $('span[class="mfsm"]')[0].innerText;
            }
            if ($('a[class="_54k8 _56bs _26vk _56bu _52jg"]') != null) {
                $('a[class="_54k8 _56bs _26vk _56bu _52jg"]')[0].click();
            }
            if ($('input[name="pass"]') != null) {
                $('input[name="pass"]').val(data.passwordNew);
            }

            await sleep(1000);

            if ($('button[name="save"]') != null) {
                $('button[name="save"]').click();
            }

            //let qRcode2FA = document.getElementsByClassName("_52jh _52jj _66g5")[0].innerText;

            // lấy mẫ qRCode
            if ($('div[class="_52jh _52jj _66g5"]') != null) {
                let qRcode2FA = $('div[class="_52jh _52jj _66g5"]')[0].innerText

                await sleep(500);

                requestGetDataToBackground(message = {
                    data: qRcode2FA,
                    type: 'request_2FA'
                });
            }

            await sleep(1000);

            if ($('button[name="confirmButton"]') != null) {
                $('button[name="confirmButton"]').click();
            }

            // bị checkpoint
            if ($('input[name="captcha_response"]') != null) {
                $('input[name="captcha_response"]').val(data.passwordNew);
            }
            if ($('button[name="submit[Continue]"]') != null) {
                $('button[name="submit[Continue]"]').click();
            }
        } if (url.includes("https://m.facebook.com/security/2fac/setup/type_code/")) {

            if ($('input[name="code"]') != null) {
                $('input[name="code"]').val(data.passwordNew);
            }
            await sleep(1000);

            if ($('button[id="submit_code_button"]') != null) {
                $('button[id="submit_code_button"]').click();
            }
        }
    }
}