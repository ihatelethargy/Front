const form = document.querySelector(".js-form"),
      input = form.querySelector("input");

const greeting = document.querySelector(".greeting__box__span");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";


function saveUser(user){
    localStorage.setItem(USER_LS,user);
}

function getUser(event){
    event.preventDefault();
    const userName = input.value;
    paintUser(userName);
    saveUser(userName);
}

function askUser(){
    form.classList.add(SHOWING_CN);
    greeting.classList.remove(SHOWING_CN);
    form.addEventListener("submit",getUser);
}

function paintUser(user){
    greeting.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
    greeting.innerHTML = `hi ${user}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askUser();
    }else{
        paintUser(currentUser);
    }
}

function init(){
    loadName();
}

init();