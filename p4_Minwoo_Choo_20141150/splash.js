function drawSplash() {
  if (frameCount > 120) {
    scene = 1;
  }
  //cgSplashName.display();
  scale(0.5);
  image(coronaImg, -500, -300, 0);
}
