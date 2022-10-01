import { ChromeUtils } from "./utils/chromeUtils";
import { SystemUtils } from "./utils/SystemUtils";

const chorme = new ChromeUtils;
const systemUtils = new SystemUtils;
(async() => {
    if(systemUtils.getUrlPage().includes("http://127.0.0.1:5001")){
        systemUtils.goToPage("chrome://extensions");
    }else{
        alert("error");
    }
    if(systemUtils.getUrlPage().includes("chrome://extensions")){
        chorme.updateVersionChrome();
        await systemUtils.sleep(2000);
        let idExtension = chorme.getIdExtensionChrome();
    }
 })();