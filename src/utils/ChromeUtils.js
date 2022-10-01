import { BASE_SERVER, NAME_PROJECT } from "./Constants";

export class ChromeUtils {
    constructor(){}

    chromeHello = async () => {
        alert("hello");
    }

    checkVersionChrome = (nameProject, currentVersion) =>{
        let url = BASE_SERVER + "/chrome-check-version/" + nameProject + "/" + currentVersion;
        fetch(url).then(res => {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else {
                throw new Error();
            }
        }).then((data) => {
            console.log(data);
            return data;
        }).catch((err) => {
            console.log('fetch() checkVersionChrome => ' + err);
            return false;
        })
    }

    updateVersionChrome = async () => {
        if(url.includes("chrome://extensions")) {
            let listExtensions = document.getElementsByTagName("extensions-item");
            console.log("updateVersionChrome: " + listExtensions.length)
            for (let index = 0; index < listExtensions.length; index++) {
                const element = listExtensions[index];
                let textDescription = element.shadowRoot.querySelector("#description").textContent;
                if(textDescription.includes(NAME_PROJECT)) {
                    let btnReload = element.shadowRoot.querySelector("#button-strip").shadowRoot.querySelector("#dev-reload-button");
                    btnReload.click();
                }
            }
        }
    }

    getIdExtensionChrome = async () => {
        if(url.includes("chrome://extensions")) {
            let listExtensions = document.getElementsByTagName("extensions-item");
            console.log("updateVersionChrome: " + listExtensions.length)
            for (let index = 0; index < listExtensions.length; index++) {
                const element = listExtensions[index];
                let textDescription = element.shadowRoot.querySelector("#description").textContent;
                if(textDescription.includes(NAME_PROJECT)) {
                    return idExtension = element.getAttribute("id");
                }
            }
        }
    }

    extensionChromeOnOffModeIncognito = async (idExtension, flag) => {
        if(url.includes("chrome://extensions")) {
            window.location.href = "chrome://extensions/?id=" + idExtension;
            let allowIincognito = document.getElementById("allow-incognito");
            let toggle = allowIincognito.shadowRoot.querySelector("#crToggle");
            checked = toggle.getAttribute("aria-pressed").includes = "true";
            if(flag && !checked){ // enable allow incognito
                toggle.click();
                return;
            }
            if(!flag && checked){ // disable allow incognito
                toggle.click();
                return;
            }
        }
    }
}