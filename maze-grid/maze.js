const board = [
  "00001000",
  "01001000",
  "01101000",
  "00001000",
  "00001000",
  "02001000",
  "00001000",
  "00001000",
];

if (board[0][4] === "1") {
  console.log("Wall");
}

const player = {
  x: 3,
  y: 4,
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
  player.x = pos.x;
  player.y = pos.y;
  
});
