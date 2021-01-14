let displayer = document.querySelector(".display");
let calculatorArea = document.querySelector(".wrapper");

console.log(displayer.innerText)
let number1;
let number2;
let operator;
let result;
let counter = 0;
var formula;
// function calculation(number1,number2,operator){
//     return result = number1parseInt(operator)number2; 
// }

// calculation(1,2);
// console.log(result);


console.log(2+3+4);

calculatorArea.addEventListener("click", event =>
{
if (event.target.classList.contains("num") && counter === 0){
    number1 = parseInt(displayer.innerText+event.target.innerText);
displayer.innerText = number1;
console.log(displayer.innerText);
}
else if (event.target.classList.contains("calc")){
    operator = (displayer.innerText+event.target.innerText);
displayer.innerText = operator;

// if(operator.classList.contains("add")){
//     let sum;
//     return sum
// }
// if (operator.classList.contains("add")) {
//     let addition = true;
// }

// if (operator.classList.contains("division")) {
//     let division = true;
// }

counter = 1;
}



else if (event.target.classList.contains("num") && counter === 1){
    number2 = parseInt(event.target.innerText);
    console.log(number2);

    formula = displayer.innerText+number2;

displayer.innerText = formula;

// eval(formula);
}

else if (event.target.classList.contains("C")){
    displayer.innerText = "";
    }

else if (event.target.classList.contains("inProgress")){
displayer.innerText = "💣 🌪 🧨 ⛏ 🔥";
counter = 5;
}

else if (event.target.classList.contains("num") || event.target.classList.contains("result") && counter === 5){
    displayer.innerText = "";
    counter = 0;
    }

else if (event.target.classList.contains("result")){
    result = eval(formula);
    displayer.innerText = result;
    }

}
)




// else if(event.target.classList.contains("calc")){
//     return displayer.innerText;


//     let number1 = displayer.innerText;
//     displayer.innerText = parseInt(displayer.innerText) + event.target.innerText;
//     let operator = event.target.innerText;
// }

// else if(number1&&operator){


// let result =