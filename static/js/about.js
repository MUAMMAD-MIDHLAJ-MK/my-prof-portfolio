document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".mini-card");

    cards.forEach((card,index) => {

        setTimeout(() => {
            card.classList.add("show");
        }, index * 200);

    });

});