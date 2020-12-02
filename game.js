
window.onload = function() {
  
  let api = new Sudoku();
  let gameboard = api.Start();
  console.log(gameboard);
=======

  api.Start();
>>>>>>> Stashed changes
  
}

let gameDiv = document.getElementById('gameDiv');
let playGame = document.getElementById('playGame');
let gameBoard = document.getElementById('game');
let game;

class Sudoku {

  getSudokuPuzzle() {
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
<<<<<<< Updated upstream
    let puzzle = await this.getSudokuPuzzle();
    console.log(puzzle);
=======
    var puzzle = await this.getSudokuPuzzle();
    
    var line1 = puzzle.board[0];
    var line2 = puzzle.board[1];
    var line3 = puzzle.board[2];
    var line4 = puzzle.board[3];
    var line5 = puzzle.board[4];
    var line6 = puzzle.board[5];
    var line7 = puzzle.board[6];
    var line8 = puzzle.board[7];
    var line9 = puzzle.board[8];
    //Putting Each line in a variable and printing them for reference.
    console.log(line1);
    console.log(line2);
    console.log(line3);
    console.log(line4);
    console.log(line5);
    console.log(line6);
    console.log(line7);
    console.log(line8);
    console.log(line9);
>>>>>>> Stashed changes
    return this.puzzle;
    //Reset Gameboard here and draw out your puzzle with the api results.
  }

  //add response to sudoku board with populated values.
  /*generateBoard() {
    for (let i = 0; i < gameBoard.rows.length; i++) {
      for (let x = 0; x < gameBoard.rows[i].cells.length; x++) {
        let start = this.getSudokuPuzzle();
        console.log(start);
        if (start[i][x] != "0") {
          gameBoard.rows[i].cells[x].innerHTML = start[i][x];
        }
      }
    }
  }*/

}

playGame.addEventListener("click", function(clickEvent) {
  //game = new Sudoku();
  //game.generateBoard();
  gameDiv.classList.remove("hidden");
});

