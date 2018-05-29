function Game.Level1(game){};

let map;
let layer;

Game.Level1.prototype = {
  function create(){
    this.stage.backgroundColor = '#3A5963';
    map = this.add.tilemap('map', 64, 64);
    map.addTilesetImage('tileset');
    layer = map.createLayer(0);
    layer.resizeWorld();
  },
  function update(){

  },
}
