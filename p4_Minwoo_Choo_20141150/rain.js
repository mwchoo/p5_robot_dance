function Rain(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  //this.gravity = 9.8;
  this.length = 15;
  this.r = 0;
  this.opacity = 200;


  this.dropRain = function() {
    noStroke();
    fill(255);
    //rect(this.x, this.y,3,15);
    push();
    translate(0, 0, this.z);
    ellipse(this.x, this.y, 3, this.length);
    pop();
    this.y = this.y + 6 //+ frameCount/60;
    if (this.y > 540) {
      this.length = this.length - 5;
      //this.y= random(0,-100);
    }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(2);
    //stroke(245, 200/frameCount);
    stroke(245, this.opacity);
    noFill();
    if (this.y > 240) {
      push();
      translate(0, 0, this.z);
      ellipse(this.x, 250, this.r * 2, this.r / 2);
      pop();
      this.r++;
      this.opacity = this.opacity - 10;

      //keep the rain dropping
      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 200;
      }
    }
  }
}
