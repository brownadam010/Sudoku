class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("row1Column1", "assets/sudokuSquare.png");
    this.load.image("row1Column2", "assets/sudokuSquare.png");
    this.load.image("row1Column3", "assets/sudokuSquare.png");
    this.load.image("row1Column4", "assets/sudokuSquare.png");
    this.load.image("row1Column5", "assets/sudokuSquare.png");
    this.load.image("row1Column6", "assets/sudokuSquare.png");
    this.load.image("row1Column7", "assets/sudokuSquare.png");
    this.load.image("row1Column8", "assets/sudokuSquare.png");
    this.load.image("row1Column9", "assets/sudokuSquare.png");

    this.load.image("row2Column1", "assets/sudokuSquare.png");
    this.load.image("row2Column2", "assets/sudokuSquare.png");
    this.load.image("row2Column3", "assets/sudokuSquare.png");
    this.load.image("row2Column4", "assets/sudokuSquare.png");
    this.load.image("row2Column5", "assets/sudokuSquare.png");
    this.load.image("row2Column6", "assets/sudokuSquare.png");
    this.load.image("row2Column7", "assets/sudokuSquare.png");
    this.load.image("row2Column8", "assets/sudokuSquare.png");
    this.load.image("row2Column9", "assets/sudokuSquare.png");

    this.load.image("row3Column1", "assets/sudokuSquare.png");
    this.load.image("row3Column2", "assets/sudokuSquare.png");
    this.load.image("row3Column3", "assets/sudokuSquare.png");
    this.load.image("row3Column4", "assets/sudokuSquare.png");
    this.load.image("row3Column5", "assets/sudokuSquare.png");
    this.load.image("row3Column6", "assets/sudokuSquare.png");
    this.load.image("row3Column7", "assets/sudokuSquare.png");
    this.load.image("row3Column8", "assets/sudokuSquare.png");
    this.load.image("row3Column9", "assets/sudokuSquare.png");
    
    this.load.image("row4Column1", "assets/sudokuSquare.png");
    this.load.image("row4Column2", "assets/sudokuSquare.png");
    this.load.image("row4Column3", "assets/sudokuSquare.png");
    this.load.image("row4Column4", "assets/sudokuSquare.png");
    this.load.image("row4Column5", "assets/sudokuSquare.png");
    this.load.image("row4Column6", "assets/sudokuSquare.png");
    this.load.image("row4Column7", "assets/sudokuSquare.png");
    this.load.image("row4Column8", "assets/sudokuSquare.png");
    this.load.image("row4Column9", "assets/sudokuSquare.png");

    this.load.image("row5Column1", "assets/sudokuSquare.png");
    this.load.image("row5Column2", "assets/sudokuSquare.png");
    this.load.image("row5Column3", "assets/sudokuSquare.png");
    this.load.image("row5Column4", "assets/sudokuSquare.png");
    this.load.image("row5Column5", "assets/sudokuSquare.png");
    this.load.image("row5Column6", "assets/sudokuSquare.png");
    this.load.image("row5Column7", "assets/sudokuSquare.png");
    this.load.image("row5Column8", "assets/sudokuSquare.png");
    this.load.image("row5Column9", "assets/sudokuSquare.png");

    this.load.image("row6Column1", "assets/sudokuSquare.png");
    this.load.image("row6Column2", "assets/sudokuSquare.png");
    this.load.image("row6Column3", "assets/sudokuSquare.png");
    this.load.image("row6Column4", "assets/sudokuSquare.png");
    this.load.image("row6Column5", "assets/sudokuSquare.png");
    this.load.image("row6Column6", "assets/sudokuSquare.png");
    this.load.image("row6Column7", "assets/sudokuSquare.png");
    this.load.image("row6Column8", "assets/sudokuSquare.png");
    this.load.image("row6Column9", "assets/sudokuSquare.png");

    this.load.image("row7Column1", "assets/sudokuSquare.png");
    this.load.image("row7Column2", "assets/sudokuSquare.png");
    this.load.image("row7Column3", "assets/sudokuSquare.png");
    this.load.image("row7Column4", "assets/sudokuSquare.png");
    this.load.image("row7Column5", "assets/sudokuSquare.png");
    this.load.image("row7Column6", "assets/sudokuSquare.png");
    this.load.image("row7Column7", "assets/sudokuSquare.png");
    this.load.image("row7Column8", "assets/sudokuSquare.png");
    this.load.image("row7Column9", "assets/sudokuSquare.png");

    this.load.image("row8Column1", "assets/sudokuSquare.png");
    this.load.image("row8Column2", "assets/sudokuSquare.png");
    this.load.image("row8Column3", "assets/sudokuSquare.png");
    this.load.image("row8Column4", "assets/sudokuSquare.png");
    this.load.image("row8Column5", "assets/sudokuSquare.png");
    this.load.image("row8Column6", "assets/sudokuSquare.png");
    this.load.image("row8Column7", "assets/sudokuSquare.png");
    this.load.image("row8Column8", "assets/sudokuSquare.png");
    this.load.image("row8Column9", "assets/sudokuSquare.png");

    this.load.image("row9Column1", "assets/sudokuSquare.png");
    this.load.image("row9Column2", "assets/sudokuSquare.png");
    this.load.image("row9Column3", "assets/sudokuSquare.png");
    this.load.image("row9Column4", "assets/sudokuSquare.png");
    this.load.image("row9Column5", "assets/sudokuSquare.png");
    this.load.image("row9Column6", "assets/sudokuSquare.png");
    this.load.image("row9Column7", "assets/sudokuSquare.png");
    this.load.image("row9Column8", "assets/sudokuSquare.png");
    this.load.image("row9Column9", "assets/sudokuSquare.png");
  }

  create() {
    this.scene.start("playGame");

  
  }
}