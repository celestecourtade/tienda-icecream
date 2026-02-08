const toggleBtn = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("navbar__menu--open");
});
