const element = document.querySelector("button");

function login() {
 log.innerText = "User logged in.";
}

function makeBig() {
 element.style.fontSize = (parseInt(element.style.fontSize.replace("em", "")) + 2) + "em";
}
element.onclick = makeBig;
element.style.fontSize = "0.8em";