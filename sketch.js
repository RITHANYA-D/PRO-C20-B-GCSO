var car1, wall1;
var car2, wall2;
var car3, wall3;
var car4, wall4;

var lane1;
var lane2;
var lane3;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed  = random(55,90);
  weight = random(400,1500);

  car1  = createSprite(50, 50, 30, 30);
  car1.shapeColor = "purple";

  car2  = createSprite(50, 150, 30, 30);
  car2.shapeColor = "purple";

  car3  = createSprite(50, 250, 30, 30);
  car3.shapeColor = "purple";

  car4  = createSprite(50, 350, 30, 30);
  car4.shapeColor = "purple";

  wall1 = createSprite(1300, 50, 20, 60);
  wall1.shapeColor = "grey";

  wall2 = createSprite(1300, 150, 20, 60);
  wall2.shapeColor = "grey";

  wall3 = createSprite(1300, 250, 20, 60);
  wall3.shapeColor = "grey";

  wall4 = createSprite(1300, 350, 20, 60);
  wall4.shapeColor = "grey";

  lane1 = createSprite(700, 90, 1600, 10);
  lane1.shapeColor = "white";

  lane2 = createSprite(700, 190, 1600, 10);
  lane2.shapeColor = "white";

  lane3 = createSprite(700, 290, 1600, 10);
  lane3.shapeColor = "white";

  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;
}

function draw() {
  background("black"); 
  
  if(wall1.x - car1.x < (car1.width + wall1.width/2) ) {

     car1.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed/22509;

     if (deformation > 180) {
         car1.shapeColor = "red";
     }

     if (deformation < 180 && deformation > 100) {
         car1.shapeColor = "yellow";
     }
  
    if (deformation < 100) {
        car1.shapeColor = "green";
    }

  }

  if(wall2.x - car2.x < (car2.width + wall2.width/2) ) {

    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if (deformation > 180) {
        car2.shapeColor = "red";
    }

    if (deformation < 180 && deformation > 100) {
        car2.shapeColor = "yellow";
    }
 
   if (deformation < 100) {
       car2.shapeColor = "green";
   }

 }

 if(wall3.x - car3.x < (car3.width + wall3.width/2) ) {

  car3.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;

  if (deformation > 180) {
      car3.shapeColor = "red";
  }

  if (deformation < 180 && deformation > 100) {
      car3.shapeColor = "yellow";
  }

 if (deformation < 100) {
     car3.shapeColor = "green";
 }

}

if(wall4.x - car4.x < (car4.width + wall4.width/2) ) {

  car4.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;

  if (deformation > 180) {
      car4.shapeColor = "red";
  }

  if (deformation < 180 && deformation > 100) {
      car4.shapeColor = "yellow";
  }

 if (deformation < 100) {
     car4.shapeColor = "green";
 }

}

if (deformation > 180) {
  textSize(20);
  stroke("red");
  fill("red");
  text("WARNING: *Red cars are considered lethal for the passengers*", 220,150);
}

if (deformation < 180 && deformation > 100) {
  textSize(20);
  stroke("yellow");
  fill("yellow");
  text("Yellow cars are considered average for the passengers...", 220,250);
}

if (deformation < 100) {
  textSize(20);
  stroke("green");
  fill("green");
  text("! Green cars are considered good for the passengers !", 220,350);
}
  drawSprites();
}