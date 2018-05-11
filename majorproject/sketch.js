let sprites;
let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
  game.load.spriteSheet('test', 'Test/xd.png', 100, 100);
}
function create(){
  sprites = this.game.add.sprite(10, 30, 'test');
  sprites.frame = 3;
}
function update(){
  if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
    sprite.x -=4;
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    sprite.x +=4;
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
    sprite.y -=4;
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
    sprite.y +=4;
  }
}
