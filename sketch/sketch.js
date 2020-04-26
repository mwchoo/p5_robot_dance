/*
2020-1 Computer Grapics :: PROJECT 5 - ROBOT DANCE
20141150 Minwoo Choo

< MANUAL >
mouseX, Y: control the position of the light, make groot look at the cursor
ARROW_UP Key: go forward
ARROW_DOWN Key: go backward
ARROW_LEFT Key: move the camera to the left
ARROW_RIGHT Key: move the camera to the right

P Key: screen shot
*/

let scene = 0;
let sounds = {
  'bgm': undefined,
  'walk': undefined,
  'groot': undefined,
  'bomb': undefined
}
let keymap;

let font_georgia;
let cgSplashName;
let groot_model = {
  'head': undefined,
  'body': undefined,
  'arm_l_high': undefined,
  'arm_l_low': undefined,
  'arm_r_high': undefined,
  'arm_r_low': undefined,
  'leg_l_high': undefined,
  'leg_l_low': undefined
};
let earth_texture;
let groot_mode = 2;
let dancing_factor = 0.2;
let dancing_type = 0;  // 0, 1, 2, 3 : Four mode of dance
//let scene_timer;
let rot = 0;
let planet_rot = 0;
let planet_self_rot = 0;

let X = 0;
let Y = 0;
let Z = 1700;
let centerX = 0;
let centerY = 0;
let centerZ = 0;
let h = 20;

const missile_area_width = 2000;
const missile_area_length = 2000;
const missile_area_height = 1500;
const missile_speed = 8;
let rounds = 0;
let misses = 0;
let missile_sd = 0;
let missiles = [];
let explosions = [];

function preload() {
  font_georgia = loadFont('assets/georgia.ttf');
  groot_model.head = loadModel('assets/head.obj');
  groot_model.body = loadModel('assets/body.obj');
  groot_model.arm_l_high = loadModel('assets/arm_l_high.obj');
  groot_model.arm_l_low = loadModel('assets/arm_l_low.obj');
  groot_model.arm_r_high = loadModel('assets/arm_r_high.obj');
  groot_model.arm_r_low = loadModel('assets/arm_r_low.obj');
  groot_model.leg_l_high = loadModel('assets/leg_l_high.obj');
  groot_model.leg_l_low = loadModel('assets/leg_l_low.obj');
  groot_model.leg_r_high = loadModel('assets/leg_r_high.obj');
  groot_model.leg_r_low = loadModel('assets/leg_r_low.obj');
  earth_texture = loadImage('assets/earth.jpg');
  sounds.bgm = loadSound('assets/bgm.mp3');
  sounds.walk = loadSound('assets/walk.mp3');
  sounds.groot = loadSound('assets/iamgroot.mp3');
  sounds.bomb = loadSound('assets/fireworks.mp3');
  keymap = loadImage('assets/keymap.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 255, 255, 255, 1);
  /*
  gl = this._renderer.GL;
  gl.disable(gl.DEPTH_TEST);*/

  cgSplashName = new Text("Dancing Groot!", 100, -300, 0, 0, color(195, 56, 51, 1), font_georgia);
  //scene_timer = new Timer(3000, handleScene);
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

  // show keymap
  image(keymap, -1000, -500);

  // light setting
  pointLight(255, 255, 255, locX, locY, windowHeight / 2);
  ambientLight(100);

  // bgm control
  if (!sounds.bgm.isPlaying()) {
    sounds.bgm.play();
  }

  // camera setting
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

  // draw space
  drawSpace();

  // draw groot
  drawGroot();

  // handle cam setting
  handleKeyDown();

  // draw missile
  drawMissile();

  rot += 0.25;
  planet_self_rot += 0.002;
}

function handleKeyDown() {
  if (keyIsDown(UP_ARROW)) {
    // go forward
    groot_mode = 1; // walk mode
    planet_rot += 0.02;
    /*
    Z -= 10;
    Y = cos(Z / 50) * 60 - 100;  // walk effect
    */
  } else if (keyIsDown(DOWN_ARROW)) {
    // go backward
    groot_mode = 1; // walk mode
    planet_rot -= 0.02;
    /*
    Z += 10;
    Y = cos(Z / 50) * 60 - 100;  // walk effect
    */
  }
  if (keyIsDown(LEFT_ARROW)) {
    // turn your head to the left
    X -= 20;
  } else if (keyIsDown(RIGHT_ARROW)) {
    // turn your head to the right
    X += 20;
  }
}

function mouseDragged() {
  //rot += 0.1;
}

function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    if (!sounds.walk.isPlaying()) {
      sounds.walk.play();
    }
    if (!sounds.groot.isPlaying()) {
      sounds.groot.play();
    }
  }
  if (keyCode === 80) {
    saveImage();
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    if (sounds.walk.isPlaying()) {
      sounds.walk.stop();
    }
    groot_mode = 2; // dancing mode
  }
}

function saveImage() {
  saveCanvas("image", "jpg");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}