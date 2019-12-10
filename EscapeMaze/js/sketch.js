let mazeCanvas = document.getElementById("mazeCanvas"); 
let ctx = mazeCanvas.getContext("2d"); //Returns a 2D drawing context on canvas
let characterSprite, finishSprite, gem; //Hold the image items used in game
let  maze, draw, player;
let cellSize; //Size of each cell in maze
let difficulty; //Determines size of maze

window.onload = function() {
  //Set page according to user playing
  if(sessionStorage.length > 0)
  {
      let currentUser = JSON.parse(sessionStorage.getItem(0));
      hideItem(3,4);
      document.getElementById("dropdownMenuButton").classList.remove('hidden');
      document.getElementById("dropdownMenuButton").innerHTML = currentUser.username;
  }

  //Initialize canvas
  let viewWidth = $("#view").width();  
  let viewHeight = $("#view").height();
  if (viewHeight < viewWidth) {
    ctx.canvas.width = viewHeight - viewHeight / 100;
    ctx.canvas.height = viewHeight - viewHeight / 100;
  } else {
    ctx.canvas.width = viewWidth - viewWidth / 100;
    ctx.canvas.height = viewWidth - viewWidth / 100;
  }

  //Load and edit sprites
  let complete = [false,false,false,false,false];
  let isComplete = () => {
    if(complete[0] === true && complete[1] === true && complete[2] === true && complete[3] === true && complete[4] === true)
       {
         setTimeout(makeMaze(), 1);         
       }
  };

  //Game Character
  characterSprite = new Image();
  characterSprite.src = "./img/character.png";
  characterSprite.setAttribute("crossOrigin", "");
  characterSprite.onload = function() {
    complete[0] = true;
    isComplete();
  };

  //Game character translated image
  characterSpriteLeft = new Image();
  characterSpriteLeft.src = "./img/charLeft.png";
  characterSpriteLeft.setAttribute("crossOrigin", "");
  characterSpriteLeft.onload = function() {
    complete[1] = true;
    isComplete();
  };

  //Endpoint (door)
  finishSprite = new Image();
  finishSprite.src = "./img/door.png";
  finishSprite.setAttribute("crossOrigin", "");
  finishSprite.onload = function() {
    complete[2] = true;
    isComplete();
  };

  //Key
  keySprite = new this.Image();
  keySprite.src = "./img/key.png";
  keySprite.setAttribute("crossOrigin"," ");
  keySprite.onload = function(){
    complete[4] = true;
    isComplete();
  }
  
};

window.onresize = function() {
  let viewWidth = $("#view").width();
  let viewHeight = $("#view").height();
  if (viewHeight < viewWidth) {
    ctx.canvas.width = viewHeight - (viewHeight / 100);
    ctx.canvas.height = viewHeight - (viewHeight / 100);
  } else {
    ctx.canvas.width = viewWidth - viewWidth / 100;
    ctx.canvas.height = viewWidth - viewWidth / 100;
  }
  cellSize = ctx.canvas.width / difficulty;
  if (player != null) {
    draw.redrawMaze(cellSize);
    gem.redrawGem(cellSize);
    player.redrawPlayer(cellSize);
  }
};

/**
 * Generates a random floating-point number from 0-max.
 * Inclusive of 0, but not max.
 **/
function rand(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Randomize the array element order.
 * Using the Durstenfeld shuffle algorithm
 **/
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
  
/** 
 *Displays victory message with score.
 **/  
function displayVictoryMess(moves) 
{
  document.getElementById("moves").innerHTML = "Your score is calculated by number of moves (" + moves + ") and time left.";
  toggleVisibility("message-container");  
}

/**
 * Toggles visability of element passed.
 **/
function toggleVisibility(id) 
{
  if (document.getElementById(id).style.visibility == "visible") 
  {
    document.getElementById(id).style.visibility = "hidden";
  } else {
    document.getElementById(id).style.visibility = "visible";
  }
}

function Maze(Width, Height) {
  let mazeMap;
  let width = Width;
  let height = Height;
  let startCoord, endCoord, midCoord;
  var dirs = ["n", "s", "e", "w"];
  var modDir = 
  {
    n: {
      y: -1,
      x: 0,
      o: "s"
    },
    s: {
      y: 1,
      x: 0,
      o: "n"
    },
    e: {
      y: 0,
      x: 1,
      o: "w"
    },
    w: {
      y: 0,
      x: -1,
      o: "e"
    }};

  this.map = function() 
  {
    return mazeMap;
  };
  this.startCoord = function() 
  {
    return startCoord;
  };
  this.endCoord = function()
  {
    return endCoord;
  };

  this.midCoord = function()
  {
    return midCoord;
  }

  /**
   * Creates cells in maze.
   **/ 
  function genMap() 
  {
    mazeMap = new Array(height);
    for (y = 0; y < height; y++) 
    {
      mazeMap[y] = new Array(width);
      for (x = 0; x < width; ++x) 
      {
        mazeMap[y][x] = {
          n: false,
          s: false,
          e: false,
          w: false,
          visited: false,
          priorPos: null
        };
      }
    }
  }

  function defineMaze() {
    var isComp = false;
    var move = false;
    var cellsVisited = 1;
    var numLoops = 0;
    var maxLoops = 0;
    var pos = {
      x: 0,
      y: 0
    };
    var numCells = width * height;
    while (!isComp) {
      move = false;
      mazeMap[pos.x][pos.y].visited = true;

      if (numLoops >= maxLoops) {
        shuffle(dirs);
        maxLoops = Math.round(rand(height / 8));
        numLoops = 0;
      }
      numLoops++;
      for (i = 0; i < dirs.length; i++) {
        let direction = dirs[i];
        let newX = pos.x + modDir[direction].x;
        let newY = pos.y + modDir[direction].y;

        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
          //Step 1: Check if the tile is already visited
          if (!mazeMap[newX][newY].visited) {
            //Step 2: Carve through walls from this tile to next
            mazeMap[pos.x][pos.y][direction] = true;
            mazeMap[newX][newY][modDir[direction].o] = true;

            //Step 3: Set Currentcell as next cells Prior visited
            mazeMap[newX][newY].priorPos = pos;
            //Step 4: Update Cell position to newly visited location
            pos = {
              x: newX,
              y: newY
            };
            cellsVisited++;
            //Recursively call this method on the next tile
            move = true;
            break;
          }
        }
      }

      if (!move) {
        //  If it failed to find a direction,
        //  move the current position back to the prior cell and Recall the method.
        pos = mazeMap[pos.x][pos.y].priorPos;
      }
      if (numCells == cellsVisited) {
        isComp = true;
      }
    }
  }

  function defineStartEnd() {
    switch (rand(4)) {
      case 0:
        startCoord = {
          x: 0,
          y: 0
        };
        endCoord = {
          x: height - 1,
          y: width - 1
        };
        break;
      case 1:
        startCoord = {
          x: 0,
          y: width - 1
        };
        endCoord = {
          x: height - 1,
          y: 0
        };
        break;
      case 2:
        startCoord = {
          x: height - 1,
          y: 0
        };
        endCoord = {
          x: 0,
          y: width - 1
        };
        break;
      case 3:
        startCoord = {
          x: height - 1,
          y: width - 1
        };
        endCoord = {
          x: 0,
          y: 0
        };
        break;
    }
  }

  function defineMidCoord()
  {
    midCoord = {
      x: height / 2,
      y: width / 2
    };
  }

  genMap();
  defineStartEnd();
  defineMidCoord();
  defineMaze();
}

function DrawMaze(Maze, ctx, cellsize, endSprite = null, keySprite = null) {
  var map = Maze.map();
  var cellSize = cellsize;
  var drawEndMethod;
  ctx.lineWidth = cellSize / 40;

  this.redrawMaze = function(size) {
    cellSize = size;
    ctx.lineWidth = cellSize / 50;
    drawMap();
    drawEndMethod();
  };

  /**
   * Draw cell walls 
   */
  function drawCell(xCord, yCord, cell) {
    var x = xCord * cellSize;
    var y = yCord * cellSize;

    if (cell.n == false) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + cellSize, y);
      ctx.stroke();
    }
    if (cell.s === false) {
      ctx.beginPath();
      ctx.moveTo(x, y + cellSize);
      ctx.lineTo(x + cellSize, y + cellSize);
      ctx.stroke();
    }
    if (cell.e === false) {
      ctx.beginPath();
      ctx.moveTo(x + cellSize, y);
      ctx.lineTo(x + cellSize, y + cellSize);
      ctx.stroke();
    }
    if (cell.w === false) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + cellSize);
      ctx.stroke();
    }
  }
/**
 * Populate map by looping through cells
 */
  function drawMap() {
    for (x = 0; x < map.length; x++) {
      for (y = 0; y < map[x].length; y++) {
        drawCell(x, y, map[x][y]);
      }
    }
  }

  function drawKey()
  {
    let offsetLeft = cellSize / 100;
    let offsetRight = cellSize / 100;
    let keyCoord = Maze.midCoord();
    ctx.drawImage(
      keySprite,
      40,
      40,
      keySprite.width,
      keySprite.height,
      keyCoord.x * cellSize + offsetLeft,
      keyCoord.y * cellSize + offsetLeft,
      (cellSize - offsetRight)/2,
      (cellSize - offsetRight)/2
    );
  }

  function drawEndSprite() {
    let offsetLeft = cellSize / 50;
    let offsetRight = cellSize / 25;
    let coord = Maze.endCoord();
    ctx.drawImage(
      endSprite,
      2,
      2,
      endSprite.width,
      endSprite.height,
      coord.x * cellSize + offsetLeft,
      coord.y * cellSize + offsetLeft,
      cellSize - offsetRight,
      cellSize - offsetRight
    );
  }

  function clear() {
    let canvasSize = cellSize * map.length;
    ctx.clearRect(0, 0, canvasSize, canvasSize);
  }

  if (endSprite != null) 
  {
    drawEndMethod = drawEndSprite;
  }

  clear();
  drawMap();
  drawEndMethod();
  drawKey();
}

function Player(maze, c, _cellsize, onComplete, sprite = null) {
  let ctx = c.getContext("2d");
  let drawSprite;
  let score = 0;
  let hasKey = false;
  let moves = 0;
  if (sprite != null) {
    drawSprite = drawSpriteImg;
  }
  var player = this;
  var map = maze.map();
  var cellCoords = {
    x: maze.startCoord().x,
    y: maze.startCoord().y
  };
  var cellSize = _cellsize;

  this.redrawPlayer = function(_cellsize) {
    cellSize = _cellsize;
    drawSpriteImg(cellCoords);
  };

  function drawSpriteImg(coord) {
    var offsetLeft = cellSize / 50;
    var offsetRight = cellSize / 25;
    ctx.drawImage(
      characterSprite,
      0,
      0,
      characterSprite.width,
      characterSprite.height,
      coord.x * cellSize + offsetLeft,
      coord.y * cellSize + offsetLeft,
      cellSize - offsetRight,
      cellSize - offsetRight
    );
    if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y && hasKey == true) {
      onComplete(moves);
      console.log("hello");
      alert("You win");
      player.unbindKeyDown();
    }
    else if(coord.x === maze.endCoord().x && coord.y === maze.endCoord().y && hasKey == false)
    {
      alert("You need to find the key!");
    }
    if(coord.x === maze.midCoord().x && coord.y === maze.midCoord().y)
    {
      hasKey = true;
    }
  }

  function drawSpriteLeft(coord)
  {
    var offsetLeft = cellSize / 50;
    var offsetRight = cellSize / 25;
    ctx.drawImage(
      characterSpriteLeft,
      0,
      0,
      characterSpriteLeft.width,
      characterSpriteLeft.height,
      coord.x * cellSize + offsetLeft,
      coord.y * cellSize + offsetLeft,
      cellSize - offsetRight,
      cellSize - offsetRight
    );
    if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
      onComplete(moves);
      player.unbindKeyDown();
    }
  }

  function removeSprite(coord) {
    var offsetLeft = cellSize / 50;
    var offsetRight = cellSize / 25;
    ctx.clearRect(
      coord.x * cellSize + offsetLeft,
      coord.y * cellSize + offsetLeft,
      cellSize - offsetRight,
      cellSize - offsetRight
    );
  }

  function check(e) {
    e.preventDefault();
    var cell = map[cellCoords.x][cellCoords.y];
    moves++;
    switch (e.keyCode) {
      case 65:
      case 37: // west
        if (cell.w == true) {
          removeSprite(cellCoords);
          cellCoords = {
            x: cellCoords.x - 1,
            y: cellCoords.y
          };
          drawSpriteLeft(cellCoords);
        }
        break;
      case 87:
      case 38: // north
        if (cell.n == true) {
          removeSprite(cellCoords);
          cellCoords = {
            x: cellCoords.x,
            y: cellCoords.y - 1
          };
          drawSprite(cellCoords);
        }
        break;
      case 68:
      case 39: // east
        if (cell.e == true) {
          removeSprite(cellCoords);
          cellCoords = {
            x: cellCoords.x + 1,
            y: cellCoords.y
          };
          drawSprite(cellCoords);
        }
        break;
      case 83:
      case 40: // south
        if (cell.s == true) {
          removeSprite(cellCoords);
          cellCoords = {
            x: cellCoords.x,
            y: cellCoords.y + 1
          };
          drawSprite(cellCoords);
        }
        break;
    }
  }

  this.bindKeyDown = function() {
    window.addEventListener("keydown", check, false);

    $("#view").swipe({
      swipe: function(
        event,
        direction,
        distance,
        duration,
        fingerCount,
        fingerData
      ) {
        console.log(direction);
        switch (direction) {
          case "up":
            check({
              keyCode: 38
            });
            break;
          case "down":
            check({
              keyCode: 40
            });
            break;
          case "left":
            check({
              keyCode: 37
            });
            break;
          case "right":
            check({
              keyCode: 39
            });
            break;
        }
      },
      threshold: 0
    });
  };

  this.unbindKeyDown = function() {
    window.removeEventListener("keydown", check, false);
    $("#view").swipe("destroy");
  };

  drawSprite(maze.startCoord());

  this.bindKeyDown();
}
  
function makeMaze() {
  document.getElementById("mazeCanvas").classList.add("border");
  if (player != undefined) {
    player.unbindKeyDown();
    player = null;
  }
  let e = document.getElementById("diffSelect");
  difficulty = e.options[e.selectedIndex].value;
  cellSize = mazeCanvas.width / difficulty;
  maze = new Maze(difficulty, difficulty);
  draw = new DrawMaze(maze, ctx, cellSize, finishSprite, keySprite);
  player = new Player(maze, mazeCanvas, cellSize, displayVictoryMess, characterSprite);
  if (document.getElementById("mazeContainer").style.opacity < "100") {
    document.getElementById("mazeContainer").style.opacity = "100";
  }
}

function startPractise(){
  document.getElementById("view").style.visibility = "visible";
  makeMaze();
}

function playGame()
{
  document.getElementById("view").style.visibility = "visible";
  document.getElementById("menu").style.visibility = "hidden";
  makeMaze();
}