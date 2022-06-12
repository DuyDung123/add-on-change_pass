import { StepChangeVia } from "../object/StepChangeVia";
import { Via } from "../object/Via";
import { CODEEMAIL, STEP, VIA } from "../utils/Constants";
import { SystemUtils } from "../utils/SystemUtils";

$(document).ready(function () {
    $(document).on('click', '#btn_get_via', function () {
        const systemUtils = new SystemUtils;
        const message = {};
        message.data = 'getData';
        message.type = 'load_data';
        systemUtils.requestGetDataToBackground(message);
        let st = new StepChangeVia(); 
        st = {'step': st};
        systemUtils.saveDataToStorage(st);
    });

    $(document).on('click', '#btn_show_Via', async function () {
        debugger;
        const systemUtils = new SystemUtils;
        let data = await systemUtils.getDataToStorage(VIA);
        if (Object.keys(data).length !== 0) {
            let via = new Via(data.data);
            console.log(via);
            let step = (await systemUtils.getDataToStorage(STEP)).step;
            console.log(step);
            let codeEmail = (await systemUtils.getDataToStorage(CODEEMAIL)).codeEmail;
            console.log(codeEmail);
        }else{
            console.log("empty");
        }

    });

    $(document).on('click', '#btn_check_stogate', async function () {
        const systemUtils = new SystemUtils;
        const data = await systemUtils.checkDataToStorage(VIA);
        console.log(data);
    });

    $(document).on('click', '#btn_clear_stogate', function () {
        const systemUtils = new SystemUtils;
        systemUtils.clearStorage();
    });

    $(document).on('click', '#get_token', function () {
        const systemUtils = new SystemUtils;
        let data = {'codeEmail': 1234 };
        systemUtils.saveDataToStorage(data);
        // getToken();
    });

    $(document).on('click', '#get_cookie', function () {
        getCookie();
    });

});

function loadStep(systemUtils){
    let data = new StepChangeVia();
    data = data.toJsonObject();
    systemUtils.saveDataToStorage(data = {'step': data});
}

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