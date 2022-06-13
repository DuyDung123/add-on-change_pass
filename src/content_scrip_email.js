import { Job_Mail } from "./job/Job_Mail";

const job_mail = new Job_Mail;
(async() => {
    let url = document.location.href;
    if (url.includes("google.com")) {
        job_mail.gmail();
    } if (url.includes("live.com") || url.includes("microsoft.com")) {
        job_mail.outLook();
    }
 })();