const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //이전의 값, 시작할때마다 이전의 저장된(local storage에 있는 값도 가져오고 싶음)

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //toDos 입력내용을 문자열로 만들어 localstorage에 저장
}

function deleteToDo(event){  //submit과 마찬가지로 click도 동작에 대한 정보를 가지고 있다.
    //console.log(event.target.parentElement.innerText); //target은 클릭한 element다. element는 또 하나이상의 property를 가진다.
    //parent element는 클릭한 element의 부모이다.
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();

}

function paintToDo(newTodoObj){
     const li = document.createElement("li");
     li.id = newTodoObj.id; //항목 삭제를 위해 id 만듦
     const span = document.createElement("span");
     span.innerText = newTodoObj.text;
     const button = document.createElement("button");
     button.innerText ="❌";
     li.appendChild(span);
     button.addEventListener("click", deleteToDo);
     li.appendChild(button);
     toDoList.appendChild(li); //document으로 시작 안하고 toDoList에 append child 하면 된다.
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input 안에 있는 내용
    toDoInput.value = ""; //input 창 비우기
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    } //텍스트로 저장 안하고 obj로 저장
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); //parse한 item을 넘겨주기 때문에 아무 것도 안넣어도 된다.
    //배열의 요소마다 실행됨
}

//배열요소 지울때 filter() 사용, 실제 배열의 요소 지우는 것이 아니라
//그 요소 제외하고 배열 생성
