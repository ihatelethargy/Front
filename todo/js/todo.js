const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li"); // li 만들기
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);       // 만들거 넣기
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";                       // submit 처럼 처리가 된다.
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null){
        
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
