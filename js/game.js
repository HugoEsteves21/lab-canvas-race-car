class Game {
    constructor(ctx, width, height, player) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null
    }

    start() {
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update() {
        this.clear;
        this.player.drawCar();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}