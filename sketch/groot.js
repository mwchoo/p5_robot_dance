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
  rotateY(sin(rot));
  translate(-75, 0, -40);
  model(groot_model.head);
  pop();

  // draw body
  push();
  model(groot_model.body);
  pop();

  // draw arms
  push();
  translate(65, 50, 40);
  rotateZ(sin(rot) * 0.5 - 0.3);
  translate(-65, -50, -40);
  model(groot_model.arm_l_high);
  translate(40, 25, 40);
  rotateZ(sin(rot) * 0.5);
  translate(-40, -25, -40);
  model(groot_model.arm_l_low);
  pop();

  push();
  translate(85, 50, 40);
  rotateZ(sin(rot + PI) * 0.5 + 0.3);
  translate(-85, -50, -40);
  model(groot_model.arm_r_high);
  translate(105, 25, 40);
  rotateZ(sin(rot + PI) * 0.5);
  translate(-105, -25, -40);
  model(groot_model.arm_r_low);
  pop();

  // draw legs
  push();
  translate(0, 40, 20);
  rotateX(HALF_PI);
  push();
  translate(65, 10, 25);
  rotateX(sin(rot) * 0.9);
  translate(-65, -10, -25);
  model(groot_model.leg_l_high);
  translate(45, 10, 45);
  rotateX(sin(rot + PI) * 0.5);
  translate(-43, -10, -50);
  model(groot_model.leg_l_low);
  pop();

  push();
  translate(85, 10, 25);
  rotateX(sin(rot + PI) * 0.9);
  translate(-85, -10, -25);
  model(groot_model.leg_r_high);
  translate(65, 10, 45);
  rotateX(sin(rot) * 0.5);
  translate(-68, -10, -50);
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