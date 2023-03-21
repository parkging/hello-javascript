const loginForm = document.querySelector("#login-form");
const helloMessage = document.querySelector("#hello");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "userName";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function clickLoginButton(event) {
  event.preventDefault();
  const userName = document.querySelector("#userName").value;
  localStorage.setItem(USERNAME_KEY, userName);
  helloMessage.innerText = "hello " + userName;
  loginForm.classList.add(HIDDEN_CLASS);
  helloMessage.classList.remove(HIDDEN_CLASS);
}

function paintHelloMessage(userName) {
  loginForm.classList.add(HIDDEN_CLASS);
  helloMessage.classList.remove(HIDDEN_CLASS);
  helloMessage.innerText = "hello " + userName;
}

if (!savedUserName) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", clickLoginButton);
} else {
  paintHelloMessage(savedUserName);
}
