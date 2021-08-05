let player, bottom, obstacle, bg, hit, rightSide, leftSide, vol;
let topOfCanvas, gif;
var song, mic, background;

let gravity = 0.05;
let yHop = -5;
let xHop = 1;
let bgx = 0;
let bgy = 220;
let bgw = 4000;
let bgh = 400;
let bgaccX = 1;
let bgaccY = 1;
let time = 30;
let backgroundImage;

class Obstacle {
  constructor(x, y, w, h) {
    this.x = 400;
    this.y = random(400, 470);
    this.w = random(30, 60);
    this.h = random(100, 200);
    this.speed = 4;
    this.image2 = loadImage(
      "https://cdn.glitch.com/adc8477f-4903-4d87-8f47-16db8bf53b37%2Fadc8477f-4903-4d87-8f47-16db8bf53b37_New%20Piskel-2.png%20(2).png?v=1628102020705"
    );
    this.image = loadImage(
      "https://cdn.glitch.com/adc8477f-4903-4d87-8f47-16db8bf53b37%2Fadc8477f-4903-4d87-8f47-16db8bf53b37_New%20Piskel-1.png%20(4).png?v=1628102252590"
    );
  }
  move() {
    this.x -= this.speed;
    image(this.image, this.x, 350, 200, 100);
    image(this.image2, this.x + 250, 400, 150, 90);
  }
}
function preload() {
  gif = loadImage(
    "https://cdn.glitch.com/adc8477f-4903-4d87-8f47-16db8bf53b37%2FNew%20Piskel%20(1).gif?v=1628100776541"
  );
}

function setup() {
  createCanvas(500, 500);
  player = createSprite(80, 450, 100, 100);
  player.shapeColor = 0;
  hits = 0;
  mic = new p5.AudioIn();
  mic.start();
  player.friction = 0.01;
  player.maxSpeed = 2;
  obstacle = new Obstacle();

  backgroundImage = loadImage(
    "https://cdn.glitch.com/adc8477f-4903-4d87-8f47-16db8bf53b37%2FNew%20Piskel-1.png%20(2).png?v=1628100564369"
  );

  bg = loadImage(
    "https://cdn.glitch.com/7d4765b5-4f33-4283-ab4e-70b1f56ec781%2FClassroom-Management-for-an-Effective-Learning-Environment-scaled.jpeg?v=1628013020137"
  );

  bottom = createSprite(width / 2, height + 5, width, 10);
  bottom.immovable = true;
  rightSide = createSprite(width, height, 0, height);
  rightSide.immovable = true;

  leftSide = createSprite(0, height, 0, height);
  leftSide.immovable = true;

  topOfCanvas = createSprite(0, 0, 0, 0);
  topOfCanvas.immovable = true;
}

function draw() {
  background(180, 210, 255);
    gif.resize(100, 100);

  player.addImage("image", gif);
  bgx = bgx - bgaccX;
  image(backgroundImage, bgx, bgy, bgw, bgh);

  textSize(20);
  text(round(time), 2, 60);
  // thanks
  if (time > 0) {
    time -= 0.01;
  }

  // image(gif, 40, 400 , 100, 100);

  //for (let obstacle of obstacles) {
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
  player.collide(topOfCanvas);

  player.velocity.y += gravity;
  drawSprites();
  text(`Hits: ${hits}`, 20, 20);
  if (player.x > width) {
    player.velocity.x = 40;
  }
  moveSprite();
}

function moveSprite() {
  var vol = mic.getLevel() * 1000;
//console.log(vol);
  if (vol > 10) {
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
  sprite.velocity.y += yHop;
  //move(player, 2, 0);
//  sprite.velocity.x = xHop;
  console.log(sprite.velocity.y)
    console.log(sprite.velocity.x)


//   if (sprite.collide(rightSide)) {
//     // sprite.velocity.y = -yHop;
//     // move(player, 2, 0);
//     sprite.velocity.x = -xHop;
//   }
}

function move(sprite, speed, direction) {
  sprite.setSpeed(speed, direction);
}
// function collide() {}
// t