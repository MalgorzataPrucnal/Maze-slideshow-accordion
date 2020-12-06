let pawn = document.querySelector(".pawn");
let step = 5;

// window.addEventListener("load", ()=>
// {
//     pawn.style.position = absolute;
//     pawn.style.left = "50px";
//     pawn.style.top = "50px";

// })

window.addEventListener("keyup", (event)=>
{
    switch(event.key){
        case "ArrowLeft": 
        pawn.style.transform = `translateX(${-step}px)`;
        // pawn.style.left = parseInt(pawn.style.left) - step +"px";
        console.log(pawn.style.left);
        console.log(event.key);
        break;

        case "ArrowRight": 
        pawn.style.left = "120px";
        break;

        case "ArrowUp": 
        pawn.style.top = parseInt(pawn.style.top) - step +"px";
        console.log(event.key);
        break;

        case "ArrowDown": 
        pawn.style.top = parseInt(pawn.style.top) + step +"px";
        break;
    }

})