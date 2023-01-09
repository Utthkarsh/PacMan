document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  let score = 0;
  //grid layout
  const width = 28;
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 2, 2, 2, 2, 2, 2, 2,
    2, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 2, 2, 2, 2,
    2, 2, 2, 2, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 2,
    2, 2, 2, 2, 2, 2, 2, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  //object layout
  const squres = [];
  /*
    0 - pac dot
    1 - wall
    2 - ghost lair
    3 - power pellet
    4 - empty
    */
  //make grid
  function board() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squres.push(square);
      if (layout[i] === 0) {
        squres[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squres[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squres[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squres[i].classList.add("power-pellet");
      } else if (layout[i] === 4) {
        squres[i].classList.add("empty");
      }
    }
  }
  board();

  //starting position of pac-man
  let pacIndex = 490;
  squres[pacIndex].classList.add("pac-man");

  function movePac(e) {
    squres[pacIndex].classList.remove("pac-man");
    switch (e.key) {
      case "ArrowLeft":
        if (
          pacIndex % width !== 0 &&
          !squres[pacIndex - 1].classList.contains("wall") &&
          !squres[pacIndex - 1].classList.contains("ghost-lair")
        ) {
          pacIndex -= 1;
          //check if pacman is at left exit
          if (pacIndex - 1 === 363) {
            pacIndex = 391;
          }
          break;
        }
      case "ArrowUp":
        if (
          pacIndex - width >= 0 &&
          !squres[pacIndex - width].classList.contains("wall") &&
          !squres[pacIndex - width].classList.contains("ghost-lair")
        ) {
          pacIndex -= width;
          break;
        }
      case "ArrowRight":
        if (
          pacIndex % width < width - 1 &&
          !squres[pacIndex + 1].classList.contains("wall") &&
          !squres[pacIndex + 1].classList.contains("ghost-lair")
        ) {
          pacIndex += 1;
          //check if pacman is at right exit
          if (pacIndex + 1 === 392) {
            pacIndex = 364;
          }
          break;
        }
      case "ArrowDown":
        if (
          pacIndex + width <= width * width &&
          !squres[pacIndex + width].classList.contains("wall") &&
          !squres[pacIndex + width].classList.contains("ghost-lair")
        ) {
          pacIndex += width;
          break;
        }
    }
    squres[pacIndex].classList.add("pac-man");
    pacdotEat();
    powerpellet();
    gameover();
    win();
  }

  document.addEventListener("keyup", movePac);
  //pacman eats dot
  function pacdotEat() {
    if (squres[pacIndex].classList.contains("pac-dot")) {
      score++;
      scoreDisplay.innerHTML = score;
      squres[pacIndex].classList.remove("pac-dot");
    }
  }
  //pacman eats power pellet
  function powerpellet() {
    if (squres[pacIndex].classList.contains("power-pellet")) {
      score += 10;
      ghosts.forEach((x) => (x.scared = true));
      setTimeout(unscare, 10000);
      squres[pacIndex].classList.remove("power-pellet");
    }
  }
  function unscare() {
    ghosts.forEach((x) => (x.scared = false));
  }
  //GHOSTS
  class Ghost {
    constructor(className, sindex, speed) {
      this.className = className;
      this.sindex = sindex;
      this.speed = speed;
      this.currentindex = sindex;
      this.timerid = NaN;
      this.scared = false;
    }
  }
  ghosts = [
    new Ghost("inky", 348, 90),
    new Ghost("pinky", 376, 80),
    new Ghost("ponky", 351, 70),
    new Ghost("fatherisadonkey", 379, 50),
  ];
  //put ghosts onto grid.
  ghosts.forEach((x) => {
    squres[x.currentindex].classList.add(x.className);
    squres[x.currentindex].classList.add("ghost");
  });
  ghosts.forEach((x) => moveghost(x));
  function moveghost(x) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];
    x.timerid = setInterval(function () {
      //if ghost's next move is not a wall and a ghost, it is a valid move.
      if (
        !squres[x.currentindex + direction].classList.contains("wall") &&
        !squres[x.currentindex + direction].classList.contains("ghost")
      ) {
        //remove all ghosts
        squres[x.currentindex].classList.remove(
          x.className,
          "ghost",
          "scared-ghost"
        );
        //update current location
        x.currentindex += direction;
        // put ghost in new location
        squres[x.currentindex].classList.add(x.className, "ghost");
      } else {
        //else try a new direction.
        direction = directions[Math.floor(Math.random() * directions.length)];
      }
      if (x.scared) {
        squres[x.currentindex].classList.add("scared-ghost");
      }
      if (x.scared && squres[x.currentindex].classList.contains("pac-man")) {
        squres[x.currentindex].classList.remove(
          x.className,
          "ghost",
          "scared-ghost"
        );
        x.currentindex = x.sindex;
        score += 50;
        squres[x.currentindex].classList.add(x.className, "ghost");
      }
      gameover();
    }, x.speed);
  }
  function gameover() {
    if (
      squres[pacIndex].classList.contains("ghost") &&
      !squres[pacIndex].classList.contains("scared-ghost")
    ) {
      ghosts.forEach((x) => clearInterval(x.timerid));
      document.removeEventListener("keyup", movePac);
      setTimeout(function () {
        if (confirm("                                              YOU LOST! \n\n                                              Restart?")) {
          window.location.reload();
        }
      }, 500);
    }
  }
  function win() {
    if (score >= 300) {
      ghosts.forEach((x) => clearInterval(x.timerid));
      document.removeEventListener("keyup", movePac);
      setTimeout(function () {
        if (confirm("                                              YOU WON!\n\n                                                Restart?")) {
          window.location.reload();
        }
      }, 500);
    }
  }
});
