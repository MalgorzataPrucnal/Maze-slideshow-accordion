let displayer = document.querySelector(".display");
let calculatorArea = document.querySelector(".wrapper");

console.log(displayer.innerText)
let number1;
let number2;
let operator;
let result;

// function calculation(number1,number2,operator){
//     return result = number1parseInt(operator)number2; 
// }

// calculation(1,2);
// console.log(result);


console.log(2+3+4);

calculatorArea.addEventListener("click", event =>
{
// if (event.target.classList.contains("num")){
displayer.innerText = parseInt(displayer.innerText+event.target.innerText);
})

// else if(event.target.classList.contains("calc")){
//     return displayer.innerText;


//     let number1 = displayer.innerText;
//     displayer.innerText = parseInt(displayer.innerText) + event.target.innerText;
//     let operator = event.target.innerText;
// }

// else if(number1&&operator){


// let result = 