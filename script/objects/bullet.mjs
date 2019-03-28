export class Bullet {
    constructor(id, looks) {
        this.id = id;
        this.src = looks;
        this.x = 0;
        this.y = 0;
    }

    draw() {
        const ctx = gameFrame.getContext('2d');
        let bulletRender = new Image();
        let x = this.x, y = this.y;

        bulletRender.onload = function() {
            ctx.drawImage(bulletRender, x, y);
        };
        bulletRender.src = this.src;

    }

    shoot(direction) {
        switch (direction) {
            case 'horizontal':
                this.x += 1;
                break;
            case 'vertical':
                this.y += 1;
                break;
            case 'diagonal':
                this.x += 1;
                this.y += 1;
                break;
        }
    }
}