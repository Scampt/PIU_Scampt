const navToggle = document.querySelector(".barras")
const navMenu = document.querySelector(".nav-menu")

const navClose = document.querySelector(".cerrar");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu-visible");

    if (navMenu.classList.contains("nav-menu-visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
})

navClose.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav-menu-visible");
    

    if (navMenu.classList.contains("nav-menu-visible")) {
        navClose.setAttribute("aria-label", "Cerrar menú");
    } else {
        navClose.setAttribute("aria-label", "Abrir menú");
    }
})