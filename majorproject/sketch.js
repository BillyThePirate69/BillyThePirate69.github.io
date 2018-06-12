let game = new Phaser.Game(480, 360, Phaser.AUTO, '', { preload: preload, create: create, update: update  });
let map;
let layer;
let self = this;
let player = {
  xDest: null,
  yDest: null
}


function preload() {
  game.load.spritesheet('enemy', 'sprite/goblin/0.png', 20, 51);
  game.load.spritesheet('sprite', 'sprite/walkleft/0.png', 34, 34);
  game.load.image('tileset', 'map/maptile.png');
  game.load.tilemap('map', 'map/collision.json', null, Phaser.Tilemap.TILED_JSON);

}

function create() {
  //map
  map = this.game.add.tilemap('map');
  this.layer = map.createLayer('grass');
  this.house = map.createLayer('house');
  map.addTilesetImage('maptile', 'tileset');
  //this.world.setBounds(0, 0, );

  //sprite goblin
  this.enemy = this.game.add.sprite(120, 120, 'enemy');
  game.add.existing(this.enemy);
  game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
  this.enemy.anchor.set(0.5, 0.5);
  this.enemy.scale.setTo(0.8, 0.8);

  //player class
  // self.player = new Player(150, 100);
  game.camera.x = 300;
  game.camera.y = 200;
  game.add.existing(self.player);
  game.physics.enable(self.player, Phaser.Physics.ARCADE);

  //this.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN, 1, 1);

  game.input.activePointer.capture = true;
}

function update(){
  if(game.input.activePointer.isDown){
    player.setDest(game.input.x - game.world.worldPosition.x, game.input.y - game.world.worldPosition.y);
  }
}

function movePlayer(self){
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

class Player{
  constructor(x, y){
    let player = game.add.sprite(x, y, 'sprite');
    player.speed = 80;
    player.xDest = x;
    player.yDest = y;
    player.scale.setTo(2, 2);
    player.anchor.set(0.5, 0.5);
    player.animations.add('idle', [0], 2, true);
    player.animations.add('left', [1, 2, 3], 2, false);
  }
  setDest(x, y){
    player.xDest = x;
    player.yDest = y;
  }
  update(){
    movePlayer(self);
    game.camera.x = self.player.x - 150;
    game.camera.y = self.player.y - 100;
  }
  stop(){

  }
};
