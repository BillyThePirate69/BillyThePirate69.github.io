let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let player;
let map;
let layer;

function preload() {
  game.load.spritesheet('sprite', 'sprite/walkleft/0.png', 32, 34);
  game.load.tilemap('map', 'map/rpg.csv');
  game.load.image('tileset', 'map/bckground.png');

}

function create() {
  this.state.start('level1');
  layer.resizeWorld();
}

function update() {

}
