let config;

window.onload = function() {
  config = {
    width: 900,
    height: 900,
    backgroundColor: 0xffffff,
    scene: [Scene1, Scene2],
  }
  let game = new Phaser.Game(config);
}