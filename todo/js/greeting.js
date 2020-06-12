const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greeting");

const USER_CL = "currentUser";
const SHOWING_CN = "showing";

function handleSubmit(event){
    event.preventDefault();   
    const currentValue = input.value;
    paintGreeting(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    greeting.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
    greeting.innerHTML = `Hi ${text} ToDoList`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_CL);
    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();