let gameScene = new Phaser.Scene('Game');

var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
let game = new Phaser.Game(config);

function preload(){
  this.load.atlas('background', 'images/rpg.png', 'images/rpg.json');
  //left
  this.load.spritesheet('Left', 'sprite/walkleft/0.png', { frameWidth: 34, frameHeight: 34 }
  );

}

function create(){
  let background = this.add.sprite(50, 50, 'background', 'rpg.png');
  this.add.sprite(130, 130, 'Left');
  this.anims.create({
      key: 'moveLeft',
      frames: this.anims.generateFrameNumbers('Left', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });
}

function update(){
//  if (this.cursors.left.isDown){
  //  player.setVelocityX(-160);
//    player.anims.play('left', true)
//  }
}
