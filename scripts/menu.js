const intiMenu = (function () {
  const hamburgerButton = document.getElementById("hamburger-button");
  const menuItems = document.querySelector(".menu-content");

  hamburgerButton.addEventListener("click", () => {
    $(menuItems).toggle();
  });
})();
