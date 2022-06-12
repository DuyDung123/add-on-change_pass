import { FaCodeModel } from "../model/FaCodeModel";
import { Via } from "../object/Via";
import { VIA } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils";

export class Job_GetCode2Fa {
    getCode2Fa = async () => {
        const systemUtils = new SystemUtils;
        await systemUtils.sleep(2000);
        let url = document.location.href;
        let title = document.getElementsByTagName('title')[0].innerText;
        console.log(title);
        console.log(url);
        if (url.includes("https://gauth.apps.gbraad.nl")) {
            const faCodeModel = new FaCodeModel;
            const via = new Via((await systemUtils.getDataToStorage(VIA)).data);
            faCodeModel.getCode2Fa(via.qRcode2Fa);
        }
    }
}