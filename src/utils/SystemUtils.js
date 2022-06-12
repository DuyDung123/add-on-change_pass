export class SystemUtils{

    constructor(){}

    clearStorage = () =>{
        chrome.storage.sync.clear();
    }

    requestGetDataToBackground = (message) => {
        chrome.runtime.sendMessage(message);
    }
    
    getDataToStorage = (key) =>{
        return new Promise(resolve => {
            chrome.storage.sync.get(key, function(item){
                console.log(item.data);
                resolve(item.data);
            });
        });
    }
    
    saveDataToStorage = (data) => {
        chrome.storage.sync.set(data);
        console.log(data);
    }
    
    getUrlTab = (tabIndex) => {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
            let url = tabs[tabIndex].url;
            console.log(url);
            // use `url` here inside the callback because it's asynchronous!
        });
    }
    
    openNewTab = (newURL) =>{
        chrome.tabs.create({ url: newURL });
    }

    checkDataToStorage = (key) => {
        return new Promise(resolve => {
            chrome.storage.sync.get(key, function (da) {
                if (!jQuery.isEmptyObject(da)) {
                    console.log(da);
                    if (typeof da.data === 'undefined') {
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                } else {
                    console.log(da);
                    resolve(false);
                }
            });
        });
    }

    goToPage = (url) =>{
        window.location.href = url;
    }

    regexString = (html, regex) =>{
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

    sleep =(ms) =>{
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}