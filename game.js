let config;

window.onload = function() {
  config = {
    width: 1200,
    height: 1200,
    backgroundColor: 0xffffff,
    scene: [Scene1, Scene2],
  }
  let game = new Phaser.Game(config);
  let api = new Sudoku();

  let gameBoard = api.Start();
  console.log(gameBoard);
  
}
class Sudoku {
  getSudokuPuzzle() {
    return fetch(
      'https://sugoku.herokuapp.com/board?difficulty=random'
    )
    .then((r) => r.json())
    .then((puzzle) => {
      return puzzle;
    })
    
  }
  
  async Start()
  {
    var puzzle = await this.getSudokuPuzzle();
    console.log(puzzle);
    return this.puzzle;
    //Reset Gameboard here and draw out your puzzle with the api results.
  }
}
