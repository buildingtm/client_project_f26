// how to from codex world linked on assignment//
document.getElementById("year").innerHTML = new Date().getFullYear();

const menuList = document.querySelector("#menu"); 
const menuButton = document.querySelector("nav button");

menuButton.addEventListener("click", function () {
  const isOpen = menuList.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});