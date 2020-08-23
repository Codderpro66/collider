var fixrect,movingrect;


function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(600,400,50,80);
  movingrect = createSprite(400,200,80,20);
  movingrect.debug = true;
  fixrect.debug = true;
}

function draw() {
  background(0);  
  drawSprites();
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if (movingrect.x - fixrect.x < movingrect.width/2 + fixrect.width/2 && 
    fixrect.x - movingrect.x < movingrect.width/2 + fixrect.width/2 && 
    movingrect.y - fixrect.y < movingrect.height/2 + fixrect.height/2 &&
    fixrect.y - movingrect.y < movingrect.height/2 + fixrect.height/2) {
    
    movingrect.shapeColor = "red";
    fixrect.shapeColor = "red";
  }
  else {
    movingrect.shapeColor = "green";
    fixrect.shapeColor = "green";
  }
}