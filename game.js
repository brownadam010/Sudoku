
window.onload = function() {
  let api = new Sudoku();

  api.Start();
}

const gameDiv = document.getElementById('gameDiv');
const playGame = document.getElementById('playGame');
const gameBoard = document.getElementById('game');
const gameHeader = document.getElementById('beforeGameheader');
const inGameHeader = document.getElementById('inGameHeader');
const quitGame = document.getElementById('quitGame');
const quitBtn = document.getElementById('quit');
const completeGame = document.getElementById('complete');
let game;
let boardData = [[],[],[],[],[],[],[],[],[]];
let canvasDiv = document.getElementById('winLoseCanvas');
let canvasWin = document.getElementById('winGraphic');
let ctxWin = canvasWin.getContext('2d');
let canvasLose = document.getElementById('loseGraphic');
let ctxLose = canvasLose.getContext('2d');

class Sudoku {

  getSudokuPuzzle() {
    //fetching puzzle generated numbers from api
    return fetch(
      'https://sugoku.herokuapp.com/board?difficulty=random'
    )
    .then((r) => r.json())
    .then((puzzle) => {
      console.log(puzzle);
      return puzzle;
    })
    
  }
  
  async Start()
  {
    //awaiting puzzle response
    var puzzle = await this.getSudokuPuzzle();

    //using for loop to insert puzzle.board values into the sudoku html board.
    for (let i = 0; i < gameBoard.rows.length; i++) {
      for (let x = 0; x < gameBoard.rows[i].cells.length; x++) {
        if (puzzle.board[i][x] != "0") {
          gameBoard.rows[i].cells[x].innerHTML = puzzle.board[i][x];
        }
      }
    }

    return this.puzzle;
  }

}

function checkWinLose() {
  let columns = [];
  let grids = [];

  //loop through same loop used to populate api numbers but now we take all of the filled out gameboard rows and add their innerHTMl into an array.
  for (let i = 0; i < gameBoard.rows.length; i++) {
    for (let x = 0; x < gameBoard.rows[i].cells.length; x++) {
      if(gameBoard.rows[i].cells[x].children[0] != null)
      {
        boardData[i][x] = gameBoard.rows[i].cells[x].children[0].value;
      } else {
        boardData[i][x] = gameBoard.rows[i].cells[x].innerHTML;
      }
    }
  }
   
  //parsing strings in the board into ints to do validations with.
  for(let i = 0; i < 9; i++) {
    for(let x = 0; x < 9; x++) {
      boardData[i][x] = parseInt(boardData[i][x]);
    }
  }

  //creating empty arrays for column and grid data to fill after sorting correctly
  for(let i = 0; i < 9; i++) {
    columns.push([]);
    grids.push([]);
  }

  for(let i = 0; i < 9; i++) {
    for(let x = 0; x < 9; x++) {

      //essentially takes original board columns and makes them the rows of the column array. this makes it easier for testing.
      columns[x][i] = boardData[i][x];

      //this creates the math needes to detect the 3x3 grids the board makes up
      let gridRows = Math.floor(i / 3);
      let girdCols = Math.floor(x / 3);
      let gridSquare = gridRows * 3 + girdCols;

      //takes the grid created and saves them from the existing board and the values correlating to that grid.
      grids[gridSquare].push(boardData[i][x]);
    }
  }

  //checks to see if all validations come back true and then returns false or true based on that. This will be used to show the winning and losing screen.
  if(!((validateBoard(boardData) == true) && (validateBoard(grids) == true) && (validateBoard(columns) == true))) {
    console.log("lost");
    return false;
  } else {
    console.log("win");
    return true;
  }

}

function validateBoard(data) {
  //go through rows, columns, or grid data
  for(let i = 0; i < 9; i++) {
    //sort the rows from least to greatest
    data[i].sort();
    for(let x = 0; x < 9; x++) {
      let firstTest = data[i][x]
      let nextTest = data[i][x + 1];

      //check if the values exist and if they are in the valid range.
      if(!(firstTest && firstTest > 0 && firstTest < 10)) {
        return false;
      }

      //check if numbers in the row are unique
      if(firstTest === nextTest) {
        return false;
      }

    }
  }
  //if all validations pass the function returns true
  return true;
}

function drawWin() {
  canvasWin.style.width = '400px';
  canvasWin.style.height = '300px';
  ctxWin.stokeStyle = "#000";
  ctxWin.lineWidth = 1;
  ctxWin.fillStyle = 'green';
  ctxWin.fillRect(10, 10, 400, 300);
  ctxWin.fill();
  ctxWin.stroke();
  fadeInWin("You Won!!");
}

function fadeInWin(text) {
  let opacity = 0.0, 
    fadeInterval = setInterval(function() {
      ctxWin.fillStyle = "rgb(0,0,0," + opacity + ")";
      ctxWin.font = "24pt Georgia";
      ctxWin.shadowColor = "black";
      ctxWin.shadowBlur = 4;
      ctxWin.fillText(text, 75, 85);
      opacity = opacity += 0.1;
      if(opacity > 0.4) {
        clearInterval(fadeInterval);
      }
    }, 500);
}

function drawLose() {
  canvasLose.style.width = '400px';
  canvasLose.style.height = '300px';
  ctxLose.stokeStyle = "#000";
  ctxLose.lineWidth = 1;
  ctxLose.fillStyle = 'red';
  ctxLose.fillRect(10, 10, 400, 300);
  ctxWin.fill();
  ctxWin.stroke();
  fadeInLose("You Lost :(");
}

function fadeInLose(text) {
  let opacity = 0.0, 
    fadeInterval = setInterval(function() {
      ctxLose.fillStyle = "rgb(0,0,0," + opacity + ")";
      ctxLose.font = "24pt Georgia";
      ctxLose.shadowColor = "black";
      ctxLose.shadowBlur = 4;
      ctxLose.fillText(text, 75, 85);
      opacity = opacity += 0.1;
      if(opacity > 0.4) {
        clearInterval(fadeInterval);
      }
    }, 500);

}


playGame.addEventListener("click", function(clickEvent) {
  //on play click reveal the sudoku board
  gameDiv.classList.remove("hidden");
  gameHeader.classList.add("hidden");
  inGameHeader.classList.remove("hidden");
  quitGame.classList.remove("hidden");
});

quitBtn.addEventListener("click", function(clickEvent) {
  gameDiv.classList.add("hidden");
  gameHeader.classList.remove("hidden");
  inGameHeader.classList.add("hidden");
  quitGame.classList.add("hidden");
});

completeGame.addEventListener("click", function(clickEvent) {
  if(checkWinLose() == true) {
    //console.log("new lost message");
    //canvasDiv.classList.remove("hidden");
    canvasWin.classList.remove("hidden");
    drawWin();
  } else {
    canvasLose.classList.remove("hidden");
    drawLose();
  }
});

