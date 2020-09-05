function startScript() {
  console.log("Hello world");
  document.body.style.backgroundImage = 'url("bg.jpg")';
  var div = document.createElement("div");
  div.id = "title-wrapper";
  div.innterText = "Upper development";
  div.style.textAlign = "center";
  div.style.top = "50%";
  div.style.width = "100%";
  div.style.fontFamily = "impact";
  div.style.textTransform = "uppercase";
  div.style.position = "absolute";
  console.log(div.style);
  document.body.appendChild(div);

  var h1 = document.createElement("div");
  h1.id = "title";
  h1.innerText = "Work under progress...";
  document.getElementById("title-wrapper").appendChild(h1);
  document.getElementById("title").style.width = "fit-content";
  document.getElementById("title").style.margin = "auto";
  document.getElementById("title").style.background = "black";
  document.getElementById("title").style.color = "white";
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
