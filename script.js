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
class Sprite{
  constructor(x,y,d){
    this.x = 20
    this.y = 450
    this.d = 40
  }
  display(){
    ellipse(this.x, this.y, this.d)
  }
  
}
let obstacles, newObs, bg, sprite;
function setup() {
  createCanvas(500, 500);
  bg = loadImage("https://cdn.glitch.com/adc8477f-4903-4d87-8f47-16db8bf53b37%2FClassroom-Management-for-an-Effective-Learning-Environment-scaled.jpeg?v=1627925115657")
  obstacle = new Obstacle();
  sprite = new Sprite()

  //   obstacle = [];

  //   for (let i = 0; i < 4; i++) {
  //     obstacles.push(new Obstacle());
  //   }
}
function draw() {
  background(bg);
  // for (let obstacle of obstacles) {
  //   // const dot = dots[i];
  obstacle.move();
  if (obstacle.x < 0) {
        this.y = random(400, 470);

    obstacle.x = random(200,500)
    obstacle.w = random(30, 60);
   obstacle.h = random(100, 200);
  }
  sprite.display()
  
}
