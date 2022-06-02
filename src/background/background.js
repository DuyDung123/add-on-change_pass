import { BASE_HOST_MAIL, BASE_MAIL_GOOGLE, BASE_SERVER, BASE_URL_2FA, BASE_URL_FB } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils"
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    const systemUtils = new SystemUtils;
    if (message) {
        if(message.type == 'load_data'){
            loadData(message.data);
        }
        if(message.type == 'request_CodeEmail'){
            let email = message.data;
            let url = BASE_HOST_MAIL;
            if(email.includes("gmail.com")){
                url = BASE_MAIL_GOOGLE;
            }
            systemUtils.openNewTab(url);
        }
        if(message.type == 'request_2FA'){
            var data = getDataToStorage("data");
            data.qRcode2FA = message.data;
            saveDataToStorage(data);
            systemUtils.openNewTab(BASE_URL_2FA);
        }
        if(message.type == 'request_closeTab'){
            chrome.tabs.remove(sender.tab.id);
        }
        if (message.type == 'get_cookie') {
            chrome.cookies.getAll({
                "url": BASE_URL_FB,
            }, function (cookie) {
                let stringCookie = "";
                for (let i = 0; i < cookie.length; i++) {
                    stringCookie += cookie[i].name + "=" + cookie[i].value + "; ";
                }
                let data = systemUtils.getDataToStorage("data");
                data.cookie = stringCookie;
                systemUtils.saveDataToStorage(data);
            });
        }
        if (message.type == 'get_token') {

        }
    }
});

function loadData(data) {
    $.ajax({
        type: "GET",
        url: BASE_SERVER + "/getData",
        success: function (response) {
            saveDataToStorage(response);
        },
        error: function (error) {
            console.log(error);
        }
    });
}