//responzivní menu:

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let header = document.querySelector(".header");
let menuItem = document.querySelectorAll(".menu__link");


hamburger.addEventListener("click", responsiveMenu);
function responsiveMenu() {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  header.classList.toggle("move");
}

menuItem.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  header.classList.remove("move");
}