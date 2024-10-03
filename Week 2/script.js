const hamburgerMenu = document.querySelector("#hamburger-menu");
const userMenu = document.querySelector("#user-menu");

hamburgerMenu.addEventListener("click", () =>{
    userMenu.classList.toggle("active")
})