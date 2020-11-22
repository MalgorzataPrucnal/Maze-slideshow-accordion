let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slide2 = document.querySelector(".second-slide");
let slide3 = document.querySelector(".third-slide");
let slide1 = document.querySelector(".first-slide");
// let slideNr = "slide"+"counter";

 


next.addEventListener("click", () => {slide2.style.display = "block"; slide1.style.display = "none"});

