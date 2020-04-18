function drawSpace() {
  push();
  translate(0, -5, -1000);
  fill(150, 200, 100);

  noStroke();
  // front-back
  plane(1000, 1000);

  // bottom
  texture(textureMat.concrete);
  rotateX(HALF_PI);
  translate(0, 1000, -500);
  plane(1000, 2000);

  // left
  rotateY(HALF_PI);
  translate(-500, 0, -500);
  plane(1000, 2000);

  // top
  rotateY(HALF_PI);
  translate(-500, 0, -500);
  plane(1000, 2000);

  // right
  rotateY(HALF_PI);
  translate(-500, 0, -500);
  plane(1000, 2000);
  pop();
}