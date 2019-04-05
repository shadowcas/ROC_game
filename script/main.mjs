// Run nodejs with npm i -g http-server && http-server

import {Player} from "./objects/player.mjs";
import {Fight} from "./combat/fight.mjs";
import * as all_fights from "./combat/all_fights.mjs";

const gameFrame = document.getElementById('gameFrame'),
      ctx = gameFrame.getContext('2d');

let player = new Player(5, 3, 'media/player/heart.png'),
    counter = 0,
    current_level = 1,
    initialized = false;

player.x = gameFrame.width / 2;
player.y = gameFrame.height / 2;

window.addEventListener("keydown", function(e) {player.move(e.type, e.keyCode, gameFrame);});
window.addEventListener("keyup", function(e) {player.move(e.type, e.keyCode, gameFrame);});
document.getElementById("next").addEventListener("click", function() {
  document.getElementById("level_up").style.display = "none";
  player.isPlaying = true;
});

// ----------
// Game loop
// ----------
let enemies = {
  1: new Fight(1, "walnut", 8, 500, "media/play/zone1_creatures/1.png"),
  2: new Fight(2, "Floof", 10, 850, "media/play/zone1_creatures/2.png"),
  3: new Fight(3, "Umons", 10, 1000, "media/play/zone1_creatures/3.png"),
  4: new Fight(4, "paddo",  15, 1300, "media/play/zone1_creatures/4.png"),
  5: new Fight(5, "Hopkins", 20, 1800, "media/play/zone1_creatures/5.png"),
  6: new Fight(6, "Clawdius",  25, 1800, "media/play/zone1_creatures/boss.png")
};

function update(elapsed) {
  if (!initialized) {
    player.W = false; player.A = false; player.S = false; player.D = false;

    eval(`all_fights.init${enemies[current_level].level}(enemies[current_level])`);

    initialized = true;
  }

  player.calc();

  let hit = enemies[current_level].bullets.filter(bullet => bullet.x > player.x - 15 && bullet.x < player.x + 25 && bullet.y > player.y - 15 && bullet.y < player.y + 25);

  if (hit.length > 0 && player.hit == false) {
    player.HPhandler("hit");
  }

  player.HPhandler();
}

function render() {
  ctx.clearRect(0, 0, gameFrame.width, gameFrame.height);
  player.draw(gameFrame);

  enemies[current_level].drawPattern(enemies[current_level].level);

  document.getElementById('time').innerText = `${parseInt(enemies[current_level].time / 17)- parseInt(counter / 17)}`;
  
  counter++;
  
  if (counter >= enemies[current_level].time) {
    current_level++;
    counter = 0;
    initialized = false;
    player.isPlaying = false;
    ctx.clearRect(0, 0, gameFrame.width, gameFrame.height);

    document.getElementById("level_up").style.display = "flex";

    if (current_level == 7) {
      alert("You have won!");
      window.location.href = "index.html";
    }
  }
}

let lastUpdate;

function tick() {
  let now = window.Date.now();

  if (lastUpdate) {
    let elapsed = (now-lastUpdate) / 1000;
    lastUpdate = now;

    if (player.isPlaying) {
      // Update all game objects here.
      update(elapsed);
      // ...and render them somehow.
      render();
    }
  } else {
    // Skip first frame, so elapsed is not 0.
    lastUpdate = now;
  }
};

setInterval(tick, 17);