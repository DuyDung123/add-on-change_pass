import { BASE_URL_M_FB } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils";
export class ChangePassFBModel {

    constructor(){}

    BASE_URL_M_FB = "https://m.facebook.com/";

    login = (via) => {
        if ($('input[name="email"]') != null) {
            $('input[name="email"]').val(via.uid);
        }

        await sleep(2000);

        if ($('input[name="pass"]') != null) {
            $('input[name="pass"]').val(via.pass);
        }

        await sleep(2000);

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
        if ($('button[class="_54k8 _52jg _56bs _26vk _86fw _86fx _86fj _86fm _86fe _2rgt _1j-g _2rgt _56bt"]') != null) {
            $('button[class="_54k8 _52jg _56bs _26vk _86fw _86fx _86fj _86fm _86fe _2rgt _1j-g _2rgt _56bt"]')[0].click();
        }
    } 

    changeMail = (element, via) =>{
        const systemUtils = new SystemUtils;
        let addEmail = element;
        if (addEmail != null) {
            addEmail[addEmail.length - 2].click();

            await sleep(3000);

            if ($('input[name="email"]') != null) {
                $('input[name="email"]').val(via.emailNew);
            }

            await sleep(2000);

            if ($('input[name="save_password"]') != null) {
                $('input[name="save_password"]').val(via.pass);
            }

            await sleep(2000);

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
}