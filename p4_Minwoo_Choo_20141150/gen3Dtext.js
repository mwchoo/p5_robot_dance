function genWord(sz) {
  const size = 2 * sz;  // Size of each cube making up the letters
  const res = 50 // Number of pixels per character
  const fonts = ["Georgia", "Times New Roman", "Helvetica", "Verdana", "Arial", "Courier New", "Trebuchet MS"];
  const styles = ["bold", "normal", "bold italic", "italic", ];
  const indexF = 0; // Current font
  const indexS = 0; // Current style
  const bevelled = true;

  const font = fonts[indexF];
  const style = styles[indexS];
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