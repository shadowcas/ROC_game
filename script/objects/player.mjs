export class Player {
    constructor(speed, startHP, looks) {
        this.speed = speed * 10;
        this.health = startHP;
        this.src = looks;
        this.hit = false;
        this.x = 0;
        this.y = 0;
        this.W = false,
        this.A = false,
        this.S = false,
        this.D = false;
    }

    draw(gameFrame) {
        const ctx = gameFrame.getContext('2d');
        let render = new Image();

        render.src = this.src;
        ctx.drawImage(render, this.x, this.y);
    }

    HPhandler(hit) {
        if (hit) {
            this.health--;
        }
    }

    move(k, kc, gameFrame) {
        if (k == "keydown") {
            switch (kc) {
                case 68: //d
                    this.D = true;
                    break;
                case 83: //s
                    this.S = true;
                    break;
                case 65: //a
                    this.A = true;
                    break;
                case 87: //w
                    this.W = true;
                    break;
            }
        }
        if (k == "keyup") {
            switch (kc) {
                case 68: //d
                    this.D = false;
                    break;
                case 83: //s
                    this.S = false;
                    break;
                case 65: //a
                    this.A = false;
                    break;
                case 87: //w
                    this.W = false;
                    break;
            }
        }
    }
    calc() {
        // console.log(this.A, this.S, this.D, this.W);
        if (this.D && (this.x + 30) <= gameFrame.width) {this.x += this.speed}
        if (this.S && (this.y + 30) <= gameFrame.height) {this.y += this.speed}
        if (this.A && (this.x - 10) >= 0) {this.x -= this.speed}
        if (this.W && (this.y - 10) >= 0) {this.y -= this.speed}
    }    
}