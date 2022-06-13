import { HosstMailModel } from "../model/HostMailModel";
import { Mail } from "../object/Mail";
import { MAIL } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils";

export class JOb_Register_Mail {

    constructor() { }

    register_Gmail = async () => {
        let url = systemUtils.getUrlPage();
    }

    register_HostMail() {
        const systemUtils = new SystemUtils;
        let url = systemUtils.getUrlPage();
        let mail = new Mail();
        const data = this.getData();
        mail = mail.formObject(data);
        if(url.includes("signup.live.com/signup")){
            new HosstMailModel().register(systemUtils, mail); 
        }
    }

    getData = async () => {
        const systemUtils = new SystemUtils;
        const message = {};
        message.data = 'getData';
        message.type = 'load_data_mail';
        systemUtils.requestGetDataToBackground(message);

        while (true) {
            if (await systemUtils.checkDataToStorage(MAIL)) {
                break;
            } else {
                await systemUtils.sleep(5000);
            }
        }

        return (await systemUtils.getDataToStorage(MAIL)).mail;
    }
}