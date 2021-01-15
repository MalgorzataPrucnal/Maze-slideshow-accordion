firebase.initializeApp(firebaseConfig);

let score = document.querySelector(".score");
let points = 0;

var one = [
    "11111111111111111",
    "08000012010001401",
    "11111001010151001",
    "10201101003101011",
    "10105040010104001",
    "10111101010101211",
    "10210301000101101",
    "11011111011101041",
    "110001013005011116",
    "1001510111010300097",
    "10111100410101111",
    "10102001110000151",
    "13101111210010101",
    "10102001310111151",
    "10001151014000001",
    "11111111111111111"
  ];

  var two = [
    "11111111111111111",
    "08000015010101001",
    "11111001010101501",
    "10301101040101011",
    "10102000010103051",
    "10111101010101211",
    "13010041000151101",
    "11011111211101001",
    "113004010120011116",
    "1001510111010000097",
    "10111100410101111",
    "10102001113000151",
    "10101111010014101",
    "10104001200111101",
    "15001130010002001",
    "11111111111111111"
  ];

var three = [
    "11111111111111111",
    "08000010210301021",
    "11111001010101001",
    "10001101040151011",
    "10105000010104001",
    "10111121013101011",
    "10012001000101101",
    "11011111011101051",
    "110400013105011116",
    "1001210111010000097",
    "10111103010101111",
    "10104001110000141",
    "10101111012015131",
    "10105001310111101",
    "15001101012004001",
    "11111111111111111"
  ];

  var four = [
    "11111111111111111",
    "08000010210301051",
    "11011001010101001",
    "10001101040101311",
    "10105100010124001",
    "10111141010101011",
    "10012001000101101",
    "11011111011101051",
    "110001013105011116",
    "1001210111010000097",
    "10111103000121111",
    "10104001110000141",
    "10101111012015101",
    "10105301010111101",
    "13001100512004001",
    "11111111111111111"
  ];

  var five = [
    "11111111111111111",
    "08001010210301001",
    "11011051010101001",
    "10301101040101211",
    "10102001010104001",
    "10111101010101011",
    "10210301005101101",
    "11010111011101051",
    "110001413105011116",
    "1001510101010000097",
    "10111100010101111",
    "10104031010000041",
    "10101111012015101",
    "10100051011111101",
    "12001101302004001",
    "11111111111111111"
  ];

  var six = [
    "11111111111111111",
    "08001410210101051",
    "11011051010100001",
    "13001101040111011",
    "10105101010200031",
    "10111100010101011",
    "13010041005101101",
    "11010111011101201",
    "110001410100011116",
    "1001510121310000097",
    "10111100010101111",
    "10100001010002041",
    "15131111012010101",
    "11100051011111101",
    "12001101300004001",
    "11111111111111111"
  ];

let random = [one, two, three, four, five, six];

var board = random[Math.floor((Math.random() * 6))];

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
    if (event.key === "ArrowLeft" && player.x > 0) {
      pos.x -= step;
    } else if (event.key === "ArrowRight") {
      pos.x += step;
    } else if (event.key === "ArrowUp") {
      pos.y -= step;
    } else if (event.key === "ArrowDown") {
      pos.y += step;
    }
    if (board[pos.y][pos.x] === "7" || board[pos.y][pos.x] === "1" ) {
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
      document.querySelector("h1").innerText = `Great! Your score: ${points}`;
      document.querySelector(".form-inline").classList.remove("hidden");
    }

    if (board[pos.y][pos.x] === "6") {
      score.innerText = `${points + 50}`;
     
      return
    }
   

    if (board[pos.y][pos.x] === "8") {

      let line = board[pos.y];
      let newLine = line.replace(8, 0);
      board.splice(pos.y, 1, newLine);
      
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
})

let modal = document.querySelector('#modal');
function gameOver() {
  modal.classList.remove('modal-hidden');
}

//SAVE IN LOCAL STORAGE
const saveBtn = document.querySelector(".saveBtn");

// [
//   {name: nazwaWyniku, times: [wynik,wynik]},
//   {name: nazwaWyniku, times: [wynik,wynik]}
//   ]


saveBtn.addEventListener("click", (e) => {
  let pointsToSave = points;
  e.preventDefault();
  document.forms[0].classList.add("hidden");

  let keyName = document.forms[0].name.value;

  window.localStorage.setItem(keyName, points);

//SAVE IN FIREBASE
firebase.firestore().collection("maze").add({
  nameSaved: keyName,
  pointsSaved: points
  // timesSaved: JSON.stringify(newArr[indexTobeChanged])
  });
});

//SHOW SAVED RESULTS
let showResults = document.querySelector(".showResults");
let placeForResults = document.querySelector(".placeForResults");

showResults.addEventListener("click", () => {

  firebase.firestore().collection("maze").orderBy("pointsSaved", "desc").limit(10).get().then((maze) => {

          placeForResults.innerHTML = '';
          const list = document.createElement('ol');
          let html = '';

          maze.forEach((person) => {
const resultForPerson = person.data();
html += `<li>${resultForPerson.nameSaved}: ${resultForPerson.pointsSaved}</li>`
});
        
  
          // for (var i = 0; i < localStorage.length; i++) {
          //   let results = localStorage.key(i) + ": " + localStorage.getItem(localStorage.key(i));
          //   html += `<li>${results}</li>`;
          // }
  
          list.innerHTML = html;
          placeForResults.appendChild(list);
        });
      });
  
  