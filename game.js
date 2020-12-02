
window.onload = function() {
  
  let api = new Sudoku();
  let gameboard = api.Start();
  console.log(gameboard);
  
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
    let puzzle = await this.getSudokuPuzzle();
    console.log(puzzle);
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

