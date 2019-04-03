// Run nodejs with npm i -g http-server && http-server

import {Bullet} from "./objects/bullet.mjs";
import {Player} from "./objects/player.mjs";

const gameFrame = document.getElementById('gameFrame'),
      ctx = gameFrame.getContext('2d');

let player = new Player(1, 3, 'media/player/heart.png'),
    grace = false;
player.x = gameFrame.width / 2;
player.y = gameFrame.height / 2;


window.addEventListener("keydown", function(e) {
  player.move(e.type, e.keyCode, gameFrame); 
});

window.addEventListener("keyup", function(e) {
  player.move(e.type, e.keyCode, gameFrame);
});
// ----------
// Game loop
// ----------
let bullets = [];

fight1_init();

function fight1_init() {
  for (let i = 1; i < 11; i++) {
    bullets[i] = new Bullet(i, 5, 'media/bullets/seed.png');
    if (i % 2 == 0) {
      bullets[i].y = i * gameFrame.width / 10;
    } else {
      bullets[i].x = i * gameFrame.height / 10;
    }
  }
}

function update(elapsed) {
  player.calc();

  let hit = bullets.filter(bullet => bullet.x > player.x - 15 && bullet.x < player.x + 25 && bullet.y > player.y - 15&& bullet.y < player.y + 25);

  if (hit.length > 0 && player.hit == false) {
    player.HPhandler("hit");
    console.log("hit");
  }

  if (player.hit == true) {
    player.invFrames++;
    if (player.invFrames == 250) {
      player.hit = false;
      player.invFrames = 0;
    }
  }
}

function render() {
  ctx.clearRect(0, 0, gameFrame.width, gameFrame.height);
  player.draw(gameFrame);

  for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
      bullets[i].shoot('horizontal');
    } else {
      bullets[i].shoot('vertical');
    }
    bullets[i].draw(gameFrame);
  }

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