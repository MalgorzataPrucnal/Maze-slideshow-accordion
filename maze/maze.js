let pawn = document.querySelector(".pawn");
let step = 10;
let positionX = 10;
let positionY = 10;

window.addEventListener("keyup", (event)=>
{

    if (event.key === "ArrowLeft"){
        pawn.style.transform = `translateX(${positionX-step}px)`;
        positionX = positionX - step;
     
    }

    else if (event.key === "ArrowRight"){
        pawn.style.transform = `translateX(${positionX+step}px)`;
        positionX = positionX + step;
     
    }

    else if (event.key === "ArrowUp"){
        positionX = positionX;
        pawn.style.transform = `translateY(${positionY-step}px)`;
        positionY = positionY - step;
      
    }

    else if (event.key === "ArrowDown"){
        // pawn.style.top = `${positionY+step}px)`;
        pawn.style.transform = `translateY(${positionY+step}px)`;
        positionY = positionY + step;
         }


    // switch(event.key){

    
    //     case "ArrowLeft": 
    //     pawn.style.transform = `translateY(0)`;
    //     pawn.style.transform = `translateX(${positionX-step}px)`;
    //     positionX = positionX - step;
        
    //     break;

    //     case "ArrowRight": 
    //     pawn.style.transform = `translateX(${positionX+step}px)`;
    //     positionX = positionX + step;
    //     console.log(event.key);
    //     break;

    //     case "ArrowUp": 
    //     positionX = positionX;
    //     pawn.style.transform = `translateY(${positionY-step}px)`;
    //     positionY = positionY - step;
    //     console.log(positionX);
    //     break;

    //     case "ArrowDown": 
        
    //     pawn.style.transform = `translateY(${positionY+step}px)`;
    //     positionY = positionY + step;
    //     break;
    
    //     default: console.log("press the key")
    // }

})