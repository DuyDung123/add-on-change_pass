export class SystemUtils{

    constructor(){}

    clearStorage = () =>{
        chrome.storage.sync.clear();
    }
    
    getDataToStorage = (key) =>{
        let data ;
        chrome.storage.sync.get(key, function(items){
            data = items;
            console.log(data);
        });
        return data;
    }
    
    saveDataToStorage = (data) => {
        chrome.storage.sync.set({ 'data': data });
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

    requestGetDataToBackground = (message) => {
        chrome.runtime.sendMessage(message);
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

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}