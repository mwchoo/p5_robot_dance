/*
2020-1 Computer Grapics :: PROJECT 5 - ROBOT DANCE
20141150 Minwoo Choo

< MANUAL >
mouseX: control the position of the light
mouseY: control the envelope cover color
ARROW_UP Key: go forward
ARROW_DOWN Key: go backward
ARROW_LEFT Key: turn your head to the left
ARROW_RIGHT Key: turn your head to the right

P Key: screen shot
*/

let scene = 0;
let sound_bgm;
let sound_walk;

let font_nanum;  // for envelope text
let cgSplashName;
let envelope;
//let scene_timer;

let X = 0;
let Y = 0;
let Z = 1700;
let centerX = 0;
let centerY = 0;
let centerZ = 0;
let h = 20;

function preload() {
  font_nanum = loadFont('assets/garam.woff');
  envelope = loadModel('assets/envelope.obj');
  sound_bgm = loadSound('assets/bgm.mp3');
  sound_walk = loadSound('assets/walk.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 1);
  /*
  gl = this._renderer.GL;
  gl.disable(gl.DEPTH_TEST);*/

  cgSplashName = new Text("I am groot!", 100, -200, 0, 0, color(195, 56, 51, 1), font_nanum);
  //scene_timer = new Timer(3000, handleScene);
  genWord(1);
}

function draw() {
  background(0);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  // scene control
  if (scene === 0) {
    drawSplash();
    return;
  }

  // light setting
  pointLight(255, 255, 255, locX, locY, windowHeight / 2);
  ambientLight(0.2);

  // bgm control
  if (!sound_bgm.isPlaying()) {
    sound_bgm.play();
  }

  // camera setting
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

  // draw space
  //drawSpace();
  //draw3DText();

  // draw groot
  //drawGroot();

  // handle cam setting
  handleKeyDown();
}

function handleKeyDown() {
  if (keyIsDown(UP_ARROW)) {
    // go forward
    Z -= 10;
    Y = cos(Z / 50) * 60 - 100;  // walk effect
  } else if (keyIsDown(DOWN_ARROW)) {
    // go backward
    Z += 10;
    Y = cos(Z / 50) * 60 - 100;  // walk effect
  }
  if (keyIsDown(LEFT_ARROW)) {
    // turn your head to the left
    X -= 10;
  } else if (keyIsDown(RIGHT_ARROW)) {
    // turn your head to the right
    X += 10;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    if (!sound_walk.isPlaying()) {
      sound_walk.play();
    }
  }
  if (keyCode === 80) {
    saveImage();
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    if (sound_walk.isPlaying()) {
      sound_walk.stop();
    }
  }
}

function saveImage() {
  saveCanvas("image", "jpg");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}