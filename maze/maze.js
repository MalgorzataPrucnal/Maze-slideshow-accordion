let score = document.querySelector(".score");
let points = 0;

var board = [
    "11111111111111111",
    "00000010010001000",
    "11111001010101111",
    "10001101000101010",
    "10100000010100010",
    "10111101010101011",
    "10012001000101110",
    "11011111011101000",
    "11000001010001111",
    "10012101110100000",
    "10111103010101111",
    "10100001110000101",
    "10101111012010101",
    "10100001010111101",
    "10001101012000001",
    "11111111111111111"
  ];
  
  
  const player = {
    x: 0,
    y: 1,
  };
  
  const step = 1;
  
  const maze = document.getElementById("maze");
  
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  table.append(tbody);
  
  maze.append(table);
  
  const update = () => {
    tbody.innerHTML = "";
    board.forEach((line, y) => {
      const row = document.createElement("tr");
  
      line.split("").forEach((cell, x) => {
        const td = document.createElement("td");
  
        if (cell === "1") {
          td.classList.add("wall");
        }
        if (cell === "2") {
          td.classList.add("prize");
        }
        if (cell === "3") {
          td.classList.add("extra");
        }
        if (player.x === x && player.y === y) {
          td.id = "player";
        }

        row.append(td);
      });
  
      tbody.append(row);
    });
  };
  
  setInterval(() => update(), 16);
  
  window.addEventListener("keydown", (event) => {
    const pos = { ...player }
    if (event.key === "ArrowLeft") {
      pos.x -= step;
    } else if (event.key === "ArrowRight") {
      pos.x += step;
    } else if (event.key === "ArrowUp") {
      pos.y -= step;
    } else if (event.key === "ArrowDown") {
      pos.y += step;
    }
    if (board[pos.y][pos.x] === "1") {
      return;
    }

    if (board[pos.y][pos.x] === "2") {
      score.innerText = `${points + 10}`;
      points = points + 10;
      let line = board[pos.y];
      let newLine = line.replace(2, 0);
      board.splice(pos.y, 1, newLine);
    }

    player.x = pos.x;
    player.y = pos.y;

  });
  

  //STOPPER
 const placeForTime = document.querySelector(".place-for-time")

  let counter = 20;



  document.querySelector("button").addEventListener("click", () => {
    let counting = setInterval(() => {
      if(counter < 0) {return};
      counter--;
      placeForTime.innerHTML = `00 : ${(counter).toString().padStart(2, "0")}`;
      
      console.log(counter);
      if (counter === -1){alert("GAME OVER!!");
      placeForTime.innerHTML = `00 : 00`}
    }, 1000);
    
        });

    if (counter === 0){clearInterval(counting); };