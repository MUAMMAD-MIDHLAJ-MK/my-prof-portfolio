document.addEventListener("DOMContentLoaded", () => {

    // Sounds
    const hoverSound = new Audio("/static/sounds/hover.mp3");
    const menuSound = new Audio("/static/sounds/click3dot.mp3");
    const socialSound = new Audio("/static/sounds/social.mp3");
    const clickSound = new Audio("/static/sounds/click.mp3");
    const PhoneSound = new Audio("/static/sounds/phone.mp3");
    const SendSound = new Audio("/static/sounds/thank.mp3");
    const ProfSound = new Audio("/static/sounds/prof.mp3");
    const AboutSound = new Audio("/static/sounds/click2.mp3");


    // ===== Skills Hover =====
    document.querySelectorAll(".skills-container, .skills-grid").forEach(item => {

    // Desktop
    item.addEventListener("mouseover", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    // Mobile
    item.addEventListener("touchstart", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

});

    // ===== Menu Button =====
    const menuBtn = document.querySelector(".menu-btn");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            menuSound.currentTime = 0;
            menuSound.play();
        });
    }
    //====about===

    
document.querySelectorAll(".cv-btn, .btn-primary, .btn-secondary, .mini-card").forEach(card => {
        card.addEventListener("click", () => {
               AboutSound.currentTime = 0;
               AboutSound.play();
        });
    });
//=== Contact Card =====
    document.querySelectorAll(".contact-card").forEach(card => {
        card.addEventListener("click", () => {
               PhoneSound.currentTime = 0;
            PhoneSound.play();
        });
    });


  // ===== Send Button =====
    const sendBtn = document.querySelector('button[type="submit"]');

    if (sendBtn) {
        sendBtn.addEventListener("click", () => {
            SendSound.currentTime = 0;
            SendSound.play();
        });
    }

    //==== prof===
   
     const profileBtn = document.querySelector(".profile-card");

    if (profileBtn) {
        profileBtn.addEventListener("click", () => {
            ProfSound.currentTime = 0;
            ProfSound.play();
        });
    }
    // ===== Social Icons =====
    document.querySelectorAll(".logo2_btn a").forEach(icon => {
        icon.addEventListener("click", () => {
            socialSound.currentTime = 0;
            socialSound.play();
        });
    });

    // ===== All normal links/buttons =====
    document.querySelectorAll(".btn, .nav-links a").forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const url = this.href;

            clickSound.currentTime = 0;
            clickSound.play();

            setTimeout(() => {
                window.location.href = url;
            }, 200);

        });

    });

});



const profSound = new Audio("/static/sounds/prof.mp3");

const profileLink = document.querySelector(".profile-pic");

if (profileLink) {
    profileLink.addEventListener("click", function (e) {

        e.preventDefault();

        const url = this.parentElement.href;

        profSound.currentTime = 0;
        profSound.play();

        setTimeout(() => {
            window.location.href = url;
        }, 200);

    });
}





