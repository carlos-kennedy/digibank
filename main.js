window.addEventListener("scroll", sectionOnScroll);

function sectionOnScroll() {
  activeSections(home);
  activeSections(creditCards);
  activeSections(services);
  activeSections(customerService);
}

function activeSections(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionPassedOrNotTargetLine = targetLine >= sectionTop;
  const sectionEndAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine;

  const sectionBoundaries =
    sectionPassedOrNotTargetLine && !sectionEndPassedTargetLine;

  const sectionIdInDocument = section.getAttribute("id");

  const menuElement = document.querySelector(
    `.menu a[href*=${sectionIdInDocument}]`
  );

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}
