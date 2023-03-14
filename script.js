const botonNav = document.getElementById("boton-nav")
const nav = document.getElementById("navegador")

botonNav.addEventListener("click",()=>{
    nav.classList.toggle("nav__conteiner-abrir")
})

botonNav.addEventListener("click",()=>{
    botonNav.classList.toggle("nav__animacion")
})

