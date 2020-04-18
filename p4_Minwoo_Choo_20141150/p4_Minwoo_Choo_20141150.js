/*
2020-1 Computer Grapics :: PROJECT 4 - VIRTUAL EXHIBITION
20141150 Minwoo Choo
*/

let scene = 0;
let sound_bgm;

let font_georgia;  // for envelope text
let font_game;  // for artech text
let cgSplashName;
let cgEnvelopeJusub;
let cgArtech;
let rot = 0;
let scene_timer;

function preload() {
  font_georgia = loadFont('assets/georgia.ttf');
  font_game = loadFont('assets/game.ttf');
  //sound_bgm = loadSound('assets/bgm.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 1);
  noStroke();
  //rot = 0;

  //cgSplashName = new Text("Corona Extra", 100, windowWidth/2 - 300, windowHeight/2 - 70, color(195, 56, 51, 1), font_georgia);
  cgEnvelopeJusub = new Text("With Love, -Ju", 20, 150, 40, color(195, 56, 51, 1), font_georgia);
  cgArtech = new Text("ART&TECH", 20, 150, 65, color(240, 240, 240, 1), font_georgia);

  //scene_timer = new Timer(3000, handleScene);
}

function draw() {
  background(0);
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
  cgArtech.display();

  // draw envelope
  cgEnvelopeJusub.display();
}

function mousePressed() {

}

function mouseReleased() {

}
