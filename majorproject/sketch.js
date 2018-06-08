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
let enemy = {
}


function preload() {
  game.load.spritesheet('enemy', 'sprite/goblin/0.png', 20, 51);
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

  //sprite goblin
  self.enemy = this.game.add.sprite(120, 120, 'enemy');
  game.add.existing(self.enemy);
  game.physics.enable(self.enemy, Phaser.Physics.ARCADE);
  self.enemy.anchor.set(0.5, 0.5);
  self.enemy.scale.setTo(0.8, 0.8);

  // sprite player
  self.player = this.game.add.sprite(240, 180, 'sprite');
  game.add.existing(self.player);
  game.physics.enable(self.player, Phaser.Physics.ARCADE);
  game.camera.x = 120;
  game.camera.y = 100;
  self.player.scale.setTo(2, 2);
  self.player.anchor.set(0.5, 0.5);
  self.player.animations.add('idle', [0], 2, true);
  self.player.animations.add('left', [1, 2, 3], 2, false);

  // player class

  // capture
  game.input.activePointer.capture = true;


}

function update() {
  if(game.input.activePointer.isDown){
    self.player.xDest = game.input.x;
    self.player.yDest = game.input.y;
  }
  self.movePlayer(game.input.x, game.input.y);
}

function movePlayer(){
  if (Math.floor(self.player.x / 10) == Math.floor(self.player.xDest / 10)) {
    self.player.body.velocity.x = 0;
  } else if (Math.floor(self.player.x) < Math.floor(self.player.xDest)) {
    self.player.body.velocity.x = 80;
    self.player.animations.play('left');
    self.player.scale.setTo(-2, 2);
  } else if (Math.floor(self.player.x) > Math.floor(self.player.xDest)) {
    self.player.body.velocity.x = -80;
    self.player.animations.play('left');
    self.player.scale.setTo(2, 2);
  }
  if (Math.floor(self.player.y / 10) === Math.floor(self.player.yDest / 10)) {
    self.player.body.velocity.y = 0;
  } else if (Math.floor(self.player.y) < Math.floor(self.player.yDest)) {
    self.player.body.velocity.y = 80;
  } else if (Math.floor(self.player.y) > Math.floor(self.player.yDest)) {
    self.player.body.velocity.y = -80;
  }
}

function stopPlayer(){
  self.player.xDest = self.player.x;
  self.player.yDest = self.player.y;
  self.player.body.velocity.x = self.player.body.velocity.y = 0;
}


player.update = function(){
  game.camera.x = self.player.x - 150;
  game.camera.y = self.player.y - 100;
}
