import { ChromeUtils } from "./utils/chromeUtils";
import { SystemUtils } from "./utils/SystemUtils";

const chorme = new ChromeUtils;
const systemUtils = new SystemUtils;
(async() => {
    if(systemUtils.getUrlPage().includes("localhost")){
        const message = {};
            message.data = 'getData';
            message.type = 'chrome_extension';
            systemUtils.requestGetDataToBackground(message);
    }else{
        alert("error");
    }
    // if(systemUtils.getUrlPage().includes("chrome://extensions")){
    //     chorme.chromeHello();
    //     chorme.updateVersionChrome();
    //     await systemUtils.sleep(2000);
    //     let idExtension = chorme.getIdExtensionChrome();
    // }
 })();