(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

window.addEventListener("keydown", onKeyDown, false);

function onKeyDown(event) {
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 32: //space
            //start functie
            break;
    }
}
//neccessary variables
var tickX = 0;
var tickY = 0;

const seed = new Image(10, 10);
seed.src = 'img/seed.png';

//main animation function
function drawStuff() {
    window.requestAnimationFrame(drawStuff);
    var canvas = document.getElementById("overlay");
    var c = canvas.getContext("2d");
    c.clearRect(0, 0, 500, 500);
    c.drawImage(seed, tickX, tickY);
    tickX += 1;
    tickY += 1;
    //console.log(tickX + ", " + tickY);
}
window.requestAnimationFrame(drawStuff);