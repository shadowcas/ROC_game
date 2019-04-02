// Run nodejs with npm i -g http-server && http-server

import {Bullet} from "./objects/bullet.mjs";

// const   bullet1 = new Bullet(1, 5, 'media/combat_test/seed.png'),
//         bullet2 = new Bullet(2, 5, 'media/combat_test/seed.png'),
//         bullet3 = new Bullet(3, 5, 'media/combat_test/seed.png');

const gameFrame = document.getElementById('gameFrame');
const ctx = gameFrame.getContext('2d');

// ----------
// Game loop
// ----------
let bullets = [];
fight1_init();
function fight1_init() {
  for (let i = 0; i < 10; i++) {
    bullets[i] = new Bullet(i, 5, 'media/combat_test/seed.png');
    bullets[i].y = i * gameFrame.height / 10;
  }
}

function update(elapsed) {
  
}

function render() {
  ctx.clearRect(0, 0, 600, 800);

  for (let i = 0; i < 10; i++) {
    bullets[i].shoot('horizontal');
    bullets[i].draw(gameFrame);
    console.log(bullets[i].x);
  }
}

let lastUpdate;

function tick() {
  let now = window.Date.now();

  if (lastUpdate) {
    let elapsed = (now-lastUpdate) / 1000;
    lastUpdate = now;

    // Update all game objects here.
    update(elapsed);
    // ...and render them somehow.
    render();
  } else {
    // Skip first frame, so elapsed is not 0.
    lastUpdate = now;
  }

  // This makes the `tick` function run 60 frames per second (or slower, depends on monitor's refresh rate).
  window.requestAnimationFrame(tick);
};

window.requestAnimationFrame(tick);