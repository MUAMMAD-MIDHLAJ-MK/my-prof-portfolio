window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

document.addEventListener("click", function(e){

    const menu = document.getElementById("navMenu");
    const btn = document.querySelector(".menu-btn");

    if(
        menu.classList.contains("show") &&
        !menu.contains(e.target) &&
        !btn.contains(e.target)
    ){
        menu.classList.remove("show");
    }

});

document.addEventListener("mouseup", function(e){

    const menu = document.getElementById("navMenu");

    if(
        menu.classList.contains("show") &&
        !menu.contains(e.target) &&
        !e.target.closest(".menu-btn")
    ){
        menu.classList.remove("show");
    }

});
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.add("clicked");

    setTimeout(() => {
        menuBtn.classList.remove("clicked");
    }, 300);
});