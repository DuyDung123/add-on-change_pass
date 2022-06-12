import { SystemUtils } from "../utils/SystemUtils";
export class EmailModel{

    constructor(){}

    gmail_Login = async (email, pasword) => {
        const systemUtils = new SystemUtils;
        if ($('input[name="identifier"]') !== null) {
             $('input[name="identifier"]').val(email);
        }
        await systemUtils.sleep(1000);

        if ($('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b"]').length > 0) {
            $('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b"]')[0].click();
        }

        await systemUtils.sleep(2000);

        if ($('input[name="password"]') !== null) {
            $('input[name="password"]').val(pasword);
        }

        await systemUtils.sleep(1000);

        if ($('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b"]') > 0) {
            $('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b"]')[0].click();
        }
    }

    searchMessage = async () => {        //tìm tin nhắn

        const systemUtils = new SystemUtils;

        if ($('input[name="q"]') !== null) {
            $('input[name="q"]').val('facebook');
        }

        await systemUtils.sleep(2000);

        if ($('button[class="gb_nf gb_of"]') > 0) {
            $('button[class="gb_nf gb_of"]')[0].click();
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
            regex = /c=(?<res>\w{1,6})/gm;
            qRcode = regexString(html, regex);
            if (qRcode != 0) {
                let data = {'codeEmail': qRcode };
                systemUtils.saveDataToStorage(data);
                await systemUtils.sleep(2000);
                const message = {};
                message.data = qRcode;
                message.type = 'request_closeTab';
                requestGetDataToBackground(message);
            } else {
                await systemUtils.sleep(5000);
                window.location.href = "https://mail.google.com/mail/u/0/";
            }
        }
    }
}
