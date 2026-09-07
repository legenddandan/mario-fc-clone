import {Game} from "./Game";


const canvas =
document.querySelector<HTMLCanvasElement>(
  "#game"
)!;


canvas.width=800;

canvas.height=480;


const game =
new Game(canvas);


game.start();