function drawSpace() {
  push();
  translate(0, 1430, 50);
  rotateX(planet_rot);
  rotateY(planet_self_rot);
  noStroke();
  fill(150, 200, 100);
  texture(earth_texture);
  sphere(1250);

  // draw stars
  for (let i = 0; i < 80; i++) {
    v = random3D();
    // PVector v = PVector.random3D(this);
    v.mult(2500);
    stroke('rgb(195, 195, 195)');
    strokeWeight(round(random(1, 10)));
    point(v.x, v.y, v.z);
  }
  pop();
}

function random3D() {
  const angle = random(0, TWO_PI);
  const vz = random(-1, 1);
  const vx = sqrt(1-vz*vz)*cos(angle);
  const vy = sqrt(1-vz*vz)*sin(angle);
  v = new p5.Vector(vx, vy, vz);
  return v;
}