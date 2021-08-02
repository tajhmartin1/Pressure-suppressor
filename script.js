class Obstacle {
  constructor(x, y, w, h) {
    this.x = 100;
    this.y = 400;
    this.w = random(30,60);
    this.h = random(100, 200);
    this.speed = 2;
  }
  move() {
    this.x -= this.speed;
    rect(this.x, this.y, this.w, this.h);
  }
  createNew(){
    
  }
}
let backgroundColor, obstacles, newObs;
function setup() {
  createCanvas(500, 500);
   obstacle = new Obstacle()
//   obstacle = [];

//   for (let i = 0; i < 4; i++) {
//     obstacles.push(new Obstacle());
//   }
}
function draw() {
  background(200);
  // for (let obstacle of obstacles) {
  //   // const dot = dots[i];
    obstacle.move();
  if(obstacle.x < 0){
    newObs = new Obstacle()
  }
}
