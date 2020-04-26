function drawSpace() {
  push();
  translate(0, 1430, 50);
  rotateX(planet_rot);
  rotateY(planet_self_rot);
  noStroke();
  fill(150, 200, 100);
  texture(earth_texture);
  sphere(1250);
  pop();

  /*
  push();
  translate(0, -5, -1000);
  fill(150, 200, 100);

  // bottom
  //texture(textureMat.concrete);
  noStroke();

  // front-back
  plane(1000, 1000);
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
  */
}