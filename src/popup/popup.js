import { Via } from "../object/Via";
import { SystemUtils } from "../utils/SystemUtils";

$(document).ready(function () {
    $(document).on('click', '#btn_get_via', function () {
        const systemUtils = new SystemUtils;
        const message = {};
        message.data = 'getData';
        message.type = 'load_data';
        systemUtils.requestGetDataToBackground(message);
    });

    $(document).on('click', '#btn_show_Via', async function () {
        const systemUtils = new SystemUtils;
        const data = await systemUtils.getDataToStorage('data');
        let via = new Via();
        let res = Object.assign(new Via(), await via.fromJsonStr(data));
        // via = via.formObject(via.fromJsonStr(data));
        console.log(res.uid);
    });

    $(document).on('click', '#btn_check_stogate', async function () {
        const systemUtils = new SystemUtils;
        const data = await systemUtils.checkDataToStorage('data');
        console.log(data);
    });

    $(document).on('click', '#btn_clear_stogate', function () {
        const systemUtils = new SystemUtils;
        systemUtils.clearStorage();
    });

    $(document).on('click', '#get_token', function () {
        getToken();
    });

    $(document).on('click', '#get_cookie', function () {
        getCookie();
    });

});

function getToken() {
    $.ajax({
        url: "https://business.facebook.com/",
        type: 'GET',
        success: function (result) {
            const regex = /accessToken":"([\w]{0,1000})/gm;
            let res = regexString(result, regex)
            document.getElementById('token').value = res;
            console.log(result);
        },
        error: function (error) {
            alert("error: " + error);
            console.log(error);
        }
    });
}

function getCookie() {
    chrome.cookies.getAll({
        "url": "https://www.facebook.com/",
    }, function (cookie) {
        var cookies = "";
        for (let i = 0; i < cookie.length; i++) {
            cookies += cookie[i].name + "=" + cookie[i].value + "; ";
        }
        document.getElementById('cookie').value = cookies;
    });
}

function regexString(html, regex) {
    let res;
    let group;
    while ((group = regex.exec(html)) !== null) {
        if (group.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        group.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
        res = group[group.length - 1];
    }
    return res;
}