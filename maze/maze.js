let score = document.querySelector(".score");
let points = 0;

var board = [
    "11111111111111111",
    "78000010210301051",
    "11111001010101001",
    "10001101040101011",
    "10105000010104001",
    "10111151010101011",
    "10012001000101101",
    "11011111011101051",
    "110000013105011116",
    "1001210111010000097",
    "10111103010101111",
    "10104001110000141",
    "10101111012015101",
    "10105001310111101",
    "15001101012004001",
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
        if (cell === "4") {
          td.classList.add("extra-two");
        }
        if (cell === "5") {
          td.classList.add("extra-three");
        }
        if (cell === "6") {
          td.classList.add("target");
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
    if (board[pos.y][pos.x] === "7" || board[pos.y][pos.x] === "1") {
      return;
    };

    if (board[pos.y][pos.x] === "2") {
      score.innerText = `${points + 10}`;
      points = points + 10;
      let line = board[pos.y];
      let newLine = line.replace(2, 0);
      board.splice(pos.y, 1, newLine);
    }


    if (board[pos.y][pos.x] === "3") {
      score.innerText = `${points + 20}`;
      points = points + 20;
      let line = board[pos.y];
      let newLine = line.replace(3, 0);
      board.splice(pos.y, 1, newLine);
    }

    if (board[pos.y][pos.x] === "4") {
      score.innerText = `${points + 30}`;
      points = points + 30;
      let line = board[pos.y];
      let newLine = line.replace(4, 0);
      board.splice(pos.y, 1, newLine);
    }

    if (board[pos.y][pos.x] === "5") {
      score.innerText = `${points + 50}`;
      points = points + 50;
      let line = board[pos.y];
      let newLine = line.replace(5, 0);
      board.splice(pos.y, 1, newLine);
    }

    if (board[pos.y][pos.x] === "9"){
      console.log("winner");
      gameOver();
      document.querySelector("h1").innerText = `Great! Your score: ${points}`
    }

    if (board[pos.y][pos.x] === "6") {
      score.innerText = `${points + 50}`;
     
      return
    }

    if (board[pos.y][pos.x] === "8") {
      const placeForTime = document.querySelector(".place-for-time")
      let counter = 20;
      let startCounting = setInterval(() => {
        if (counter < 0) { return };
        counter--;
        placeForTime.innerHTML = `00:${(counter).toString().padStart(2, "0")}`;

        console.log(counter);
        if (counter === -1) {
          gameOver();
          placeForTime.innerHTML = `00:00`
        }
      }, 1000);


      if (counter === 0) {
        clearInterval(startCounting);
        EventTarget.removeEventListener()
      };

    }
    player.x = pos.x;
    player.y = pos.y;
  });

 //GAME OVER 
let tryAgain = document.querySelector(".try-again");
tryAgain.addEventListener("click", () => {
  location.reload();
  // modal.classList.add('modal-hidden');
  // counter = 20;
  // player.x = 0;
  // player.y = 1;
  

})


let modal = document.querySelector('#modal');
function gameOver() {
  modal.classList.remove('modal-hidden');
}

