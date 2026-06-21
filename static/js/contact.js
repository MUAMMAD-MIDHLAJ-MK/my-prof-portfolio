const cards = document.querySelectorAll('.contact-card');

cards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";

    setTimeout(()=>{
        card.style.opacity="1";
        card.style.transform="translateY(0)";
        card.style.transition="0.8s";
    },index*250);

});