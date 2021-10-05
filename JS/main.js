const icoMenu = document.querySelector(".header__menu");
const icoClose = document.querySelector(".header__close");
const menu = document.querySelector(".menu-panel");
const menuItems = document.querySelectorAll(".menu-panel li");

const timeOutAnimation = 1200;

function showMenu() {
  icoMenu.style.display = "none";
  menu.style.display = "block";
  menu.style.animationName = "showMenu";

  setTimeout(() => {
    icoClose.style.display = "block";

    menuItems.forEach((item) => {
      item.style.display = "block";
    });
  }, timeOutAnimation);
}

function hideMenu() {
  icoClose.style.display = "none";
  menu.style.animationName = "hideMenu";

  menuItems.forEach((item) => {
    item.style.display = "none";
  });

  setTimeout(() => {
    menu.style.display = "none";
    icoMenu.style.display = "block";
  }, timeOutAnimation);
}

icoMenu.addEventListener("click", showMenu);
icoClose.addEventListener("click", hideMenu);
