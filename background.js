function createDate() {
    let today = new Date();
    let hour = String(today.getHours());
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    if (hour.length < 2) {
        hour = '0' + hour;
    }
    const date = mm + '/' + dd + '/' + yyyy + '/' + hour;
    return date
}

function compareDates(oldDate) {
    const today = createDate();
    const month = parseInt(today.slice(0, 2));
    const day = parseInt(today.slice(3, 5));
    if (month != parseInt(oldDate.slice(0, 2)) || day > parseInt(oldDate.slice(3, 5))) {
        return true;
    }
    return false;
}

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason == "install") {
        chrome.action.setBadgeText({ text: '!' });
    } 
})

chrome.tabs.onCreated.addListener(() => {
    chrome.storage.sync.get('Daily', (data) => {
        if (compareDates(data.Daily)) {
            chrome.action.setBadgeText({ text: '!' });
        }
      })
})

