let player, bottom, obstacle, bg, hit, hits, rightSide, leftSide, vol;
var song, mic, background;

let gravity = 0.09;
let yHop = -10;
let xHop = 5
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
  }
}
function setup() {
  createCanvas(500, 500);
  player = createSprite(30, 450, 50, 50);
  player.shapeColor = 0;
  hits = 0;
   mic = new p5.AudioIn();
  mic.start();
  player.friction = 0.01;
  player.maxSpeed = 2;
  obstacle = new Obstacle();
  bg = loadImage(
    "https://cdn.glitch.com/7d4765b5-4f33-4283-ab4e-70b1f56ec781%2FClassroom-Management-for-an-Effective-Learning-Environment-scaled.jpeg?v=1628013020137"
  );
  bottom = createSprite(width / 2, height + 5, width, 10);
  bottom.immovable = true;
  rightSide = createSprite(width, height, 0, height);
  rightSide.immovable = true;
  
   leftSide = createSprite(0, height, 0, height);
  leftSide.immovable = true;

}

function draw() {
  background(bg);
  // for (let obstacle of obstacles) {
  //   // const dot = dots[i];
  obstacle.move();
  if (obstacle.x < 0) {
    obstacle.x = 500;
    obstacle.w = random(30, 60);
    obstacle.h = random(100, 200);
  }
  player.collide(bottom);
  player.collide(rightSide);
    player.collide(leftSide);

 

  player.velocity.y += gravity;
  drawSprites();
  checkCollisions();
  text(`Hits: ${hits}`, 20, 20);
  if (player.x > width) {
    player.velocity.x = 40;
  }
  moveSprite()
}

function moveSprite() {
      var vol = mic.getLevel()*1000 ;
  console.log(vol*1000);
  if (vol > 50) {
    // optional spacebar jump
    jump(player);
    
  } 
  
  //else if (keyCode === 40) {
  //   //down
  //   move(player, 2, 90);
  // } else if (keyCode === 38) {
  //   // up/jump
  //   move(player, 2, 270);
  // } else if (keyCode === 39) {
  //   //right
  //   move(player, 2, 0);
  // } else if (keyCode === 37) {
  //   //left
  //   move(player, 2, 180);
  // }
}

function jump(sprite) {
  sprite.velocity.y = yHop;
     // move(player, 2, 0);
    sprite.velocity.x = xHop;

if(sprite.collide(leftSide)){
     sprite.velocity.y = yHop;
     // move(player, 2, 0);
    sprite.velocity.x = -xHop;
  }
}

function move(sprite, speed, direction) {
  sprite.setSpeed(speed, direction);
}
function collide() {}

function checkCollisions() {
  hit = collideRectRect(
    obstacle.x,
    obstacle.y,
    obstacle.w,
    obstacle.h,
    30,
    450,
    50,
    50
  );
  console.log(hit);
  if (hit) {
    hits += 1;
  }
}



// function preload() {
//   song = loadSound();
// }




