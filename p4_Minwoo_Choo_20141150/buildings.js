function resetMap() {
  for (let i = 0; i < gridSz; i++) {
    for (let j = 0; j < gridSz; j++) {
      map[i][j] = false;
    }
  }
}

function drawBuildings() {
  push();
  randomSeed(0);
  lights();
  directionalLight(1, 0, 0, 1, 0, 0);
  rotateX(radians(rotate_sl.value()));
  fill(0.1);
  plane(1000, 1000); // draw ground
  //fill(0.5);
  noStroke();
  let nBuildings = 178; // building_sl.value();
  let nCorona = building_sl.value();
  let nObj = (nCorona < nBuildings ? nBuildings : nCorona);
  translate(-CITY_SIZE / 2, -CITY_SIZE / 2);
  for (let i = 0; i < nObj; i++) {
    let foundEmptySpot = false;
    let x = 0,
    y = 0;
    // loop until it finds an empty spot
    while (foundEmptySpot == false) {
      x = floor(random(0, gridSz));
      y = floor(random(0, gridSz));
      if (map[x][y] == false) {
        foundEmptySpot = true;
        map[x][y] = true;
      }
    }
    // randomly determine building dimensions
    let w = random(10, BUILDING_MAX_SIZE);
    let h = random(10, BUILDING_MAX_SIZE);
    let d = random(10, 100); // building height
    // render a building
    push();
    translate(x * BUILDING_MAX_SIZE, y * BUILDING_MAX_SIZE, d / 2);
    // building or corona
    let buildingOrCorona = random(typeOfObj);
    if (buildingOrCorona === 'building' && i <= nBuildings) {
      box(w, h, d);
    } else if (i < nCorona && nCorona > 1) {
      let size = random(0.1, 0.3);
      drawCorona(size);
    }
    pop();
  }
  resetMap();
  pop();
}
