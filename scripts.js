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

  var navBar = document.createElement("ul");
  navBar.innerHTML =
    '<li><a id="home" class="btn" href="default.asp">Home</a></li><li><a id="news" class="btn" href="news.asp">News</a></li> <li><a id="contact" class="btn" href="contact.asp">Contact</a></li> <li><a id="about" class="btn">About</a></li>';
  document.body.appendChild(navBar);

  var contentEl = document.createElement("div");
  contentEl.id = "content";
  document.body.appendChild(contentEl);

  function loadAbout() {
    document.getElementById("content").innerText = "Welcome";
  }

  document.getElementById("about").addEventListener("click", loadAbout);
}

document.addEventListener("DOMContentLoaded", startScript);
