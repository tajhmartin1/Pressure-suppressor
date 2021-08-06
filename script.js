let player, bottom, obstacle, bg, hit, rightSide, leftSide, vol, book, stack;
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
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = 4;
    this.img = loadImage(img);
  }
  move() {
    this.x -= this.speed;
    image(this.img, this.x, this.y, this.w, this.h);
  }
}
function preload() {
  gif = loadImage(
    "https://cdn.glitch.com/adc8477f-4903-4d87-8f47-16db8bf53b37%2FNew%20Piskel%20(1).gif?v=1628100776541"
  );
  song = loadSound(
    "https://cdn.glitch.com/9932e439-9de3-453d-989b-f4f396c9a943%2FMetre%20-%20Locus.mp3?v=1628099978842"
  );
  song.setVolume(0.09);
}

function setup() {
  createCanvas(500, 500);
  player = createSprite(80, 400, 150, 150);
  player.shapeColor = 0;
  song.play();
  book =
    "https://cdn.glitch.com/adc8477f-4903-4d87-8f47-16db8bf53b37%2Fadc8477f-4903-4d87-8f47-16db8bf53b37_New%20Piskel-1.png%20(4).png?v=1628102252590";
stack = "https://cdn.glitch.com/adc8477f-4903-4d87-8f47-16db8bf53b37%2Fadc8477f-4903-4d87-8f47-16db8bf53b37_New%20Piskel-2.png%20(2).png?v=1628102020705"
  mic = new p5.AudioIn();
  mic.start();
  player.friction = 0.01;
  player.maxSpeed = 2;
  obstacle = new Obstacle(400, 320, 200, 100, book);
  obstacle2 = new Obstacle(800, 320, 200, 100, stack);

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
  gif.resize(150, 150);

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
    obstacle2.move();

  if (obstacle.x < -200) {
    obstacle.x = 500;
    // obstacle.w = random(30, 60);
    // obstacle.h = random(100, 200);
  }
  
  if (obstacle2.x < -100) {
    obstacle2.x = 500;
    // obstacle.w = random(30, 60);
    // obstacle.h = random(100, 200);
  }
  player.collide(bottom);
  player.collide(rightSide);
  player.collide(leftSide);
  player.collide(topOfCanvas);

  player.velocity.y += gravity;
  drawSprites();
  if (player.x > width) {
    player.velocity.x = 40;
  }
  moveSprite();
}

function moveSprite() {
  var vol = mic.getLevel() * 1000;
  //console.log(vol);
  if (vol > 40) {
    // optional spacebar jump
    jump(player);
  }
}

function jump(sprite) {
  sprite.velocity.y += yHop;
  //move(player, 2, 0);
  //  sprite.velocity.x = xHop;
  console.log(sprite.velocity.y);
  console.log(sprite.velocity.x);
}

function move(sprite, speed, direction) {
  sprite.setSpeed(speed, direction);
}
// function collide() {}
// t
