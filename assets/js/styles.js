// menu
let headerIcon = document.querySelector(".header-icon");
let icon = document.querySelector(".lnr-menu");
let menu = document.querySelector(".menu");

headerIcon.addEventListener("click", function () {
  if (icon.classList.contains("lnr-menu")) {
    icon.classList.replace("lnr-menu", "lnr-cross");
    menu.style.left = "0rem";
  } else {
    icon.classList.replace("lnr-cross", "lnr-menu");
    menu.style.left = "-16rem";
  }
});
