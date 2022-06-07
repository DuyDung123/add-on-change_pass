import { BASE_URL_M_FB } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils";
export class FBModel {

    constructor(){}

    BASE_URL_M_FB = "https://m.facebook.com/";

    login = (via) => {
        const systemUtils = new SystemUtils;

        if ($('input[name="email"]') != null) {
            $('input[name="email"]').val(via.uid);
        }

         systemUtils.sleep(2000);

        if ($('input[name="pass"]') != null) {
            $('input[name="pass"]').val(via.pass);
        }

         systemUtils.sleep(2000);

        if ($('button[name="login"]') != null) {
            $('button[name="login"]').click();
        }
    }

    noSaveDevice = () => {
        // không lưu thiết bị
        // if ($('a[class="_54k8 _56bs _26vk _56b_ _56bw _56bt"]') > 0) {
        //     $('a[class="_54k8 _56bs _26vk _56b_ _56bw _56bt"]')[0].click();
        // }
        window.location.href = BASE_URL_M_FB;
    }

    confirmMail = () =>{
        if ($('button[class="_54k8 _52jg _56bs _26vk _86fw _86fx _86fj _86fm _86fe _2rgt _1j-g _2rgt _56bt"]') > 0) {
            $('button[class="_54k8 _52jg _56bs _26vk _86fw _86fx _86fj _86fm _86fe _2rgt _1j-g _2rgt _56bt"]')[0].click();
        }
    } 

    changeMail = (element, via) =>{
        const systemUtils = new SystemUtils;
        let addEmail = element;
        if (addEmail != null) {
            addEmail[addEmail.length - 2].click();

             systemUtils.sleep(3000);

            if ($('input[name="email"]') != null) {
                $('input[name="email"]').val(via.emailNew);
            }

             systemUtils.sleep(2000);

            if ($('input[name="save_password"]') != null) {
                $('input[name="save_password"]').val(via.pass);
            }

             systemUtils.sleep(2000);

            systemUtils.requestGetDataToBackground(message = {data: 'getData', type: 'load_data'});

            if ($('button[name="save"]') != null) {
                $('button[name="save"]').click();
            }
        }
    }

    setMainMail = (element, via) => {
        const systemUtils = new SystemUtils;
        let addEmail = element;
        for (let i = 0; i < addEmail.length; i++) {
            const regex = '/(?<res>' + via.emailNew + ')' / gm;
            let emailNeedActive = systemUtils.regexString(addEmail[i], regex);
            if (emailNeedActive === data.emailNew) {
                addEmail[i].click();
                break;
            }
        }
    }

    removeMail = (element, via) => {
        const systemUtils = new SystemUtils;
        let addEmail = element;
        for (let i = 0; i < addEmail.length; i++) {
            const regex = '/(?<res>' + via.emailNew + ')' / gm;
            let emailNeedActive = systemUtils.regexString(addEmail[i], regex);
            if (emailNeedActive === via.emailNew || i === addEmail.length - 1 || i === addEmail.lastIndex - 2 || i === addEmail.lastIndex - 3) {
                continue;
            } else {
                addEmail[i].click();
            }
        }
    }

    changePass = (via) => {
        const systemUtils = new SystemUtils;

        if ($('input[name="password_old"]') != null) {
            $('input[name="password_old"]').val(via.password);
        }
         systemUtils.sleep(1000);

        if ($('input[name="password_new"]') != null) {
            $('input[name="password_new"]').val(via.passwordNew);
        }
         systemUtils.sleep(1000);

        if ($('input[name="password_confirm"]') != null) {
            $('input[name="password_confirm"]').val(via.passwordNew);
        }
         systemUtils.sleep(1000);

        if ($('button[name="save"]') != null) {
            $('button[name="save"]').click();
        }
    }

    logOutAllDervice = () => {
        const systemUtils = new SystemUtils;

        if ($('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bt _52jg"]') != null) {
            $('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bt _52jg"]')[0].click();

             systemUtils.sleep(5000); // nghỉ 5 giây đợi load trang

            if ($('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bu _52jg"]') != null) {
                //$('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bu _52jg"]')[0].click();
            }
        }
    }

    enable2Fa = (via) => {
        const systemUtils = new SystemUtils;

        if ($('span[class="mfsm"]') != null) {
            let messageError = $('span[class="mfsm"]')[0].innerText;
        }
        if ($('a[class="_54k8 _56bs _26vk _56bu _52jg"]') != null) {
            $('a[class="_54k8 _56bs _26vk _56bu _52jg"]')[0].click();
        }
        if ($('input[name="pass"]') != null) {
            $('input[name="pass"]').val(via.passwordNew);
        }

         systemUtils.sleep(1000);

        if ($('button[name="save"]') != null) {
            $('button[name="save"]').click();
        }
    }

    getCode2Fa = () =>{
        const systemUtils = new SystemUtils;
        if ($('div[class="_52jh _52jj _66g5"]') > 0) {
            let qRcode2FA = $('div[class="_52jh _52jj _66g5"]')[0].innerText

             systemUtils.sleep(500);

            systemUtils.requestGetDataToBackground(message = { data: qRcode2FA, type: 'request_2FA'});
        }

    }

    confirm2Fa = (via) =>{
        const systemUtils = new SystemUtils;

        if ($('button[name="confirmButton"]') != null) {
            $('button[name="confirmButton"]').click();
        }

         systemUtils.sleep(500);

        // bị checkpoint
        if ($('input[name="captcha_response"]') != null) {
            $('input[name="captcha_response"]').val(via.passwordNew);
        }
        if ($('button[name="submit[Continue]"]') != null) {
            $('button[name="submit[Continue]"]').click();
        }
    }

    setCode2Fa = (code2Fa) => {
        if ($('input[name="code"]') != null) {
            $('input[name="code"]').val(code2Fa);
        }
         sleep(1000);

        if ($('button[id="submit_code_button"]') != null) {
            $('button[id="submit_code_button"]').click();
        }
    }
}