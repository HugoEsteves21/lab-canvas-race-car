/** @type {HTMLCanvasElement} */

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.update();
    console.log('tou ca')
  }
};

// initializar ctx
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');


// create player

const player = new Component(218, 550, 60, 110, ctx);

let game = new Game(ctx, 500, 700, player);

// key indings

document.addEventListener('keydown', (e) => {
  
  switch (e.code) {
    case 'ArrowLeft':
      player.x -= 10;
      console.log('aqui tbm')
      break;
    case 'ArrowRight':
      player.x += 10;
      break;
  }
})

