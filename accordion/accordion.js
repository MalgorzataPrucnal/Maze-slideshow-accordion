// let headBtns = Array.from(document.querySelectorAll(".head"));
let accordionArea = document.querySelector("main");
let infos = Array.from(document.querySelectorAll(".information"))

accordionArea.addEventListener("click", event => {
    infos.map((elem) => {
        if (elem.classList.contains("show") && elem!==event.target.nextElementSibling) {
        elem.classList.remove("show")}
    });
    event.target.nextElementSibling.classList.toggle("show"); 
;})