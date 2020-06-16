const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function handleToDos(event){
    event.preventDefault();
    const getToDos = toDoInput.value;
    paintToDos(getToDos);
    toDoInput.value = "";
}

function delBtnHandler(){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const newLS = toDos.filter(function(todo) {
        return parseInt(li.id) !== todo.id;
    });
    toDos = newLS;
    saveToDos();
}

function paintToDos(text){
    const li = document.createElement("li");
    const newId = toDos.length + 1;
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click",delBtnHandler);
    span.innerText = text;
    delBtn.innerText = 'x';
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    toDosObj = {
        text: text,
        id: newId
    }
    toDos.push(toDosObj);
    saveToDos();
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(item){
            paintToDos(item.text);
        })
        
    }
}

function init(){
    loadToDos();
    addEventListener("submit",handleToDos);
}

init();