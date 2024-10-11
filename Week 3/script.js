const hamburgerMenu = document.querySelector("#hamburger-menu");
const stickyNav = document.querySelector("#sticky-nav");

hamburgerMenu.addEventListener("click", () =>{
    stickyNav.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})