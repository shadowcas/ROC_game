// Run nodejs with npm i -g http-server && http-server

import {Bullet} from "./objects/bullet.mjs";
import {Player} from "./objects/player.mjs";
import {Fight} from "./combat/fight.mjs";

const gameFrame = document.getElementById('gameFrame'),
      ctx = gameFrame.getContext('2d');

let player = new Player(1, 3, 'media/player/heart.png'),
    counter = 0;

player.x = gameFrame.width / 2;
player.y = gameFrame.height / 2;

window.addEventListener("keydown", function(e) {player.move(e.type, e.keyCode, gameFrame);});
window.addEventListener("keyup", function(e) {player.move(e.type, e.keyCode, gameFrame);});

// ----------
// Game loop
// ----------
let bullets = [];

let walnutFight = new Fight(1, 12, 600);

walnutFight_init();

function walnutFight_init() {
  for (let i = 0; i < walnutFight.n_bullets; i++) {
    bullets[i] = new Bullet(i, 5, 'media/bullets/seed.png');
    if (i % 2 == 1) {
      bullets[i].y = Math.floor(Math.random() * gameFrame.height);
    } else {
      bullets[i].x = Math.floor(Math.random() * gameFrame.width);
    }
  }
  walnutFight.bullets = bullets;
}

function update(elapsed) {
  player.calc();

  let hit = bullets.filter(bullet => bullet.x > player.x - 15 && bullet.x < player.x + 25 && bullet.y > player.y - 15 && bullet.y < player.y + 25);

  if (hit.length > 0 && player.hit == false) {
    player.HPhandler("hit");
    console.log("hit");
  }

  player.HPhandler();

  if (counter >= walnutFight.time) {
    console.log("You won!");
  }
  counter++;
}

function render() {
  ctx.clearRect(0, 0, gameFrame.width, gameFrame.height);
  player.draw(gameFrame);

  walnutFight.drawPattern();
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
};

window.requestAnimationFrame(tick);