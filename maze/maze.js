let score = document.querySelector(".score");


const board = [
    "00010010001",
    "11001010101",
    "01101000101",
    "00000010101",
    "11101010101",
    "02001000101",
    "01111011101",
    "00001010001",
    "12101110100",
    "01100010101",
    "00001010001",
  ];
  
  if (board[0][4] === "1") {
    console.log("Wall");
  }
  
  const player = {
    x: 0,
    y: 0,
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
        if (player.x === x && player.y === y) {
          td.classList.add("player");
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

score.innerText = "100";
        console.log("100");
      }
    if(pos.x === 2 && pos.y === 1){
        console.log("ok");
    }
    player.x = pos.x;
    player.y = pos.y;
    // console.log("x"+pos.x);
    // console.log("y"+pos.y);
  });
  