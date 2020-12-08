const pawn = document.querySelector(".pawn");
const step = 10;
positionX = 0;
positionY= 0;

window.addEventListener("keydown", (event)=>
{
    if (event.key === "ArrowLeft"){
        pawn.style.transform = `translateX(${positionX-step}px)`;
        positionX = positionX - step;
     
    }

    else if (event.key === "ArrowRight"){
        pawn.style.transform = `translateX(${positionX+step}px)`;
        console.log("left");
        positionX = positionX + step;
    }

    else if (event.key === "ArrowUp"){
        pawn.style.transform = `translateY(${positionY-step}px)`;
        positionY = positionY - step;
    }

    else if (event.key === "ArrowDown"){
        // pawn.style.top = `${positionY+step}px)`;
        pawn.style.transform = `translateY(${positionY+step}px)`;
        positionY = positionY + step;
         }
        })

        // const {style} = pawn;
//  switch(event.key){

//     case "ArrowLeft": 
//     style.left = `${parseInt(style.left)-step}px`;
//     console.log(style.left);
//     break;

//     case "ArrowLeft": 
//     style.left = `${parseInt(style.left)+step}px`;
//     console.log(style.left);
//     break;

//         case "ArrowUp": 
//         style.top = `${parseInt(style.top)-step}px`;
//         break;

//         case "ArrowDown": 
//         style.top = `${parseInt(style.top)+step}px`;
//         break;
//  }}
// )