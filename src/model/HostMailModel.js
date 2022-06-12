import { SystemUtils } from "../utils/SystemUtils";
export class HosstMailModel {

    login = async (email, pasword) => {

        const systemUtils = new SystemUtils;

        if ($('input[name="loginfmt"]') !== null) {
            $('input[name="loginfmt"]').val(email);
        }

        await systemUtils.sleep(1000);

        if ($('input[id="idSIButton9"]') !== null) {
            $('input[id="idSIButton9"]').focus();
        }
        await systemUtils.sleep(1000);

        if ($('input[id="idSIButton9"]') !== null) {
            $('input[id="idSIButton9"]').click();
        }

        await systemUtils.sleep(1000);

        if ($('input[name="passwd"]') !== null) {
            $('input[name="passwd"]').val(pasword);
        }

        await systemUtils.sleep(1000);

        if ($('input[id="idSIButton9"]') !== null) {
            $('input[id="idSIButton9"]').focus();
        }

        await systemUtils.sleep(1000);

        if ($('input[id="idSIButton9"]') !== null) {
            $('input[id="idSIButton9"]').click();
        }
    }

    searchMessage = async () => {  

        const systemUtils = new SystemUtils;

        await systemUtils.sleep(2000);

        if ($('button[id="Pivot19-Tab1"]') !== null) {
            $('button[id="Pivot19-Tab1"]')[0].click();
        }

        await systemUtils.sleep(3000);

        let btnError = $('button[class="ms-Button ms-Button--action ms-Button--command GMRugtYYURYKX1bCzPmL root-236"]');
        if(btnError.length > 0){
            $('button[class="ms-Button ms-Button--action ms-Button--command GMRugtYYURYKX1bCzPmL root-236"]')[0].click();
        }

        if ($('div[class="ZtMcNhhoIIOO6raJ3mUG"]').length > 0) {
            let qRcode = 0;
            let html = document.getElementsByClassName('ZtMcNhhoIIOO6raJ3mUG');
            console.log(html);
            let regex = /(?<res>[0-9]{5,6})/gm;
            for (let i = 0; i < html.length; i++) {
                qRcode = regexString(html[i].innerHTML, regex);
                console.log(qRcode);
                if (qRcode != 0) {
                    break;
                }
            }
            if (qRcode == 0) {
                regex = /c=(?<res>[0-9]{5,7})/gm;
                for (let i = 0; i < html.length; i++) {
                    html[i].click();
                    await systemUtils.sleep(1000);
                    let contentMail = document.getElementById('x_email_content');
                    qRcode = regexString(contentMail.innerHTML, regex);
                    if (qRcode != 0) {
                        console.log(qRcode);
                        break;
                    }
                }
            }
            if (qRcode != 0) {

                let data = {'codeEmail': qRcode };
                systemUtils.saveDataToStorage(data);

                await systemUtils.sleep(2000);
                const message = {};
                message.data = qRcode;
                message.type = 'request_closeTab';
                systemUtils.requestGetDataToBackground(message); 

            } else {
                await systemUtils.sleep(5000);
                window.location.href = "https://outlook.live.com/mail/0";
            }
        }
    }
}