const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting__box = document.querySelector(".greeting__box"),
      greeting = greeting__box.querySelector("span");

const USER_LS = "currentUser";
const SHOWING_CL = "showing";

function askUser(){
    form.classList.add(SHOWING_CL);
    addEventListener("submit",handleSubmit);
}

function handleSubmit(event){
    event.preventDefault();
    const submitUser = input.value;
    paintUser(submitUser);
    input.value = "";
}

function saveUser(text){
    localStorage.setItem(USER_LS,text);
}

function paintUser(text){
    greeting.classList.add(SHOWING_CL);
    form.classList.remove(SHOWING_CL);
    greeting.innerText = text;
    saveUser(text);
}

function loadName(){
    const currentName = localStorage.getItem(USER_LS);
    if(currentName === null){
        askUser();
    }else{
        paintUser(currentName);
    }
}
      
function init(){
    loadName();
}

init();