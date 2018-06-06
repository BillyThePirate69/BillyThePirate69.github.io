let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let player;
let map;
let layer;
let x;
let y;
let playerState = {
  player: {
    xDest: null,
    yDest: null
  },
  npc: {

  }
}
function movePlayer(){
  if (Math.floor(this.x / 10) == Math.floor(this.xDest / 10)) {
    this.body.velocity.x = 0;
  } else if (Math.floor(this.x) < Math.floor(this.xDest)) {
    this.body.velocity.x = this.speed;
    this.scale.x = -1;
  } else if (Math.floor(this.x) > Math.floor(this.xDest)) {
    this.body.velocity.x = -this.speed;
    this.scale.x = 1;
  }
  if (Math.floor(this.y / 10) === Math.floor(this.yDest / 10)) {
    this.body.velocity.y = 0;
  } else if (Math.floor(this.y) < Math.floor(this.yDest)) {
    this.body.velocity.y = this.speed;
  } else if (Math.floor(this.y) > Math.floor(this.yDest)) {
    this.body.velocity.y = -this.speed;
  }
}

function preload() {
  game.load.spritesheet('sprite', 'sprite/walkleft/0.png', 34, 34);
  game.load.image('tileset', 'map/maptile.png');
  game.load.tilemap('map', 'map/house.json', null, Phaser.Tilemap.TILED_JSON);

}

function create() {
  //map
  map = this.game.add.tilemap('map');
  game.world.setBounds(0,0,500,500);
  this.layer = map.createLayer('grass');
  this.house = map.createLayer('house');
  map.addTilesetImage('maptile', 'tileset');

  // sprite
  this.player = this.game.add.sprite(game.world.centerX, game.world.centerY                                         , 'sprite');
  this.player.scale.setTo(2, 2);
  this.player.anchor.set(0.5, 0.5);
  this.player.frame = 0;
  this.player.animations.add('left', [0], 2, true);
  this.player.animations.add('left', [1, 2, 3], 2, false);
  this.physics.arcade.enable(this.player);
  // capture
  game.input.activePointer.capture = true;


}

function update() {
  let k = this.input.keyboard;
  this.physics.arcade.collide(this.player, this.house);
  if(k.isDown(37)){
    this.player.x -= 2;
    this.player.animations.play('left');
      this.player.scale.setTo(2, 2);
  }
  else if(k.isDown(39)){
    this.player.x += 2;
    this.player.scale.setTo(-2, 2);
    this.player.animations.play('left');
  }
  else if(k.isDown(38)){
    this.player.y -= 2;
  }
  else if(k.isDown(40)){
    this.player.y += 2;
  }
  // mouse/touchscreen input
  if(game.input.activePointer.isDown){
    this.player.xDest = game.input.x;
    this.player.yDest = game.input.y;
  }
  //this.movePlayer(game.input.x, game.input.y);
}
