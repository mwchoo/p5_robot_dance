class Photoframe { // implemented by Minwoo Choo
  constructor(img, sz) {
    this.img = img;
    this.size = sz;
  }

  setImg(img) {
    this.img = img;
  }

  setSize(sz) {
    this.size(sz);
  }

  display() {
    push();
    noStroke();
    scale(this.size);
    beginShape();
    texture(this.img);
    plane(this.img.width, this.img.height, 100, 100);
    endShape();
    pop();
  }
}

function drawFrame() {
  const jusub = new Photoframe(pframe.jusub, 1);
  const goodsoon = new Photoframe(pframe.goodsoon, 1);
  const sangyong = new Photoframe(pframe.sangyong, 1);
  const artech = new Photoframe(pframe.artech, 1);

  push();
  translate(-499, -70, 0);
  rotateY(HALF_PI);

  translate(-550, 0, 0);
  jusub.display();

  translate(500, 0, 0);
  goodsoon.display();

  translate(500, 0, 0);
  sangyong.display();

  rotateY(PI);
  translate(600, 0, -998);
  artech.display();
  pop();
}