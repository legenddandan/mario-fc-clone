import {Game} from "./Game";


const logicalWidth = 256;


const logicalHeight = 240;


const scale = 3;


const canvas =
document.querySelector<HTMLCanvasElement>(
  "#game"
)!;


canvas.width = logicalWidth;


canvas.height = logicalHeight;


canvas.style.width = `${logicalWidth * scale}px`;


canvas.style.height = `${logicalHeight * scale}px`;


const game =
new Game(canvas);


await game.init();


game.start();
