/*
2020-1 Computer Grapics :: PROJECT 4 - VIRTUAL EXHIBITION
20141150 Minwoo Choo
*/

let scene = 0;
let sound_bgm;

let font_georgia;
let font_game, font_nanum;  // for envelope text
let cgSplashName;
let envelope;
let scene_timer;

let textureMat = {
  'concrete': undefined,
  'steel': undefined,
  'marble': undefined,
  'wood': undefined
}

let pframe = {
  'jusub': undefined,
  'goodsoon': undefined,
  'sangyong': undefined,
  'artech': undefined
}

let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;

function preload() {
  //font_georgia = loadFont('assets/georgia.ttf');
  //font_game = loadFont('assets/game.ttf');
  font_nanum = loadFont('assets/garam.ttf');
  envelope = loadModel('assets/envelope.obj');
  textureMat.concrete = loadImage('assets/concrete.jpg');
  textureMat.steel = loadImage('assets/steel.jpg');
  textureMat.marble = loadImage('assets/marble.jpg');
  textureMat.wood = loadImage('assets/wood.jpg');
  pframe.jusub = loadImage('assets/jusub_painted.png');
  pframe.goodsoon = loadImage('assets/goodsoon_painted.png');
  pframe.sangyong = loadImage('assets/sangyong_painted.png');
  pframe.artech = loadImage('assets/artech_painted.png');
  //sound_bgm = loadSound('assets/bgm.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 1);
  /*
  gl = this._renderer.GL;
  gl.disable(gl.DEPTH_TEST);*/

  //cgSplashName = new Text("사랑을 담아, -주", 100, windowWidth/2 - 300, windowHeight/2 - 70, color(195, 56, 51, 1), font_nanum);
  //scene_timer = new Timer(3000, handleScene);

  for (let i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
  }

  genWord(1);
}

function draw() {
  background(0);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  // light setting
  //lights();
  pointLight(255, 255, 255, locX, locY, windowHeight/2);
  //directionalLight(255, 255, 255, 1, 0, 0);
  ambientLight(0.2);
  //specularColor(255, 0, 0);
  //pointLight(255, 255, 255, 0, -50, 50);
  //specularColor(0, 255, 0);
  //pointLight(0, 255, 0, 0, 50, 50);
  //specularMaterial(255);

  // camera setting
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value() + 1500;
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

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
  //rotateY(mouseX/100);
  drawEnvelope();
  //push();
  //rotateZ(HALF_PI/2);
  //cgEnvelopeJusub.display();
  //pop();

  // draw space
  drawSpace();
  draw3DText();
  drawFrame();

  // draw exhibition stand
  drawStand();
  drawCover();
}

function mousePressed() {

}

function mouseReleased() {

}

function keyPressed() {

}

function saveImage() {
  saveCanvas("image", "jpg");
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}