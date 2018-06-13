let game = new Phaser.Game(480, 360, Phaser.AUTO, '', { preload: preload, create: create, update: update  });
let map;
let layer;
let playerSprite;



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
  playerSprite = new Player(300, 200);
  game.camera.x = 300;
  game.camera.y = 200;


  //this.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN, 1, 1);

  game.input.activePointer.capture = true;
}

function update(){
  if(game.input.activePointer.isDown){
    playerSprite.setDest(game.input.x - game.world.worldPosition.x, game.input.y - game.world.worldPosition.y);
  }
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
  };
  setDest(x, y){
    this.movePlayer();
    this.player.xDest = x;
    this.player.yDest = y;
  }
  update(){
    game.camera.x = this.player.x - 150;
    game.camera.y = this.player.y - 100;
  }
  stopPlayer(){
    this.player.xDest = this.player.x;
    this.player.yDest = this.player.y;
    this.player.body.velocity.x = this.player.body.velocity.y = 0;
  }

  movePlayer(){
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
  }
}
