import { SystemUtils } from "../utils/SystemUtils";

export class FaCodeModel {

    getCode2Fa = (via) => {

        const systemUtils = new SystemUtils;

        // if ($('a[id="edit"]') != null) {
        //     $('a[id="edit"]').click();
        // }

        //click btn edit
        if ($('a[class="header-icon ui-link ui-btn-right ui-btn ui-icon-edit ui-btn-icon-notext ui-shadow ui-corner-all"]').length > 0) {
            $('a[class="header-icon ui-link ui-btn-right ui-btn ui-icon-edit ui-btn-icon-notext ui-shadow ui-corner-all"]')[0].click();
        }

        await systemUtils.sleep(1000);

        //del các mã cũ nếu có
        if ($('p[class="ui-li-aside"]').length > 0) {
            let btnDelete = $('p[class="ui-li-aside"]')
            for (let i = 0; i < btnDelete.length; i++) {
                let clickBtn = $('p[class="ui-li-aside"]')
                clickBtn[0].click();
            }
             systemUtils.sleep(1000);
        }

        if ($('a[class="ui-btn ui-icon-plus ui-btn-icon-left"]').length > 0) {
            $('a[class="ui-btn ui-icon-plus ui-btn-icon-left"]')[0].click();
        }

         systemUtils.sleep(1000);

        //const data =  getDataToStorage('data');

        if ($('input[name="keyAccount"]') !== null) {
            $('input[name="keyAccount"]').val('test');
        }

         systemUtils.sleep(1000);

        if ($('input[name="keySecret"]') !== null) {
            $('input[name="keySecret"]').val(via.qRcode2Fa);
        }

         systemUtils.sleep(1000);
        if ($('a[class="ui-btn ui-icon-plus ui-btn-icon-left ui-first-child"]').length > 0) {
            $('a[class="ui-btn ui-icon-plus ui-btn-icon-left ui-first-child"]')[0].click();
        }

         systemUtils.sleep(1000);

        if ($('li[class="ui-li-static ui-body-inherit ui-last-child"]').length > 0) {
            let qRcode = 0;
            let html = $('li[class="ui-li-static ui-body-inherit ui-last-child"]')[0].innerHTML;
            const regex = /<h3>(?<res>\w{1,10})<\/h3>/gm;
            qRcode = systemUtils.regexString(html, regex);
            systemUtils.saveDataToStorage(data = {'code2Fa': qRcode });
             systemUtils.sleep(1000);
            systemUtils.requestGetDataToBackground(message = {data: 'getData',type: 'request_closeTab'});
        }
    }
}