let game = new Phaser.Game(480, 360, Phaser.AUTO, '', { preload: preload, create: create, update: update  });
let map;
let layer;
let playerSprite;
let goblinSprite;


function preload() {
  game.load.spritesheet('enemy', 'sprite/goblin/0.png', 20, 51);
  game.load.spritesheet('sprite', 'sprite/walkleft/0.png', 34, 34);
  game.load.image('tileset', 'map/maptile.png');
  game.load.tilemap('map', 'map/collisions.json', null, Phaser.Tilemap.TILED_JSON);

}

function create() {
  //map
  map = this.game.add.tilemap('map');
  this.layer = map.createLayer('ground');
  this.house = map.createLayer('object');
  map.addTilesetImage('maptile', 'tileset');
  game.world.setBounds(0, 0, 1280, 1280);
  //map.setCollision([108, 109, 110, 111, 131, 132, 133, 134, 85, 86, 87, 88, 200, 226, 270, 201]);

  //sprite goblin
  // goblinSprite = new Enemy();
  // this.goblin = game.add.group();
  // this.goblin.add(Enemy(200, 300));
  // this.goblin.add(Enemy(400, 100));
  // this.goblin.forEach(function(enemy, index){
  //   game.physics.enable(enemy, Phaser.Physics.ARCADE);
  //   enemy.body.immovable = true;
  // });


  //player class
  playerSprite = new Player(300, 200);
  this.game.camera.x = 600;
  this.game.camera.y = 400;
  //this.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN, 1, 1);

  game.input.activePointer.capture = true;
}

function update(){
  if(game.input.activePointer.isDown){
    playerSprite.setDest(game.input.x - game.world.worldPosition.x, game.input.y - game.world.worldPosition.y);
  }
  playerSprite.update();
}

class Player{
  constructor(x, y){
    this.player = game.add.sprite(x, y, 'sprite');
    this.player.speed = 80;
    this.player.xDest = x;
    this.player.yDest = y;
    this.player.scale.setTo(2, 2);
    this.player.anchor.set(0.5, 0.5);
    this.player.animations.add('idle', [0], 2, true);
    this.player.animations.add('left', [1, 2, 3], 2, false);
    game.physics.enable(this.player, Phaser.Physics.ARCADE);
    game.add.existing(this.player);
  }
  setDest(x, y){
    this.update();
    this.player.xDest = x;
    this.player.yDest = y;
  }
  update(){
    if (Math.floor(this.player.x / 10) == Math.floor(this.player.xDest / 10)) {
      this.player.body.velocity.x = 0;
    }
    else if (Math.floor(this.player.x) < Math.floor(this.player.xDest)) {
      this.player.body.velocity.x = 80;
      this.player.animations.play('left');
      this.player.scale.setTo(-2, 2);
    }
    else if (Math.floor(this.player.x) > Math.floor(this.player.xDest)) {
      this.player.body.velocity.x = -80;
      this.player.animations.play('left');
      this.player.scale.setTo(2, 2);
    }
    if (Math.floor(this.player.y / 10) === Math.floor(this.player.yDest / 10)) {
      this.player.body.velocity.y = 0;
    }
    else if (Math.floor(this.player.y) < Math.floor(this.player.yDest)) {
      this.player.body.velocity.y = 80;
    }
    else if (Math.floor(this.player.y) > Math.floor(this.player.yDest)) {
      this.player.body.velocity.y = -80;
    }
    game.camera.x = this.player.x - 300;
    game.camera.y = this.player.y - 200;
  }
  stopPlayer(){
    this.player.xDest = this.player.x;
    this.player.yDest = this.player.y;
    this.player.body.velocity.x = this.player.body.velocity.y = 0;
  }
}

class Enemy{
  constructor(x, y){
    let enemy = game.add.sprite(x, y, 'enemy');
    enemy.state = 'patrol';
    enemy.xDest = x;
    enemy.yDest = y;
    enemy.direction = 1;
    enemy.anchor.set(0.5, 0.5);
    enemy.scale.setTo(0.8, 0.8);
    enemy.animations.add('idle', [3], 2, true);
    enemy.animations.add('move', [0, 1, 2, 3, 4, 5], 2, true);
    game.add.existing(enemy);
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
  }
  move(x, y){
    enemy.xDest = x;
    enemy.yDest = y;
  }
  states(){
    switch(this.state){
      case 'patrol':
        enemy.speed = 60;
        enemy.patrol();
        break;
      case 'spot':
        enemy.speed = 0;
        enemy.stop();
        break;
    }
    this.move();
  }
  update(){
    if (Math.floor(enemy.x / 10) == Math.floor(enemy.xDest / 10)) {
      enemy.body.velocity.x = 0;
    }
    else if (Math.floor(enemy.x) < Math.floor(enemy.xDest)) {
      enemy.body.velocity.x = 80;
      enemy.animations.play('left');
      enemy.scale.setTo(-2, 2);
    }
    else if (Math.floor(enemy.x) > Math.floor(enemy.xDest)) {
      enemy.body.velocity.x = -80;
      enemy.animations.play('left');
      enemy.scale.setTo(2, 2);
    }
    if (Math.floor(enemy.y / 10) === Math.floor(enemy.yDest / 10)) {
      enemy.body.velocity.y = 0;
    }
    else if (Math.floor(enemy.y) < Math.floor(enemy.yDest)) {
      enemy.body.velocity.y = 80;
    }
    else if (Math.floor(enemy.y) > Math.floor(enemy.yDest)) {
      enemy.body.velocity.y = -80;
    }
  }
  stop(x, y){
    enemy.xDest = x;
    enemy.yDest = y;
  }
  patrol(){
    if(Math.floor(enemy.x / 10) == Math.floor(enemy.xDest / 10)){
      enemy.direction = enemy.direction * -1;
      this.move(enemy.x + enemy.direction * 100);
    }
  }
}
