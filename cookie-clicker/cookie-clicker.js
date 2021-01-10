let cookie = document.querySelector("#cookie");
let cookieCounter = 0;
let cookieCounterNode = document.querySelector(".cookie-counter");
const game = {
  price: {
    cursor: 10,
  },
};
function updateCookieCounter() {
  let cookieCounterNode = document.querySelector(".cookie-counter");
  cookieCounterNode.textContent = cookieCounter;
}
function createCursorBuildingList() {
  const div = document.createElement("div");
  div.classList.add("buildings__list", "buildings__list--cursors");
  document.querySelector(".buildings").appendChild(div)
}
function render() {
  if (cookieCounter >= 10) {
    const storeList = document.querySelector(".store__list");
    const cursorBuilding = storeList.children[0];
    cursorBuilding.classList.remove('unavailable')
    const icon = cursorBuilding.children[0]
    icon.classList.replace(
      "store__icon--cursor-unavailable",
      "store__icon--cursor"
    );
      console.log(firstStoreListItem);
  }
};


    
    
    console.log(cursorBuilding);
    const price = cursorBuilding.children[2];
    price.textContent = game.price.cursor;
    cursorBuilding.addEventListener('click', () => {
      setInterval(() => {
        cookieCounter++
        updateCookieCounter();
        console.log('hi')
      }, 1000)
      createCursorBuildingList()
      cookieCounter = cookieCounter - game.price.cursor
    })
  }
}

/*
  Do cursorBuilding dodać eventListener,
  który na click odpali setInterval,
  który co 1 sekundę zwiększa counter ciasteczek :cookie:
*/
cookie.addEventListener("click", () => {
    cookieCounter++;
    cookieCounterNode.textContent = cookieCounter;
    render();
  });

