function genWord(sz) {  // Implemented by Minwoo Choo
  const size = 2 * sz;
  const res = 50;
  const font = 'Georgia';
  const style = 'bold';
  const bevelled = true;
  word_artn = new Word3D('Art&', 6, size, res, bevelled, font, style);
  word_tech = new Word3D('Technology', 6, size, res, bevelled, font, style);
}

function draw3DText() {
  push();
  normalMaterial();
  noStroke();
  translate(0, -150, -990);
  word_artn.show();
  translate(0, 150, 0);
  word_tech.show();
  pop();
}