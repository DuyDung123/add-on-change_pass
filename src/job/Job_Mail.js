import { EmailModel } from "../model/EmailModel";
import { SystemUtils } from "../utils/SystemUtils";
import { VIA } from "../utils/Constants";
import { Via } from "../object/Via";
import { HosstMailModel } from "../model/HostMailModel";

export class Job_Mail {
    
    constructor(){}

    gmail = async () => {
        const systemUtils = new SystemUtils;
        const emailModel = new EmailModel;
        const via = new Via(await systemUtils.getDataToStorage(VIA));
        await systemUtils.sleep(2000);
        let url = document.location.href;
        let title = document.getElementsByTagName('title')[0].innerText;
        console.log(title);
        console.log(url);
        if (url.includes("https://accounts.google.com/signin/v2/")) {
            if (url.includes("/signin/v2/identifier")) {
                emailModel.gmail_Login(via.emailNew, via.passEmailNew);
            }
        }
        if (url.includes("https://gds.google.com/web/chip?")) {
            if ($('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf ksBjEc lKxP2d qfvgSe k97fxb yu6jOd"]') > 0) {
                $('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf ksBjEc lKxP2d qfvgSe k97fxb yu6jOd"]')[0].click();
            }
        }
        if(url.includes("https://myaccount.google.com/?utm_source=sign_in_no_continue")){
            window.location.href = "https://mail.google.com/mail/u/0/";
        }
        if (url.includes("https://mail.google.com/mail/u/0/")) {
            await systemUtils.sleep(2000);
            emailModel.searchMessage();
        }
    }
    
    outLook = async () => {

        const systemUtils = new SystemUtils;
        const hostMailModel = new HosstMailModel;
        const via = new Via(await systemUtils.getDataToStorage(VIA));
        await systemUtils.sleep(2000);
        let url = document.location.href;
        let title = document.getElementsByTagName('title')[0].innerText;
        console.log(title);
        console.log(url);

        if (url.includes("https://login.live.com/login")) {
            hostMailModel.hostMail_login(via.emailNew, via.passEmailNew);
        }
        if (url.includes("https://login.live.com/ppsecure/")) {
            // k hiển thị thông báo.
            if ($('input[name="DontShowAgain"]') !== null) {
                $('input[name="DontShowAgain"]').click();
            }

            await systemUtils.sleep(1000);

            if ($('input[id="idBtn_Back"]') != null) {
                $('input[id="idBtn_Back"]').click();
            }
        } if (url.includes("https://outlook.live.com/mail/0")) {
            hostMailModel.searchMessage();
        }
    }
}