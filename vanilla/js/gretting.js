const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greettings = document.querySelector(".js-greettings")

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // 기본동작 막기
    const currentValue = input.value;
    paintGreetting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreetting(text){
    form.classList.remove(SHOWING_CN);
    greettings.classList.add(SHOWING_CN);
    greettings.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreetting(currentUser);
    }
}

function init(){
  
    loadName();
}

init();
