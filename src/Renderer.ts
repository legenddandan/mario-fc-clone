import {Mario} from "./entities/Mario";
import {Debug, type DebugStats} from "./Debug";


export class Renderer{


  ctx:CanvasRenderingContext2D;


  private readonly debug = new Debug();


  private readonly groundHeight = 32;



  constructor(
    private canvas:HTMLCanvasElement
  ){

    this.ctx=
      canvas.getContext("2d")!;


  }

  

  render(mario:Mario, fps:number){


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

    const groundY = this.canvas.height - this.groundHeight;

    ctx.fillRect(
      0,
      groundY,
      this.canvas.width,
      this.groundHeight
    );



    // mario placeholder

    ctx.fillStyle="#e52521";

    ctx.fillRect(
      mario.position.x,
      mario.position.y,
      mario.width,
      mario.height
    );


    this.debug.render(
      ctx,
      this.canvas.width,
      {
        fps,
        marioX:mario.position.x,
        marioY:mario.position.y,
        velocityX:mario.velocity.x,
        velocityY:mario.velocity.y
      } satisfies DebugStats
    );


  }


}
