let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = document.querySelectorAll(".slide");
let slideShow = document.querySelector(".slideshow-container")
let max = slides.length;
let counter = 1;
const size = slides[0].clientWidth;
// let last = slides[max+1];
// let first = slides[0];

slideShow.style.transform = "translateX(" + (-100 * counter) + "%)";
    next.addEventListener("click", () => {
        // if(counter >= max-1) {console.log("koniec")};
    slideShow.style.transition = "transform 0.4s ease-in-out";
    counter ++;
    slideShow.style.transform = "translateX(" + (-100 * counter) + "%)";
    console.log(counter);
})

    prev.addEventListener("click", () => {
    // if(counter <= 0) return;
    slideShow.style.transition = "transform 0.4s ease-in-out";
    counter = counter-1;
    slideShow.style.transform = "translateX(" + (-100 * counter) + "%)";
    console.log(counter);
 })

    slideShow.addEventListener("transitionend", ()=>

    {if (slides[counter].id === "first-picture"){
    slideShow.style.transition = "none";
    console.log("none");
    // counter = slides.length-2;
    slideShow.style.transform = "translateX(" + (-100 * counter) + "%)";
}
    
    if (slides[counter].id === "last-picture"){
    slideShow.style.transition = "none";
    counter = (slides.length)-counter;
    slideShow.style.transform = "translateX(" + (-100 * counter) + "%)";
}
});