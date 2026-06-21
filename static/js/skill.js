const cards = document.querySelectorAll(".skill-card");

function showCards() {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            card.classList.add("show");

            const bar = card.querySelector(".progress-bar");

            if (bar) {
                bar.style.width = bar.dataset.width;
            }
        }

    });

}

window.addEventListener("scroll", showCards);
window.addEventListener("load", showCards);