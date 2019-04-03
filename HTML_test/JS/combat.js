(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

//event listener
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(event) {
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 68: //d
            keyD = true;
            break;
        case 83: //s
            keyS = true;
            break;
        case 65: //a
            keyA = true;
            break;
        case 87: //w
            keyW = true;
            break;
    }
}

function onKeyUp(event) {
    var keyCode = event.keyCode;

    switch (keyCode) {
        case 68: //d
            keyD = false;
            break;
        case 83: //s
            keyS = false;
            break;
        case 65: //a
            keyA = false;
            break;
        case 87: //w
            keyW = false;
            break;
    }
}

//neccessary variables
var tickX = 85;
var tickY = 85;

var seedX = 0;
var seedY = 0;

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

const image = new Image(25, 25);
image.src = 'img/heart.png';

const heart_grace = new Image(25, 25);
heart_grace.src = 'img/heart_grace.png';

const seed = new Image(10, 10);
seed.src = 'img/seed.png';

let grace = false;
let graceTime = 0;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//main animation function
function drawStuff() {
    window.requestAnimationFrame(drawStuff);
    var canvas = document.getElementById("battle");
    var c = canvas.getContext("2d");
    c.clearRect(0, 0, 200, 200);

    if(grace == false) {
        c.drawImage(image, tickX, tickY);
    } else {
        c.drawImage(heart_grace, tickX, tickY);
    }
    
    if (keyD == true && (tickX + 1) != 176) {
        tickX += 1;
    }
    if (keyS == true && (tickY + 1) != 176) {
        tickY += 1;
    }
    if (keyA == true && (tickX + 1) != -1) {
        tickX--;
    }
    if (keyW == true && (tickY - 1) != -1) {
        tickY--;
    }
    //console.log(tickX + ", " + tickY);

    //detect collision
    if(seedX > tickX - 15 && seedX < tickX + 15 && seedY > tickY - 15 && seedX < tickY + 15 && grace == false) {
        console.log('hit');
        grace = true;
    }

    if(grace == true) {
        graceTime++;
        if(graceTime == 250) {
            grace = false;
            graceTime = 0;
        }
    }

    //Attack
    c.drawImage(seed, seedX, seedY);
    if(seedX != 190) {
        seedX++;
        seedY++;
    } else {
        seedX = 0;
        seedY = 0;
    }
}
window.requestAnimationFrame(drawStuff);