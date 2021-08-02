class Obstacle{
  constructor(x,y,w,h){
    this.x = 100
    this.y = 400
    this.w = 30
    this.h = 100
    this.speed = 10
    
  }
  move(){
    this.y -= this.speed
    rect(this.x)
    
}
  
}
let backgroundColor
function setup(){
    createCanvas(500, 500);

  
}
function draw(){
    background(200);

}