// // Menu js
// var hamburger = document.getElementById("hamburger");
// var menu = document.getElementById("menu");
// var line = document.getElementsByClassName("line");

// var i = 0;
// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("menu-open");
//   menu.classList.toggle("menu-open");
//   for (i = 0; i < line.length; i++) {
//     line[i].classList.toggle("menu-open");
//   }
// });

// document.addEventListener("contextmenu", (event) => event.preventDefault());

var menuBtn = document.querySelector(".menu-btn");
var sideMenu = document.querySelector("#nav-menu");
var crossBtn = document.querySelector("#nav-menu .menu-btn");
// var y = 0;
var z = 0;
function open_menu() {
  // console.log("open")
    if (sideMenu.style.display == "none") {
      sideMenu.setAttribute("style", "display:block;");
    }
}
function keep_menu_open(){
  if (sideMenu.style.display == "block") {
    sideMenu.setAttribute("style", "display:block;");
  }
}
function close_menu() {
  // console.log("close")
  // console.log(z)
    if (sideMenu.style.display == "block" && z==0){
      sideMenu.setAttribute("style", "display:none;");
    }
}
// menuBtn.addEventListener("click", open_menu, false);
// crossBtn.addEventListener("click", close_menu, false);
