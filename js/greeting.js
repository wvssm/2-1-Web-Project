const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input"); //위에서 login-form을 받았기 때문에 이를 바로 이용하여 input과 button에 접근할 수 있다.
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
/*const loginInput = document.querySelector("#login-form input"); 
const loginButton = ldocument.querySelector("#login-form button"); 이렇게도 찾기 가능*/

/*function onLoginBtnClick() {
    const username = loginInput.value;
    if(username === "") {
        console.log("Please write your name");
    } else if(username.length) {
        alert("Your name is too long."
    }

}
loginButton.addEventListener("click",onLoginBtnClick)*/ //html의 힘을 빌려 함수 구현 필요없이 할 수 있음

function paintingGreeting(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME); //입력 후 창 없애기
    greeting.innerText = `Hello, ${username}`; //'아니고 `(백틱)이다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본 동작 멈추기
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreeting(username);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintingGreeting(saveUsername);
}