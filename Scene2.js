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

    //row 2
    this.row2Column1 = this.add.sprite(-0, -1, "row2Column1");
    this.row2Column1.setOrigin(-0,-1);

    this.row2Column2 = this.add.sprite(-1, -1, "row2Column2");
    this.row2Column2.setOrigin(-1,-1);

    this.row2Column3 = this.add.sprite(-2, -1, "row2Column3");
    this.row2Column3.setOrigin(-2,-1);

    this.row2Column4 = this.add.sprite(-3, -1, "row2Column4");
    this.row2Column4.setOrigin(-3,-1);

    this.row2Column5 = this.add.sprite(-4, -1, "row2Column5");
    this.row2Column5.setOrigin(-4,-1);

    this.row2Column6 = this.add.sprite(-5, -1, "row2Column6");
    this.row2Column6.setOrigin(-5,-1);

    this.row2Column7 = this.add.sprite(-6, -1, "row2Column7");
    this.row2Column7.setOrigin(-6,-1);

    this.row2Column8 = this.add.sprite(-7, -1, "row2Column8");
    this.row2Column8.setOrigin(-7,-1);

    this.row2Column9 = this.add.sprite(-8, -1, "row2Column9");
    this.row2Column9.setOrigin(-8,-1);

    //row3
    this.row3Column1 = this.add.sprite(-0, -2, "row3Column1");
    this.row3Column1.setOrigin(-0,-2);

    this.row3Column2 = this.add.sprite(-1, -2, "row3Column2");
    this.row3Column2.setOrigin(-1,-2);

    this.row3Column3 = this.add.sprite(-2, -2, "row3Column3");
    this.row3Column3.setOrigin(-2,-2);

    this.row3Column4 = this.add.sprite(-3, -2, "row3Column4");
    this.row3Column4.setOrigin(-3,-2);

    this.row3Column5 = this.add.sprite(-4, -2, "row3Column5");
    this.row3Column5.setOrigin(-4,-2);

    this.row3Column6 = this.add.sprite(-5, -2, "row3Column6");
    this.row3Column6.setOrigin(-5,-2);

    this.row3Column7 = this.add.sprite(-6, -2, "row3Column7");
    this.row3Column7.setOrigin(-6,-2);

    this.row3Column8 = this.add.sprite(-7, -2, "row3Column8");
    this.row3Column8.setOrigin(-7,-2);

    this.row3Column9 = this.add.sprite(-8, -2, "row3Column9");
    this.row3Column9.setOrigin(-8,-2);

    //row4
    this.row4Column1 = this.add.sprite(-0, -3, "row4Column1");
    this.row4Column1.setOrigin(-0,-3);

    this.row4Column2 = this.add.sprite(-1, -3, "row4Column2");
    this.row4Column2.setOrigin(-1,-3);

    this.row4Column3 = this.add.sprite(-2, -3, "row4Column3");
    this.row4Column3.setOrigin(-2,-3);

    this.row4Column4 = this.add.sprite(-3, -3, "row4Column4");
    this.row4Column4.setOrigin(-3,-3);

    this.row4Column5 = this.add.sprite(-4, -3, "row4Column5");
    this.row4Column5.setOrigin(-4,-3);

    this.row4Column6 = this.add.sprite(-5, -3, "row4Column6");
    this.row4Column6.setOrigin(-5,-3);

    this.row4Column7 = this.add.sprite(-6, -3, "row4Column7");
    this.row4Column7.setOrigin(-6,-3);

    this.row4Column8 = this.add.sprite(-7, -3, "row4Column8");
    this.row4Column8.setOrigin(-7,-3);

    this.row4Column9 = this.add.sprite(-8, -3, "row4Column9");
    this.row4Column9.setOrigin(-8,-3);

    //row5
    this.row5Column1 = this.add.sprite(-0, -4, "row5Column1");
    this.row5Column1.setOrigin(-0,-4);

    this.row5Column2 = this.add.sprite(-1, -4, "row5Column2");
    this.row5Column2.setOrigin(-1,-4);

    this.row5Column3 = this.add.sprite(-2, -4, "row5Column3");
    this.row5Column3.setOrigin(-2,-4);

    this.row5Column4 = this.add.sprite(-3, -4, "row5Column4");
    this.row5Column4.setOrigin(-3,-4);

    this.row5Column5 = this.add.sprite(-4, -4, "row5Column5");
    this.row5Column5.setOrigin(-4,-4);

    this.row5Column6 = this.add.sprite(-5, -4, "row5Column6");
    this.row5Column6.setOrigin(-5,-4);

    this.row5Column7 = this.add.sprite(-6, -4, "row5Column7");
    this.row5Column7.setOrigin(-6,-4);

    this.row5Column8 = this.add.sprite(-7, -4, "row5Column8");
    this.row5Column8.setOrigin(-7,-4);

    this.row5Column9 = this.add.sprite(-8, -4, "row5Column9");
    this.row5Column9.setOrigin(-8,-4);

    //row6
    this.row6Column1 = this.add.sprite(-0, -5, "row6Column1");
    this.row6Column1.setOrigin(-0,-5);

    this.row6Column2 = this.add.sprite(-1, -5, "row6Column2");
    this.row6Column2.setOrigin(-1,-5);

    this.row6Column3 = this.add.sprite(-2, -5, "row6Column3");
    this.row6Column3.setOrigin(-2,-5);

    this.row6Column4 = this.add.sprite(-3, -5, "row6Column4");
    this.row6Column4.setOrigin(-3,-5);

    this.row6Column5 = this.add.sprite(-4, -5, "row6Column5");
    this.row6Column5.setOrigin(-4,-5);

    this.row6Column6 = this.add.sprite(-5, -5, "row6Column6");
    this.row6Column6.setOrigin(-5,-5);

    this.row6Column7 = this.add.sprite(-6, -5, "row6Column7");
    this.row6Column7.setOrigin(-6,-5);

    this.row6Column8 = this.add.sprite(-7, -5, "row6Column8");
    this.row6Column8.setOrigin(-7,-5);

    this.row6Column9 = this.add.sprite(-8, -5, "row6Column9");
    this.row6Column9.setOrigin(-8,-5);

    //row7
    this.row7Column1 = this.add.sprite(-0, -6, "row7Column1");
    this.row7Column1.setOrigin(-0,-6);

    this.row7Column2 = this.add.sprite(-1, -6, "row7Column2");
    this.row7Column2.setOrigin(-1,-6);

    this.row7Column3 = this.add.sprite(-2, -6, "row7Column3");
    this.row7Column3.setOrigin(-2,-6);

    this.row7Column4 = this.add.sprite(-3, -6, "row7Column4");
    this.row7Column4.setOrigin(-3,-6);

    this.row7Column5 = this.add.sprite(-4, -6, "row7Column5");
    this.row7Column5.setOrigin(-4,-6);

    this.row7Column6 = this.add.sprite(-5, -6, "row7Column6");
    this.row7Column6.setOrigin(-5,-6);

    this.row7Column7 = this.add.sprite(-6, -6, "row7Column7");
    this.row7Column7.setOrigin(-6,-6);

    this.row7Column8 = this.add.sprite(-7, -6, "row7Column8");
    this.row7Column8.setOrigin(-7,-6);

    this.row7Column9 = this.add.sprite(-8, -6, "row7Column9");
    this.row7Column9.setOrigin(-8,-6);

    //row8
    this.row8Column1 = this.add.sprite(-0, -7, "row8Column1");
    this.row8Column1.setOrigin(-0,-7);

    this.row8Column2 = this.add.sprite(-1, -7, "row8Column2");
    this.row8Column2.setOrigin(-1,-7);

    this.row8Column3 = this.add.sprite(-2, -7, "row8Column3");
    this.row8Column3.setOrigin(-2,-7);

    this.row8Column4 = this.add.sprite(-3, -7, "row8Column4");
    this.row8Column4.setOrigin(-3,-7);

    this.row8Column5 = this.add.sprite(-4, -7, "row8Column5");
    this.row8Column5.setOrigin(-4,-7);

    this.row8Column6 = this.add.sprite(-5, -7, "row8Column6");
    this.row8Column6.setOrigin(-5,-7);

    this.row8Column7 = this.add.sprite(-6, -7, "row8Column7");
    this.row8Column7.setOrigin(-6,-7);

    this.row8Column8 = this.add.sprite(-7, -7, "row8Column8");
    this.row8Column8.setOrigin(-7,-7);

    this.row8Column9 = this.add.sprite(-8, -7, "row8Column9");
    this.row8Column9.setOrigin(-8,-7);

    //row9
    this.row9Column1 = this.add.sprite(-0, -8, "row9Column1");
    this.row9Column1.setOrigin(-0,-8);

    this.row9Column2 = this.add.sprite(-1, -8, "row9Column2");
    this.row9Column2.setOrigin(-1,-8);

    this.row9Column3 = this.add.sprite(-2, -8, "row9Column3");
    this.row9Column3.setOrigin(-2,-8);

    this.row9Column4 = this.add.sprite(-3, -8, "row9Column4");
    this.row9Column4.setOrigin(-3,-8);

    this.row9Column5 = this.add.sprite(-4, -8, "row9Column5");
    this.row9Column5.setOrigin(-4,-8);

    this.row9Column6 = this.add.sprite(-5, -8, "row9Column6");
    this.row9Column6.setOrigin(-5,-8);

    this.row9Column7 = this.add.sprite(-6, -8, "row9Column7");
    this.row9Column7.setOrigin(-6,-8);

    this.row9Column8 = this.add.sprite(-7, -8, "row9Column8");
    this.row9Column8.setOrigin(-7,-8);

    this.row9Column9 = this.add.sprite(-8, -8, "row9Column9");
    this.row9Column9.setOrigin(-8,-8);
  }
}