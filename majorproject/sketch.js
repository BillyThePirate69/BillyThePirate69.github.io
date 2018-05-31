let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let player;
let map;
let layer;
let controls = {};
let x;
let y;





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
  player = this.game.add.sprite(486, 384, 'sprite');
  player.scale.setTo(2, 2);
  player.frame = 0;
  player.animations.add('left', [0], 2, true);
  player.animations.add('left', [1, 2, 3], 2, false);


}

function update() {
  let k = this.input.keyboard;
  if(k.isDown(37)){
    player.x -= 2;
    player.animations.play('left');
  }
  else if(k.isDown(39)){
    player.x += 2;
  }
  else if(k.isDown(38)){
    player.y -= 2;
  }
  else if(k.isDown(40)){
    player.y += 2;
  }
}
