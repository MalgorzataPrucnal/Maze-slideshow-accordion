let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = document.querySelectorAll(".slide");
// let hides = Array.from(document.querySelectorAll(".hide"));
// let lastPic = document.querySelector("#last-picture");
let slideShow = document.querySelector(".slideshow-container")

let max = slides.length;

console.log(slides.length);

let counter = 0;
const size = slides[0].clientWidth;


slideShow.style.transform = "translateX(" + (-size * counter) + "px)";

next.addEventListener("click", () => {
    if(counter > max) return;
    slideShow.style.transition = "transform 0.4s ease-in-out";
    counter ++;
    slideShow.style.transform = "translateX(" + (-size * counter) + "px)";
    console.log(counter);
    
})

prev.addEventListener("click", () => {
    // if(counter < 0) return;
    if(counter < -1) return;
    slideShow.style.transition = "transform 0.4s ease-in-out";
    counter = counter-1;
    slideShow.style.transform = "translateX(" + (-size * counter) + "px)";
    console.log(counter);
    
})

slideShow.addEventListener("transitionend", ()=>
{if (counter === max){
    slideShow.style.transition = "none";
    console.log("none");
    counter = 0;
    slideShow.style.transform = "translateX(" + (-size * counter) + "px)";
}

if (counter < 0){
    slideShow.style.transition = "none";
    console.log("none");
    counter = max-1;
    slideShow.style.transform = "translateX(" + (-size * counter) + "px)";
}
});

