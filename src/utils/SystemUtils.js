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
}