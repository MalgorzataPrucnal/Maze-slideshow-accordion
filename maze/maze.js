const pawn = document.querySelector(".pawn");
const step = 10;


window.addEventListener("keydown", (event)=>
{
    const {style} = pawn;
 switch(event.key){

    case "ArrowLeft": 
    style.left = `${parseInt(style.left)-step}px`;
    console.log(style.left);
    break;

    case "ArrowLeft": 
    style.left = `${parseInt(style.left)+step}px`;
    console.log(style.left);
    break;

        case "ArrowUp": 
        style.top = `${parseInt(style.top)-step}px`;
        break;

        case "ArrowDown": 
        style.top = `${parseInt(style.top)+step}px`;
        break;
 }}
)
    // if (event.key === "ArrowLeft"){
    //     pawn.style.transform = `translateX(${positionX-step}px)`;
    //     positionX = positionX - step;
     
    // }

    // else if (event.key === "ArrowRight"){
    //     pawn.style.transform = `translateX(${positionX+step}px)`;
        
    //     positionX = positionX + step;
     
    // }

    // else if (event.key === "ArrowUp"){
    //     positionX = positionX;
    //     pawn.style.transform = `translateY(${positionY-step}px)`;
    //     positionY = positionY - step;
      
    // }

    // else if (event.key === "ArrowDown"){
    //     // pawn.style.top = `${positionY+step}px)`;
    //     pawn.style.transform = `translateY(${positionY+step}px)`;
    //     positionY = positionY + step;
    //      }