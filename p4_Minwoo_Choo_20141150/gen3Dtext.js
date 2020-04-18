function genWord(sz) {
  const size = (width / 200) * sz  // Size of each cube making up the letters
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

/*
function keyPressed() {
  // Cycle through fonts and styles, type new words followed by enter to display them, SHIFT to toggle bevel
  if(keyCode == RIGHT_ARROW){indexF = (indexF+1) % fonts.length; genWord()} else
  if(keyCode == LEFT_ARROW){indexF = indexF <= 0 ? fonts.length-1 : indexF-1; genWord()} else
  if(keyCode == UP_ARROW){indexS = indexS == styles.length-1 ? 0 : indexS+1; genWord()} else
  if(keyCode == DOWN_ARROW){indexS = indexS == 0 ? styles.length-1 : indexS-1; genWord()} else
  if(keyCode == ENTER){
    oldString = newString;
    genWord()
    newString = "";
  } else
  if(keyCode == SHIFT){
    bevelled = !bevelled;
    genWord()
  } else
  if(keyCode == 20){}
  else{
    newString += key
  }
}*/

function draw3DText() {
  push();
  normalMaterial();
  noStroke();
  translate(0, -150, -1000);
  word_artn.show();
  translate(0, 150, 0);
  word_tech.show();
  pop();
}