export class Bullet {
    constructor(id, speed, looks) {
        this.id = id;
        this.src = looks;
        this.x = 0;
        this.y = 0;
        this.speed = speed;
    }

    draw(ctx) {
        let bulletRender = new Image();
        let x = this.x, y = this.y;

        bulletRender.src = this.src;
        ctx.drawImage(bulletRender, x, y);
    }

    shoot(direction) {
        switch (direction) {
            case 'horizontal':
                this.x += this.speed;
                break;
            case 'vertical':
                this.y += this.speed;
                break;
            case 'diagonal':
                this.x += this.speed;
                this.y += this.speed;
                break;
        }
    }
}