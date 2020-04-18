function drawEnvelope() {
  push();
  rotateZ(HALF_PI/2);
  noStroke();
  scale(1);
  model(envelope);

  textSize(20);
  textFont(font_nanum);
  translate(0, 0, 5.1);
  fill(0);
  text("사랑을 담아, -주", -35, 30);
  pop();
}

function drawStand() {
  push();
  noStroke();
  
  pop();
}