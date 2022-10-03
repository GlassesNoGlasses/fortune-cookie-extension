const fortune = document.getElementsByClassName("fortune-box")[0];
const cookie = document.getElementsByClassName("cookie")[0];
const cookieShadow = document.getElementsByClassName("shadow")[0];
const message = document.getElementById("fortune-text");
let isDaily = true;
let count = 0;

// check if daily fortune available
chrome.storage.sync.get('Daily', (data) => {
  if (data.Daily && !compareDates(data.Daily)) {
    isDaily = false;
    document.getElementById("message").innerText = "Today's Fortune";
    fortune.style.opacity = 1;
    cookieShadow.id = "fioA";
    modifyCookie(cookie);
  }
  else {
    const today = createDate();
    chrome.storage.sync.set({ Daily: today });
  }
})

chrome.storage.sync.get('fortune', (data) => {
  if (data.fortune) {
    message.innerText = data.fortune;
  }
});

// audio sounds
const sound = new Audio("sound.wav");

// open fortune cookies
cookie.onclick = () => {
  if (isDaily && count == 0) {
    count++;
    sound.play();
    changeAnimationID(cookie, cookieShadow, "fooA");
    fortune.id = "fioA";
    const todayFortune = getFortune();
    message.innerText = todayFortune;
    chrome.storage.sync.set({ fortune: todayFortune });
    setTimeout(() => {
      modifyCookie(cookie);
      cookieShadow.id = "fioA";
    }, 2500);
  }
}

