let player, bottom, obstacle, bg ,hit, hits
let gravity = 0.09
let hop = -10;
class Obstacle {
  constructor(x, y, w, h) {
    this.x = 400;
    this.y = random(400, 470);
    this.w = random(30, 60);
    this.h = random(100, 200);
    this.speed = 4;
  }
  move() {
    this.x -= this.speed;
    rect(this.x, this.y, this.w, this.h);
    console.log(this.x)
    // rect(this.x+250, this.y, this.w, this.h);
  }
  // createNew() {
  //   this.x = 400;
  //   this.y = 400;
  //   this.w = random(30, 60);
  //   this.h = random(100, 200);
  //   rect(this.x, this.y, this.w, this.h);
  //   this.x -= this.speed;
  //   // rect(this.x, this.y, this.w, this.h);
  // }
}
function setup() {
  createCanvas(500, 500);
  player = createSprite(30,450, 50, 50);
  player.shapeColor = 0;
  hits = 0
  player.friction = 0.01;
  player.maxSpeed = 2;
  obstacle = new Obstacle();
  bg = loadImage("https://cdn.glitch.com/7d4765b5-4f33-4283-ab4e-70b1f56ec781%2FClassroom-Management-for-an-Effective-Learning-Environment-scaled.jpeg?v=1628013020137"
  );
  bottom = createSprite(width / 2, height + 5, width, 10);
  bottom.immovable = true;
}

function draw() {
  background(bg);  
  // for (let obstacle of obstacles) {
  //   // const dot = dots[i];
  obstacle.move();
  if (obstacle.x < 0) {
    this.y = random(400, 470);

    obstacle.x = 500;
    obstacle.w = random(30, 60);
    obstacle.h = random(100, 200);
  }
  player.collide(bottom);
  player.velocity.y += gravity;
  drawSprites();
  text(`Hits: ${hits}`, 20,20)
}


function keyPressed() {
  if (keyCode === 32) { // optional spacebar jump
    jump(player);
  } else if (keyCode === 40) { //down
    move(player, 2, 90);
  } else if (keyCode === 38) { // up/jump
    move(player, 2, 270);
  } else if (keyCode === 39) { //right
    move(player, 2, 0);
  } else if (keyCode === 37) { //left
    move(player, 2, 180);
  }
}

function jump(sprite) {
  sprite.velocity.y = hop;
}

function move(sprite, speed, direction) {
  sprite.setSpeed(speed, direction)
}   
function collide(){
  
}

function checkCollisions() {
  hit = collideRectRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h, player.x, player.y, 50,50);
  console.log(hit)
  if (hit ) {
    hits+=1
    
  }
 
  
}