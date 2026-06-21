// Typing Animation

const words = [
    "Python Developer",
    "Django Developer",
    "Web Developer",
    
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    let currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){
            isDeleting = true;
            setTimeout(typeEffect,1500);
            return;
        }

    }else{

        typing.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){
            isDeleting = false;
            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect,isDeleting ? 60 : 120);
}

typeEffect();


// Scroll Reveal Animation

const revealElements =
document.querySelectorAll(
".logo_btn,.stat-box,.project-card,.about-short"
);

window.addEventListener("scroll",()=>{

    revealElements.forEach((element)=>{

        const top =
        element.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            element.classList.add("show");
        }

    });

});



document.addEventListener("DOMContentLoaded", () => {

    const revealElements =
    document.querySelectorAll(
    ".logo_btn,.stat-box,.about-short"
    );

    revealElements.forEach((element)=>{
        element.classList.add("show");
    });

});