// Run nodejs with npm i -g http-server && http-server

import {Bullet} from "./objects/bullet.mjs";

const   bullet1 = new Bullet(1, 'media/combat_test/seed.png'),
        bullet2 = new Bullet(2, 'media/combat_test/seed.png'),
        bullet3 = new Bullet(3, 'media/combat_test/seed.png');

const gameFrame = document.getElementById('gameFrame');
const ctx = gameFrame.getContext('2d');

// ----------
// Game loop
// ----------
function update(elapsed) {
  bullet1.shoot('diagonal');
  bullet2.shoot('horizontal');
  bullet3.shoot('vertical');
}

function render() {
  ctx.clearRect(0, 0, gameFrame.clientWidth, gameFrame.height);

  bullet1.draw();
  bullet2.draw();
  bullet3.draw();
}

let lastUpdate;

function tick() {
  window.requestAnimationFrame(tick);
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
};

window.requestAnimationFrame(tick);