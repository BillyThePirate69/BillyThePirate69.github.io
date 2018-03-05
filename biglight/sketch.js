let boxSize;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noCursor()

}

 function draw(){
   background(0);
   displayDots();
 }

 function displayDots(){
   let pointSpacing = 50;
   for(let x = pointSpacing; x < width; x += pointSpacing){
     for(let y = pointSpacing; y < height; y += pointSpacing){
       fill(255);
       ellipse(x, y, 4, 4);
       stroke(255, 60);
       line(x, y, mouseX, mouseY);
     }
   }
 }
