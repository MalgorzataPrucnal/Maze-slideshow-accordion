let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = Array.from(document.querySelectorAll(".slide"));
let hides = Array.from(document.querySelectorAll(".hide"));

let max = slides.length;

console.log(slides);
console.log(hides);
let counter = 0;



next.addEventListener("click", function forward() {
    if (counter < max - 1) {
        slides[counter + 1].style.display = "block";
        slides[counter].style.display = "none"
        counter = counter + 1;
    }
    else if (counter === max-1) {
        counter = 0;
        slides[0].style.display = "block";
        slides[max - 1].style.display = "none";
    }
});


prev.addEventListener("click", function backward() {
    if (counter > 0) {

        slides[counter - 1].style.display = "block";
        slides[counter].style.display = "none";
        counter = counter - 1;
        console.log(counter);
    }
    else if (counter === 0) {
        console.log(counter);
        counter = max - 1;
        slides[max - 1].style.display = "block";
        slides[0].style.display = "none";
    }
});

