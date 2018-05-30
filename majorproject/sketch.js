let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let player;
let map;
let layer;


function preload() {
  game.load.spritesheet('sprite', 'sprite/walkleft/0.png', 34, 34);
  game.load.image('tileset', 'map/maptile.png');
  game.load.tilemap('map', 'map/house.json', null, Phaser.Tilemap.TILED_JSON);

}

function create() {
  map = this.game.add.tilemap('map');
  layer = map.createLayer('grass');
  map.createLayer('house')
  map.addTilesetImage('maptile', 'tileset');
  // sprite
  player = this.game.add.sprite(300, 400, 'sprite');
  player.scale.setTo(2, 2);

}

function update() {
}
