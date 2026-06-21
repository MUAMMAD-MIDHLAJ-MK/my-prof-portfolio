document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card,index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 300);

    });

});