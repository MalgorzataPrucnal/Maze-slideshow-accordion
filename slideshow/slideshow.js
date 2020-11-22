let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = Array.from(document.querySelectorAll(".slide"));
// let slide2 = document.querySelector(".second-slide");
// let slide3 = document.querySelector(".third-slide");
// let slide1 = document.querySelector(".first-slide");
// let slideNr = "slide"+"counter";
console.log(slides);
 
let counter = 0;

next.addEventListener("click", () => {slides[counter + 1].style.display = "block"; slides[counter].style.display = "none"; counter = counter + 1});

prev.addEventListener("click", () => {slides[counter - 1].style.display = "block"; slides[counter].style.display = "none"; counter = counter - 1});