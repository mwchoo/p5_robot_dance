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
  translate(0, 130, 0);
  noStroke();
  //fill(200, 200, 200);
  texture(textureMat.steel);
  box(300, 100, 300);

  translate(0, 200, 0);
  box(150, 300, 150);

  translate(0, 150, 0);
  box(200, 30, 200);
  pop();
}

function drawCover() {
  push();
  let h = map(mouseY, 0, height, 0, 360);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  fill(h, 100, 100, 30);
  box(301, 200, 301);
  pop();
}