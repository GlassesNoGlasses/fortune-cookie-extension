function changeAnimationID(cookie, cookieShadow, newID) {
    cookie.id = newID;
    cookieShadow.id = newID
}

function changeMargins(htmlElement, left, right) {
    htmlElement.style.marginLeft = left;
    htmlElement.style.marginRight = right;
}

function getFortune() {
    const len = fortunes.length;
    const num = Math.floor(Math.random() * len);
    if (num >= len) {
        return fortunes[num - 1];
    }
    else if (num < 0) {
        return fortunes[0];
    }
    return fortunes[num];
}

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

// compares old date with current date
function compareDates(oldDate) {
    const today = createDate();
    const month = parseInt(today.slice(0, 2));
    const day = parseInt(today.slice(3, 5));
    if (month != parseInt(oldDate.slice(0, 2)) || day > parseInt(oldDate.slice(3, 5))) {
        return true;
    }
    return false;
}

function modifyCookie(cookie) {
    cookie.style.filter = "grayscale(" + 100+ "%)";
    cookie.id = "fioA";
}
