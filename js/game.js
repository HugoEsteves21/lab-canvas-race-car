class Game {
    constructor(ctx, width, height, player) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
    }

    start() {
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    update = () => {
        this.frames++;
        this.clear();
        this.player.drawCar();
        //this.updateObstacles();
    }

    stop() {
        clearInterval(this.intervalId);
    }

    /* updateObstacles() {
        
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].x -= 1;
            this.obstacles[i].drawObstacle();
        }
        
        
        if (this.frames % 180 === 0) {
            
            let x = 1200;
            
            // calculate the height of the columns
            let minHeight = 20;
            let maxHeight = 400;

            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)

            // these variables control the size of the gap between
            let minGap = 75;
            let maxGap = 200;

            let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            // add the obstacles to the array
            // top obstacle
            this.obstacles.push(new Component(x, 0, 50, height, 'green', this.ctx))
            
            // bottom obstacle
            this.obstacles.push(new Component(x, height + gap, 50, x - height - gap, 'green', this.ctx))
        };
    } */
}