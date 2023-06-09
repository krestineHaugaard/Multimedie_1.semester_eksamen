
const burgerMenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".navmenu");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".navlink").addEventListener("click", remove)

function remove(){
    burgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
}