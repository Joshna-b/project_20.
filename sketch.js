var car,wall;
var speed,weight;
var R;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,700);
  weight1 = random(800,1000);
  weight2 = random(1100,1300);
  weight3 = random(1350,1550);
  car1 = createSprite(50,50,50,50)
  car2 = createSprite(50,150,50,50)
  car3 = createSprite(50,250,50,50)
  car = createSprite(50,350,50,50)
  wall = createSprite(1550,200,60,400);
  wall.shapeColor=color("violet");
}

function draw() {
  background("lavender");
  
  car.velocityX = speed;
  car.depth = wall.depth+1;
  car1.velocityX = speed;
  car1.depth = wall.depth+1;
  car2.velocityX = speed;
  car2.depth = wall.depth+1;
  car3.velocityX = speed;
  car3.depth = wall.depth+1;
  R= Math.round(random(1,4));
  if  (R===1){if (wall.x-car.x<wall.width+car.width/2) {
    R= Math.round(random(1,4));
    car3.velocityX = 0;
      car2.velocityX = 0;
      car.velocityX = 0;
      car1.velocityX = 0;
    var deformation=0.5*weight*speed*speed/22500;
    if (deformation>180) {
      car.shapeColor=color("red");
    }
    if(deformation<180 && deformation>100) {
      car.shapeColor= color("yellow")
    }
    if (deformation<100){
      car.shapeColor= color("green")
    }
  }}
  else if(R===2){
    R= Math.round(random(1,4));
    if (wall.x-car1.x<wall.width+car1.width/2) {
      car3.velocityX = 0;
      car2.velocityX = 0;
      car.velocityX = 0;
      car1.velocityX = 0;
      var deformation=0.5*weight1*speed*speed/22500;
      if (deformation>180) {
        car1.shapeColor=color("red");
      }
      if(deformation<180 && deformation>100) {
        car1.shapeColor= color("yellow")
      }
      if (deformation<100){
        car1.shapeColor= color("green")
      }}
  }
  else if(R ===3){
    R= Math.round(random(1,4));
    if (wall.x-car2.x<wall.width+car2.width/2) {

      car3.velocityX = 0;
      car2.velocityX = 0;
      car.velocityX = 0;
      car1.velocityX = 0;
      var deformation=0.5*weight2*speed*speed/22500;
      if (deformation>180) {
        car2.shapeColor=color("red");
      }
      if(deformation<180 && deformation>100) {
        car2.shapeColor= color("yellow")
      }
      if (deformation<100){
        car2.shapeColor= color("green")
      }}
  }else if (R ===4){
    R= Math.round(random(1,4));
    if (wall.x-car3.x<wall.width+car3.width/2) {
      car3.velocityX = 0;
      car2.velocityX = 0;
      car.velocityX = 0;
      car1.velocityX = 0;
      var deformation=0.5*weight3*speed*speed/22500;
      if (deformation>180) {
        car3.shapeColor=color("red");
      }
      if(deformation<180 && deformation>100) {
        car3.shapeColor= color("yellow")
      }
      if (deformation<100){
        car3.shapeColor= color("green")
      }}
  }
  
  drawSprites();
}