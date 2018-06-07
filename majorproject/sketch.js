let game = new Phaser.Game(480, 360, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let map;
let layer;
let self = this;
let x;
let y;
let player = {
  xDest: null,
  yDest: null
}
let speed;


function preload() {
  game.load.spritesheet('sprite', 'sprite/walkleft/0.png', 34, 34);
  game.load.image('tileset', 'map/maptile.png');
  game.load.tilemap('map', 'map/house.json', null, Phaser.Tilemap.TILED_JSON);

}

function create() {
  //map
  map = this.game.add.tilemap('map');
  this.layer = map.createLayer('grass');
  this.house = map.createLayer('house');
  map.addTilesetImage('maptile', 'tileset');
  game.world.setBounds(0, 0, 480, 360);

  // sprite
  self.player = this.game.add.sprite(240, 180, 'sprite');
  game.add.existing(self.player);
  game.physics.enable(self.player, Phaser.Physics.ARCADE);
  game.camera.x = 480;
  game.camera.y = 360;
  self.player.scale.setTo(2, 2);
  self.player.anchor.set(0.5, 0.5);
  self.player.frame = 0;
  self.player.animations.add('idle', [0], 2, true);
  self.player.animations.add('left', [1, 2, 3], 2, false);
  // capture
  game.input.activePointer.capture = true;


}

function update() {
//  let k = this.input.keyboard;
//  if(k.isDown(37)){
//    self.player.x -= 2;
//    self.player.animations.play('left');
//      self.player.scale.setTo(2, 2);
//  }
//  else if(k.isDown(39)){
//    self.player.x += 2;
//    self.player.scale.setTo(-2, 2);
//    self.player.animations.play('left');
//  }
//  else if(k.isDown(38)){
//    self.player.y -= 2;
//  }
//  else if(k.isDown(40)){
//    self.player.y += 2;
//  }
  // mouse/touchscreen input
  self.player.animations.play('idle');
  if(game.input.activePointer.isDown){
    self.player.xDest = game.input.x;
    self.player.yDest = game.input.y;
  }
  self.movePlayer(game.input.x, game.input.y);
}

function movePlayer(){
  if (Math.floor(self.x / 10) == Math.floor(self.xDest / 10)) {
    self.body.velocity.x = 0;
  } else if (Math.floor(self.x) < Math.floor(self.xDest)) {
    self.body.velocity.x = 80;
    self.player.scale.setTo(-2, 2);
  } else if (Math.floor(self.x) > Math.floor(self.xDest)) {
    self.body.velocity.x = -80;
    self.player.scale.setTo(2, 2);
  }
  if (Math.floor(self.y / 10) === Math.floor(self.yDest / 10)) {
    self.body.velocity.y = 0;
  } else if (Math.floor(self.y) < Math.floor(self.yDest)) {
    self.body.velocity.y = 80;
  } else if (Math.floor(self.y) > Math.floor(self.yDest)) {
    self.body.velocity.y = -80;
  }
}

player.update = function(){
  game.camera.x = self.player.x - 150;
  game.camera.y = self.player.y - 100;
}
