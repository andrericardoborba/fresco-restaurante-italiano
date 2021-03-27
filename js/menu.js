let show = true;

const menuMobile = document.querySelector(".menu-mobile")
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    menuMobile.classList.toggle("on", show)
    show = !show
})