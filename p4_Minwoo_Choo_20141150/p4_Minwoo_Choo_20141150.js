/*
2020-1 Computer Grapics :: PROJECT 4 - VIRTUAL EXHIBITION
20141150 Minwoo Choo
*/

let scene = 0;
let sound_bgm;

let font_georgia;  // for envelope text
let font_game, font_nanum;  // for artech text
let cgSplashName;
let cgEnvelopeJusub;
let cgArtech;
let envelope;
let rot = 0;
let scene_timer;

function preload() {
  //font_georgia = loadFont('assets/georgia.ttf');
  //font_game = loadFont('assets/game.ttf');
  font_nanum = loadFont('assets/garam.ttf'); //NanumBarunGothic.ttf');
  envelope = loadModel('assets/envelope.obj');
  //sound_bgm = loadSound('assets/bgm.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 1);
  //rot = 0;

  //cgSplashName = new Text("Corona Extra", 100, windowWidth/2 - 300, windowHeight/2 - 70, color(195, 56, 51, 1), font_georgia);
  //cgEnvelopeJusub = new Text("사랑을 담아, -주", 20, -35, 30, 5, color(0, 0, 0, 1), font_nanum);
  //cgArtech = new Text("ART&TECH", 20, 150, 65, 0, color(240, 240, 240, 1), font_georgia);

  //scene_timer = new Timer(3000, handleScene);
}

function draw() {
  background(0);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, windowHeight/2);
  //lights();
  //directionalLight(1, 0, 0, 1, 0, 0);

  // scene control
  if (scene === 0) {
    //drawSplash();
    //return;
  }

  // bgm control
  /*
  if (!sound_bgm.isPlaying()) {
    sound_bgm.play();
  }*/


  // draw artech
  //cgArtech.display();

  // draw envelope
  rotateY(mouseX/100);
  drawEnvelope();
  push();
  rotateZ(HALF_PI/2);
  //cgEnvelopeJusub.display();
  pop();

  // draw exhibition stand
  drawStand();
}

function mousePressed() {

}

function mouseReleased() {

}
