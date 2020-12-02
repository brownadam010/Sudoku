
window.onload = function() {
  let api = new Sudoku();

  api.Start();
  
}

let gameDiv = document.getElementById('gameDiv');
let playGame = document.getElementById('playGame');
let gameBoard = document.getElementById('game');
let gameHeader = document.getElementById('header');
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

}

playGame.addEventListener("click", function(clickEvent) {
  //on play click reveal the sudoku board
  gameDiv.classList.remove("hidden");
  gameHeader.classList.add("hidden");
});

