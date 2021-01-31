var htmlElements = "";
for (var i = 0; i < 3; i++) {
   htmlElements += '<div class="box"></div>';
}
var container = document.getElementById("project-box");
container.innerHTML = htmlElements;