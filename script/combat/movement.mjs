export function move(x, y) {
    window.addEventListener("keydown", onKeyDown, false);
    window.addEventListener("keyup", onKeyUp, false);

    let keyW = false,
        keyA = false,
        keyS = false,
        keyD = false;
    
    function onKeyDown(e) {
        switch (e.keyCode) {
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
    
    function onKeyUp(e) {
        switch (e.keyCode) {
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
}