import { SystemUtils } from "../utils/SystemUtils";
export class EmailModel{

    constructor(){}

    gmail_Login = async (email, pasword) => {
        const systemUtils = new SystemUtils;
        if ($('input[name="identifier"]') !== null) {
             $('input[name="identifier"]').val(email);
        }
        await systemUtils.sleep(1000);

        if ($('div[id="identifierNext"]') !== null) {
            $('div[id="identifierNext"]').click();
        }

        await systemUtils.sleep(2000);

        if ($('input[name="password"]') !== null) {
            $('input[name="password"]').val(pasword);
        }

        await systemUtils.sleep(1000);

        if ($('div[id="passwordNext"]') !== null) {
            $('div[id="passwordNext"]').click();
       }
    }

    searchMessage = async () => {        //tìm tin nhắn
        debugger

        const systemUtils = new SystemUtils;

        if ($('input[name="q"]') !== null) {
            $('input[name="q"]').val('facebook');
        }

        await systemUtils.sleep(2000);


        let btnSearch = $('form[id="aso_search_form_anchor"] button[role="button"]:last-of-type');
        if(btnSearch !== null){
            btnSearch.click();
        }
        await systemUtils.sleep(3000); //F cf zt ///zA yO

        let index = $('tbody tr td[class="PF xY"]');
        if ($('tbody tr td[class="PF xY"]').length > 0) {
            $('tbody tr td[class="PF xY"]')[index.length -1].click();
        }

        await systemUtils.sleep(2000);

        let html = $('div[class="G3 G2"]');
        console.log(html[0].innerHTML);
        if ($('div[class="G3 G2"]').length > 0) {
            let qRcode = 0;
            let html = $('div[class="G3 G2"]')[0].innerHTML;
            let regex = /c=(?<res>\w{1,6})/gm;
            qRcode = systemUtils.regexString(html, regex);
            if (typeof qRcode !=='undefined' && qRcode != 0) {
                let data = {'codeEmail': qRcode };
                systemUtils.saveDataToStorage(data);
                await systemUtils.sleep(2000);
                const message = {};
                message.data = qRcode;
                message.type = 'request_closeTab';
                systemUtils.requestGetDataToBackground(message);
            } else {
                await systemUtils.sleep(5000);
                window.location.href = "https://mail.google.com/mail/u/0/";
            }
        }
    }
}
