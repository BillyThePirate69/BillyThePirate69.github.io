let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let player;
let map;
let layer;


function preload() {
  game.load.spritesheet('sprite', 'sprite/walkleft/0.png', 32, 34);
  game.load.image('tileset', 'map/tileset.png');
  game.load.tilemap('map', 'map/rpg.json', null, Phaser.Tilemap.TILED_JSON);

}

function create() {
  map = this.game.add.tilemap('map');
  map.addTilesetImage('tileset', 'tileset');

}

function update() {
}
