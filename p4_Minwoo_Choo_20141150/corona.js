class Corona {  // implemented by Minwoo Choo
  constructor(sz, x, y, z) {
    this.sz = sz;
    this.x = x;
    this.y = y;
    this.z = z;
    this.c_color = color(100, 100, 100);
    this.spike_color = color(195, 56, 51);
    this.i = 0;
    this.v = undefined;
  }

  setSize(sz) {
    this.sz = sz;
  }

  setPosition(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.03);
    randomSeed(4);

    // draw covid-19
    fill(100);
    noStroke();
    ambientMaterial('rgb(80, 80, 80)');
    sphere(100 * this.sz);
    /*
    for (let i = 0; i < 300; i++) {
      let v = new p5.Vector(random3D());
      // PVector v = PVector.random3D(this);
      v.mult(100 * this.sz);
      stroke(100);
      strokeWeight(4);
      point(v.x, v.y, v.z);
    }*/

    // draw spike protein
    for (let i = 0; i < parseInt(80 * this.sz); i++) {
      v = random3D();
      // PVector v = PVector.random3D(this);
      v.mult(120 * this.sz);
      stroke('rgb(195, 56, 51)');
      strokeWeight(30 * this.sz);
      point(v.x, v.y, v.z);
    }
    pop();
  }
}

function random3D() {
  const angle = random(0, TWO_PI);
  const vz = random(-1, 1);
  const vx = sqrt(1-vz*vz)*cos(angle);
  const vy = sqrt(1-vz*vz)*sin(angle);
  v = new p5.Vector(vx, vy, vz);
  return v;
}

function drawCorona(sz) {
  push();
  //translate(this.x, this.y, this.z);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.03);
  randomSeed(4);

  // draw covid-19
  noStroke();
  ambientMaterial('rgb(40, 40, 40)');
  sphere(100 * sz);
  /*
  for (let i = 0; i < 300; i++) {
    let v = new p5.Vector(random3D());
    // PVector v = PVector.random3D(this);
    v.mult(100 * this.sz);
    stroke(100);
    strokeWeight(4);
    point(v.x, v.y, v.z);
  }*/

  // draw spike protein
  for (let i = 0; i < parseInt(80 * sz); i++) {
    v = random3D();
    // PVector v = PVector.random3D(this);
    v.mult(120 * sz);
    stroke('rgb(195, 56, 51)');
    strokeWeight(40 * sz);
    point(v.x, v.y, v.z);
  }
  pop();
}
