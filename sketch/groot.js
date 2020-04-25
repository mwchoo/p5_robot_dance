function drawGroot() {
  push();
  translate(125, 100, -80);
  noStroke();
  scale(2);
  rotateZ(PI);
  //texture(groot_head.texture);
  //fill(106, 77, 63);
  fill(106, 77, 63);
  //ambientMaterial(106, 77, 63);

  // draw head
  push();
  translate(75, 0, 40);
  rotateY(rot);
  translate(-75, 0, -40);
  model(groot_model.head);
  pop();

  // draw body
  push();
  model(groot_model.body);
  pop();

  // draw arms
  push();
  model(groot_model.arm_l_high);
  model(groot_model.arm_l_low);
  pop();
  push();
  model(groot_model.arm_r_high);
  model(groot_model.arm_r_low);
  pop();

  // draw legs
  push();
  translate(0, 40, 20);
  rotateX(HALF_PI);
  push();
  model(groot_model.leg_l_high);
  model(groot_model.leg_l_low);
  pop();
  push();
  model(groot_model.leg_r_high);
  model(groot_model.leg_r_low);
  pop();
  pop();

  /*
  translate(75, -40, 40);
  texture(groot_texture.body);
  //sphere(40, 16, 3);
  box(60, 100, 30);
   */

  //fill (255);
  //cylinder(20, 75, 16, 5, false, true);
  /*beginShape();
  vertex (-100, -100, 100);
  vertex (100, -100, 100);
  vertex (100, 100, 100);
  vertex (-100, 100, 100);
  endShape (CLOSE);*/
  pop();
}