let config;

window.onload = function() {
  config = {
    width: 1200,
    height: 1200,
    backgroundColor: 0xffffff,
    scene: [Scene1, Scene2],
  }
  let game = new Phaser.Game(config);
}