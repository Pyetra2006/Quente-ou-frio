let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background("rgb(246,196,246)");
  x = x + random(-5,5);
  y = y + random(-5,5);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  circle(mouseX, mouseY, distancia);
  fill ("rgb(224,112,132)")
  //circle(x, y, 10);
  
  if(distancia > 50){
    fill('rgb(91,91,238)')
  }
 if(distancia < 50){
    fill("purple")
 }
  if (distancia < 2) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}
