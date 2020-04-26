class Missile {
  constructor(pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.acc = createVector(0, 0, 0);
    this.t = 20;
  }

  move(dt) {
    this.acc.limit(40);
    const dv = p5.Vector.mult(this.acc, dt);
    this.vel.add(dv);
    this.vel.limit(100);
    const dp = p5.Vector.mult(this.vel, dt);
    this.pos.add(dp);
    this.t -= dt;
  }

  draw() {
    const nose = createVector(0, 1, 0);
    const vc = this.vel.copy();
    vc.normalize();
    const w = nose.cross(vc);
    const n = w.mag();

    push();
    //fill(220);
    fill(255, 50, 0);
    noStroke();
    translate(this.pos);
    rotate(asin(n), w);
    cone(3, 6, 6);
    translate(0, -6, 0);
    cylinder(3, 6, 6);
    pop();
  }
}

class Explosion {
  constructor(pos) {
    this.pos = pos;
    this.t = 3 * PI / 2;
    this.r = 20;
  }

  update(dt) {
    this.t -= dt;
    this.r = 20 + 20 * sin(3 * PI / 2 - this.t);
  }

  draw() {
    push();
    //fill(220);
    fill(238, 203, 43);
    noStroke();
    translate(this.pos);
    sphere(this.r);
    pop();
  }
}

function create_missiles(N) {
  missiles = [];
  for (let i = 0; i < N; i++) {
    const x = random(0.2, 0.8) * missile_area_length;
    const y = random(0.2, 0.8) * missile_area_width;
    const z = random(0.9, 0.95) * missile_area_height;
    const vx = randomGaussian(0, 1) * 10;
    const vy = randomGaussian(0, 1) * 10;
    const vz = -random(0.7, 1.0) * 100;
    const m = new Missile(createVector(x, y, z), createVector(vx, vy, vz));
    missiles.push(m);
  }
}

function reset() {
  noiseSeed(random(999999999));
  const N = round(random(5, 15));
  create_missiles(N);
  rounds += 1;
}

function collision(a, b, r) {
  return a.pos.dist(b.pos) <= r;
}

function crash(a) {
  return a.pos.z <= 523; //ground.height(a.pos.x, a.pos.y)
}

function oob(a) {
  return a.pos.x < 0 || a.pos.x > missile_area_length
    || a.pos.y < 0 || a.pos.y > missile_area_width
    || a.pos.z < 0 || a.pos.z > missile_area_height;
}

function drawMissile() {
  translate(0, 0, 1000);
  // check end condition
  if (missiles.length === 0 && explosions.length === 0) {
    reset();
    return;
  }

  const dt = deltaTime * 0.001 * missile_speed;

  // update state
  // Missiles
  missile_AI(dt);
  for (var i = 0; i < missiles.length; i++) {
    missiles[i].move(dt);
    if (oob(missiles[i])) {
      missiles.splice(i, 1);
      misses += 1;
      continue;
    }
    if (crash(missiles[i])) {
      const gpos = createVector(missiles[i].pos.x, missiles[i].pos.y, 523);
      const ex = new Explosion(gpos);
      explosions.push(ex);
      missiles.splice(i, 1);
      misses += 1;
      continue;
    }
    if (missiles[i].t <= 0) {
      const ex = new Explosion(missiles[i].pos);
      explosions.push(ex);
      missiles.splice(i, 1);
      missile_sd += 1;
      continue;
    }

    // check collision against other missiles
    let collided = false;
    for (let j = 0; j < missiles.length; j++) {
      if (i !== j && collision(missiles[i], missiles[j], 15)) {
        let ex = new Explosion(missiles[i].pos);
        explosions.push(ex);
        collided = true;
        missile_sd += 2;
        break;
      }
    }
    if (collided) {
      missiles.splice(i, 1);
    }
  }

  // Explosions
  for (let i = 0; i < explosions.length; i++) {
    explosions[i].update(dt);
    if (explosions[i].t <= 0) {
      explosions.splice(i, 1);
      continue;
    }

    for (let j = 0; j < missiles.length; j++) {
      if (collision(explosions[i], missiles[j], explosions[i].r + 10)) {
        missiles.splice(j, 1);
      }
    }
  }

  // draw
  rotateX(PI / 2);
  translate(-missile_area_length / 2, -missile_area_width, -missile_area_height / 2);

  // draw objects
  for (let i = 0; i < missiles.length; i++) {
    missiles[i].draw();
  }
  for (let i = 0; i < explosions.length; i++) {
    explosions[i].draw();
  }
}

function missile_AI(dt) {
  for (let i = 0; i < missiles.length; i++) {
    // assign acceleration output for missile
    missiles[i].acc = createVector(-missiles[i].vel.x, -missiles[i].vel.y, -1);
  }
}