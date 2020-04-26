function drawGroot() {
  /* GROOT MODE - [0] Stop, [1] Walk, [2] Dancing */

  if (groot_mode === 2) {  // dancing mode
    if (frameCount % 20 === 0) {
      dancing_factor = random(0.1, 0.4);
    }
    if (frameCount % 100 === 0) {
      dancing_type = round(random([0, 1]));
    }
  }

  push();
  if (groot_mode === 0) {  // stop
    translate(125, 100, -80);
  } else if (groot_mode === 1) {  // walk
    translate(125, 100 + sin(rot) * dancing_factor * 100, -80);
  } else if (groot_mode === 2) {  // dancing
    translate(125, 100 + sin(rot) * dancing_factor * 20, -80);
  }
  noStroke();
  scale(2);
  rotateZ(PI);
  fill(106, 77, 63);

  // draw walk motion
  push();
  translate(75, 0, 40);
  rotateZ(sin(rot) * 0.01);
  rotateY(sin(rot) * 0.2);
  translate(-75, 0, -40);

  drawGrootHead();
  drawGrootBody();
  drawGrootArms();
  drawGrootLegs();
  pop();  // the end of groot walk motion
  pop();
}

function drawGrootHead() {
  push();
  translate(75, 0, 40);
  //rotateY(sin(rot + PI) * 0.7);
  rotateY(atan2((mouseY ? mouseY : height/2) - 75, (mouseX ? mouseX : width/2) - 40) - 1);  // groot's head follows your mouse
  translate(-75, 0, -40);
  model(groot_model.head);
  pop();
}

function drawGrootBody() {
  model(groot_model.body);
}

function drawGrootArms() {
  push();
  translate(65, 50, 40);
  if (groot_mode === 1) {  // walk
    rotateZ(sin(rot) * 0.5 - 0.3);
  } else if (groot_mode === 2) {  // dancing
    if (dancing_type === 0) {
      rotateZ(sin(rot) * dancing_factor - 0.3);
    } else if (dancing_type === 1) {
      rotateZ(sin(rot) * dancing_factor - 0.3);
    }
  }
  translate(-65, -50, -40);
  model(groot_model.arm_l_high);
  translate(40, 25, 40);
  if (groot_mode === 1) {  // walk
    rotateZ(sin(rot) * 0.5);
  } else if (groot_mode === 2) {  // dancing
    if (dancing_type === 0) {
      rotateZ(sin(rot) * dancing_factor + 2.5);
    } else if (dancing_type === 1) {
      rotateZ(sin(rot + PI) * dancing_factor + 2.5);
    }
  }
  translate(-40, -25, -40);
  model(groot_model.arm_l_low);
  pop();

  push();
  translate(85, 50, 40);
  if (groot_mode === 1) {  // walk
    rotateZ(sin(rot + PI) * 0.5 + 0.3);
  } else if (groot_mode === 2) {  // dancing
    if (dancing_type === 0) {
      rotateZ(sin(rot + PI) * dancing_factor + 0.3);
    } else if (dancing_type === 1) {
      rotateZ(sin(rot + PI) * dancing_factor + 0.3);
    }
  }
  translate(-85, -50, -40);
  model(groot_model.arm_r_high);
  translate(105, 25, 40);
  if (groot_mode === 1) {  // walk
    rotateZ(sin(rot + PI) * 0.5);
  } else if (groot_mode === 2) {  // dancing
    if (dancing_type === 0) {
      rotateZ(sin(rot) * dancing_factor - 2.5);
    } else if (dancing_type === 1) {
      rotateZ(sin(rot) * dancing_factor - 2.5);
    }
  }
  translate(-105, -25, -40);
  model(groot_model.arm_r_low);
  pop();
}

function drawGrootLegs() {
  push();
  translate(0, 40, 20);
  rotateX(HALF_PI);
  push();
  translate(65, 10, 25);
  if (groot_mode === 1) {  // walk
    rotateX(sin(rot) * 0.9);
  } else if (groot_mode === 2) {  // dancing
    rotateX(sin(rot) * 0.5 - 0.3);
  }
  translate(-65, -10, -25);
  model(groot_model.leg_l_high);
  translate(45, 10, 45);
  if (groot_mode === 1) {  // walk
    rotateX(sin(rot + PI) * 0.5);
  } else if (groot_mode === 2) {  // dancing
    rotateX(sin(rot + PI) * 0.5 + 0.3);
  }
  translate(-43, -10, -50);
  model(groot_model.leg_l_low);
  pop();

  push();
  translate(85, 10, 25);
  if (groot_mode === 1) {  // walk
    rotateX(sin(rot + PI) * 0.9);
  } else if (groot_mode === 2) {  // dancing
    rotateX(sin(rot) * 0.5 - 0.3);
  }
  translate(-85, -10, -25);
  model(groot_model.leg_r_high);
  translate(65, 10, 45);
  if (groot_mode === 1) {  // walk
    rotateX(sin(rot) * 0.5);
  } else if (groot_mode === 2) {  // dancing
    rotateX(sin(rot + PI) * 0.5 + 0.3);
  }
  translate(-68, -10, -50);
  model(groot_model.leg_r_low);
  pop();
  pop();  // the end of draw legs
}