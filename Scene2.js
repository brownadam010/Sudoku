class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.row1Column1 = this.add.sprite(0, 0, "row1Column1");
    this.row1Column1.setOrigin(0,0);
    
    this.row1Column2 = this.add.sprite(100, 0, "row1Column2");
    this.row1Column2.setOrigin(0,0);

    this.row1Column3 = this.add.sprite(200, 0, "row1Column3");
    this.row1Column3.setOrigin(0, 0);

    this.row1Column4 = this.add.sprite(300, 0, "row1Column4");
    this.row1Column4.setOrigin(0, 0);

    this.row1Column5 = this.add.sprite(400, 0, "row1Column5");
    this.row1Column5.setOrigin(0, 0);

    this.row1Column6 = this.add.sprite(500, 0, "row1Column6");
    this.row1Column6.setOrigin(0, 0);

    this.row1Column7 = this.add.sprite(600, 0, "row1Column7");
    this.row1Column7.setOrigin(0, 0);

    this.row1Column8 = this.add.sprite(700, 0, "row1Column8");
    this.row1Column8.setOrigin(0, 0);

    this.row1Column9 = this.add.sprite(800, 0, "row1Column9");
    this.row1Column9.setOrigin(0, 0);
  }
}