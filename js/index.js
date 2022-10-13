/** @type {HTMLCanvasElement} */


// initializar ctx
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');


// create player

const player = new Component(218, 550, 60, 110, ctx);

let game = new Game(ctx, 500, 700, player);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.start();
  }
};

// key indings

document.addEventListener('keydown', (e) => {
  
  switch (e.code) {
    case 'ArrowLeft':
      player.left();
      break;
    case 'ArrowRight':
      player.right();
      break;
  }
});

