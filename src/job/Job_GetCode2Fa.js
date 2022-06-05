import { FaCodeModel } from "../model/FaCodeModel";
import { SystemUtils } from "../utils/SystemUtils";

async function getCode2Fa() {
    await sleep(2000);
    let url = document.location.href;
    let title = document.getElementsByTagName('title')[0].innerText;
    console.log(title);
    console.log(url);
    if (url.includes("https://gauth.apps.gbraad.nl")) {
        const systemUtils = new SystemUtils;
        const faCodeModel = new FaCodeModel;
        const via = systemUtils.getDataToStorage('data');
        faCodeModel.getCode2Fa(via);
    }
}
