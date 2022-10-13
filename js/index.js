/** @type {HTMLCanvasElement} */

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

// initializar ctx
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');


// create player

const player = new Component(218, 550, 60, 110, ctx);

