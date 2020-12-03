
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

  checkWinLose() {
    let data = new Array(9).fill(0).map(() => new Array(9).fill(0));
    console.log(data);
    
    //loop through same loop used to populate api numbers but now we take all of those rows and add their innerHTMl into an array.
    for (let i = 0; i < gameBoard.rows.length; i++) {
      for (let x = 0; x < gameBoard.rows[i].cells.length; x++) {
        if(gameBoard.rows[i].cells[x].innerHTML != "")
        {
          data[i][x] = gameBoard.rows[i].cells[x].innerHTML;
        } else {
          data[i][x] = gameBoard.rows[i].cells[x].children[0].value
        }
      }
    }

    console.log(data);

  }

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
  game = new Sudoku();
  game.checkWinLose();
});

