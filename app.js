const click = document.querySelector("#click");
console.log(click);

function handleTitleClick() {
  //   activeClassName = "active";
  //   if (this.classList.contains(activeClassName)) {
  //     this.classList.remove(activeClassName);
  //   } else {
  //     this.classList.add(activeClassName);
  //   }
  this.classList.toggle("active");
}

function handleMouseEnteer() {
  this.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  this.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no wifi!!");
}

function handleWindowOnline() {
  alert("All Good!");
}

// click.onclick = handleTitleClick;
// click.onmouseenter = handleMouseEnteer;
// click.onmouseleave = handleMouseLeave;

click.addEventListener("click", handleTitleClick);
click.addEventListener("mouseenter", handleMouseEnteer);
click.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
