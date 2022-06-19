const loginForm = document.querySelector("#greetingForm");
const loginInput = document.querySelector("#greetingForm input");
const greeting = document.querySelector("#greeting");
const refreshBtn = document.querySelector("#refreshBtn")
const qName = document.querySelector("#qName")
const toDoDiv = document.querySelector("#toDoDiv")
const toDoList2 = document.querySelector("#toDoList")


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  refreshBtn.classList.remove(HIDDEN_CLASSNAME);
  qName.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoDiv.classList.remove(HIDDEN_CLASSNAME)
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function refreshHandler(){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    greeting.innerText = "";
    loginInput.value = "";
    refreshBtn.classList.add(HIDDEN_CLASSNAME);
    qName.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    toDoDiv.classList.add(HIDDEN_CLASSNAME);
  
    toDoList.innerHTML = ""
    localStorage.removeItem("todos");
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  loginForm.addEventListener("submit", onLoginSubmit);

  qName.classList.remove(HIDDEN_CLASSNAME)
  refreshBtn.classList.add(HIDDEN_CLASSNAME)
  
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
  refreshBtn.classList.remove(HIDDEN_CLASSNAME)
  toDoDiv.classList.remove(HIDDEN_CLASSNAME)
}


refreshBtn.addEventListener("click", refreshHandler) 