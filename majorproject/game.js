let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

game.state.add('menu', menu);
game.state.add('sketch', sketch);

game.state.start('menu');
