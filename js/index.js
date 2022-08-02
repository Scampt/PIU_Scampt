const navToggle = document.querySelector(".barras")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu-visible");

    if (navMenu.classList.contains("nav-menu-visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
})

navMenu.addEventListener("mouseleave", ()=>{
    navMenu.classList.toggle("nav-menu-visible");
})

// ANIMACIÓN TYPE WRITE (cambio de ES a EN)
// BIENVENIDA
let titulo = new Typed(".title-write", {
    strings: ["Bienvenidos a PIU Scampt", "Welcome to PIU Scampt"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// DESCRIPCIÓN DE PIU SCAMPT
let descripcion = new Typed(".info-songs-write", {
    strings: ["Aqui podras encontrar una descripción del contenido de los canales de las canciones para jugar en la Pump It Up", "Here you can find a description of the content of the channels of the songs to play in Pump It Up"],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
});

// TITULO DE STEPPRIME
let stepprime  = new Typed(".stepprime-title-write", {
    strings: ["Canciones de la página de StepPrime", "StepPrime Page Songs"],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
});

// TITULO DE STEPMAKERS
let stepmakers = new Typed(".stepmakers-title-write", {
    strings: ["Canciones de algunos StepMakers", "Songs of some StepMakers"],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
});

// BUSQUEDA DE SPTEPMAKERS POR LETRA INICIAL
let stepmakersletter = new Typed(".AtoZ-write", {
    strings: ["Aqui puedes buscar los stepmakers por su letra inicial", "Here you can search for the stepmakers by their initial letter"],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
});


