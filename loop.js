let emoji2 = '🦠';
let emoji3 = '🌡';
let emoji4 = '💊';
// var words = ["💊", "💊", "💊", "💊"];

function setup(){
  createCanvas (windowWidth, windowHeight);
  noStroke();
  imageMode(CENTER);
  background(0);
  textAlign(CENTER);
}


function draw (){
  for(let i=0; i < 5; i++){
    posX = random(windowWidth);
    posY = random(windowHeight);

    frameRate (100);
    textSize(50);
    text(emoji2, posX, posY);
}



for(let i=0; i < 5; i++){
      posX = random(windowWidth);
      posY = random(windowHeight);

      frameRate (20);
      textSize(50);
      text(emoji3, posX, posY);

}

for(let i=0; i < 5; i++){
      posX = random(windowWidth);
      posY = random(windowHeight);

      frameRate (10);
      textSize(40);
      text(emoji4, posX, posY);

}
}

function mousePressed() {
  background(random (0,225), random(0,255), random (0,255));
  textSize(200);
  text('😷', mouseX, mouseY);

}

// fill(random(255), random(255), random(255));
      // ellipse (posX, posY,70,70);

      // textSize(50);
      // text(emoji, posX, posY, 100,100);

      // image(sample, random (windowWidth), random(windowHeight), 50, 80);
      // frameRate (10);
      // textSize (40);
      // text(words, posX, posY);

    // textSize(50);
    // text(emoji3, posX, posY);
    //
    // textSize(40);
    // text(emoji4, posX+40, posY+40);
