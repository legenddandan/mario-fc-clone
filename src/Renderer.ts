import {Mario} from "./entities/entities/Mario";


export class Renderer{


  ctx:CanvasRenderingContext2D;



  constructor(
    private canvas:HTMLCanvasElement
  ){

    this.ctx=
      canvas.getContext("2d")!;


  }



  render(mario:Mario){


    const ctx=this.ctx;


    ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );


    // sky

    ctx.fillStyle="#5c94fc";

    ctx.fillRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );



    // ground

    ctx.fillStyle="#8b4513";

    ctx.fillRect(
      0,
      400,
      this.canvas.width,
      80
    );



    // mario placeholder

    ctx.fillStyle="#e52521";

    ctx.fillRect(
      mario.position.x,
      mario.position.y,
      mario.width,
      mario.height
    );


  }


}