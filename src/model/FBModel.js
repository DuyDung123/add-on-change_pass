import { StepChangeVia } from "../object/StepChangeVia";
import { BASE_URL_M_FB, FB, STEP } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils";
export class FBModel {

    constructor(){}

    BASE_URL_M_FB = "https://m.facebook.com/";

    login = async (via) => {
        const systemUtils = new SystemUtils;

        if ($('input[name="email"]') != null) {
            $('input[name="email"]').val(via.uid);
        }

        await systemUtils.sleep(2000);

        if ($('input[name="pass"]') != null) {
            $('input[name="pass"]').val(via.pass);
        }

        await systemUtils.sleep(2000);

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

    changeMail = async (element, via) =>{
        const systemUtils = new SystemUtils;
        let addEmail = element;
        if (addEmail != null) {
            addEmail[addEmail.length - 2].click();

            await systemUtils.sleep(3000);

            if ($('input[name="email"]') != null) {
                $('input[name="email"]').val(via.emailNew);
            }

            await systemUtils.sleep(2000);

            if ($('input[name="save_password"]') != null) {
                $('input[name="save_password"]').val(via.pass);
            }

            await systemUtils.sleep(2000);

            
            via.setIsChangeMail = new FB().CHANGE_MAIL_SUCCESS;
            this.saveViaToStorage(via);

            await systemUtils.sleep(2000);

            if ($('button[name="save"]') != null) {
                $('button[name="save"]').click();
            }
        }
    }

    setMainMail = (element, via, step) => {
        const systemUtils = new SystemUtils;
        let addEmail = element;
        for (let i = 0; i < addEmail.length; i++) {
            const regex = '/(?<res>' + via.emailNew + ')' / gm;
            let emailNeedActive = systemUtils.regexString(addEmail[i], regex);
            if (emailNeedActive === data.emailNew) {
                this.okStepMailChinh();
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
                this.okRemoveEmail();
                addEmail[i].click();
            }
        }
    }

    changePass = async (via) => {
        const systemUtils = new SystemUtils;

        if ($('input[name="password_old"]') != null) {
            $('input[name="password_old"]').val(via.password);
        }

        await systemUtils.sleep(1000);

        if ($('input[name="password_new"]') != null) {
            $('input[name="password_new"]').val(via.passwordNew);
        }

        await systemUtils.sleep(1000);

        if ($('input[name="password_confirm"]') != null) {
            $('input[name="password_confirm"]').val(via.passwordNew);
        }

        await systemUtils.sleep(1000);

        via.setIsChangePass = new FB().CHANGE_PASS_SUCCESS;

        if ($('button[name="save"]') != null) {
            $('button[name="save"]').click();
        }
    }

    logOutAllDervice = async (via) => {
        const systemUtils = new SystemUtils;

        if ($('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bt _52jg"]') > 0 ) {
            $('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bt _52jg"]')[0].click();

            await systemUtils.sleep(5000); // nghỉ 5 giây đợi load trang

            via.setIsLogOut = new FB().LOGOUT_SUCCESS;

            this.saveViaToStorage(via);
            
            if ($('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bu _52jg"]') > 0) {
                $('a[class="_54k8 _56bs _26vk _56b_ _5-cz _56bw _56bu _52jg"]')[0].click();
            }
        }
    }

    enable2Fa = async (via) => {
        const systemUtils = new SystemUtils;

        if ($('span[class="mfsm"]') > 0) {
            let messageError = $('span[class="mfsm"]')[0].innerText;
        }
        if ($('a[class="_54k8 _56bs _26vk _56bu _52jg"]') > 0) {
            $('a[class="_54k8 _56bs _26vk _56bu _52jg"]')[0].click();
        }
        if ($('input[name="pass"]') != null) {
            $('input[name="pass"]').val(via.passwordNew);
        }

        await systemUtils.sleep(1000);

        if ($('button[name="save"]') != null) {
            $('button[name="save"]').click();
        }
    }

    getCode2Fa = async (via) =>{
        const systemUtils = new SystemUtils;
        if ($('div[class="_52jh _52jj _66g5"]') > 0) {
            let qRcode2FA = $('div[class="_52jh _52jj _66g5"]')[0].innerText

            via.setQRcode2Fa = qRcode2FA;

            this.saveViaToStorage(via);
            
            await systemUtils.sleep(500);

            message = {};
            message.data = qRcode2FA;
            message.type = 'request_2FA';

            systemUtils.requestGetDataToBackground(message);
        }

    }

    confirm2Fa = async (via) =>{
        const systemUtils = new SystemUtils;

        if ($('button[name="confirmButton"]') != null) {
            $('button[name="confirmButton"]').click();
        }

        await systemUtils.sleep(500);

        // bị checkpoint
        if ($('input[name="captcha_response"]') != null) {
            $('input[name="captcha_response"]').val(via.passwordNew);
        }

        await systemUtils.sleep(1000);

        via.setIs2Fa = new FB().CHANGE_2FA_SUCCESS;
        this.saveViaToStorage(via);
        
        if ($('button[name="submit[Continue]"]') != null) {
            $('button[name="submit[Continue]"]').click();
        }
    }

    setCode2Fa = async (code2Fa) => {
        const systemUtils = new SystemUtils;

        if ($('input[name="code"]') != null) {
            $('input[name="code"]').val(code2Fa);
        }
        
        await systemUtils.sleep(1000);

        if ($('button[id="submit_code_button"]') != null) {
            $('button[id="submit_code_button"]').click();
        }
    }

    saveViaToStorage = (via) => { 
        const systemUtils = new SystemUtils;
        systemUtils.saveDataToStorage(data = {'data': via});
    }

    okStepMailChinh = async () => {
        const systemUtils = new SystemUtils;
        let step = new StepChangeVia();
        step.formObject((await systemUtils.getDataToStorage(STEP)).step);
        step.isEmailChinh = step.OK;
        systemUtils.saveDataToStorage(data = {'step': step});
    }

    okRemoveEmail = async () => {
        const systemUtils = new SystemUtils;
        let step = new StepChangeVia();
        step.formObject((await systemUtils.getDataToStorage(STEP)).step);
        step.isRemoveEmail = step.OK;
        systemUtils.saveDataToStorage(data = {'step': step});
    }
}