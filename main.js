import "./sass/style.css";
window.addEventListener("scroll", onScroll);

const btnMenu = document.querySelector("button");
const navList = document.querySelector("ul.nav-list");

function btnNavMenu() {
  btnMenu.classList.toggle("is-active");
  if ((btnMenu.classList.add = "is-active")) {
    navList.classList.toggle("open");
  }
}

btnMenu.addEventListener("click", btnNavMenu);
btnMenu.addEventListener("click", () => {
  if (navList.classList == "nav-list open") {
    navList.setAttribute("aria-expanded", "true");
    navList.setAttribute("aria-label", "true");
  } else {
    navList.setAttribute("aria-expanded", "false");
    navList.setAttribute("aria-label", "false");
  }
});

document.querySelector("ul.nav-list").addEventListener("click", () => {
  navList.classList.remove("open");
  btnMenu.classList.remove("is-active");
});

function onScroll() {
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(attendance);
}

function activateMenuAtCurrentSection(section) {
  const targetline = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetline = targetline >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetline = sectionEndsAt <= targetline;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");

  const menuElement = document.querySelector(
    `ul.nav-list a[href*=${sectionId}]`
  );

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}
