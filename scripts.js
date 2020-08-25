function startScript() {
  console.log("Hello world");
}

document.addEventListener("DOMContentLoaded", startScript);
document.body.style.backgroundImage = 'url("bg.jpg")';
var div = document.createElement("div");
div.id = "title-wrapper";
document.body.appendChild(div);
document.getElementById("title-wrapper").style.textAlign = "center";
document.getElementById("title-wrapper").style.top = "50%";
document.getElementById("title-wrapper").style.fontFamily = "impact";
document.getElementById("title-wrapper").style.textTransform = "uppercase";
document.getElementById("title-wrapper").style.position = "absolute";

var h1 = document.createElement("h1");
h1.innerText = "Work under progress...";
h1.id = "title";
document.body.appendChild(title);
document.getElementById("title").style.width = "fit-content";
document.getElementById("title").style.margin = "auto";
document.getElementById("title").style.background = "black";
document.getElementById("title").style.color = "white";
