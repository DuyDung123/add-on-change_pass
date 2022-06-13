import { Job_Mail } from "./job/Job_Mail";
import { VIA } from "./utils/Constants";
import { SystemUtils } from "./utils/SystemUtils";

const job_mail = new Job_Mail;
(async() => {
    const systemUtils = new SystemUtils;
    let url = systemUtils.getUrlPage();
    if(await systemUtils.checkDataToStorage(VIA)){
        if (url.includes("google.com")) {
            job_mail.gmail();
        } if (url.includes("live.com") || url.includes("microsoft.com")) {
            job_mail.outLook();
        }
    }else{
    }

 })();