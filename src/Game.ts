import {Input} from "./Input";
import {Renderer} from "./Renderer";
import {Mario} from "./entities/Mario";


export class Game{


  input:Input;

  mario:Mario;

  renderer:Renderer;


  lastTime=0;


  private fixedStep = 1 / 60;


  private accumulator = 0;


  private fpsAccum = 0;


  private fpsFrames = 0;


  private fps = 0;


  constructor(
    private canvas:HTMLCanvasElement
  ){

    this.input = new Input();

    this.mario =
      new Mario(this.input);


    this.renderer =
      new Renderer(canvas);


  }



  start(){

    requestAnimationFrame(
      this.loop.bind(this)
    );

  }



  loop(time:number){


    if(this.lastTime===0){

      this.lastTime=time;

      requestAnimationFrame(
        this.loop.bind(this)
      );

      return;

    }


    const delta =
      (time - this.lastTime) / 1000;


    this.lastTime = time;


    const clampedDelta =
      Math.min(delta, 0.1);


    this.accumulator += clampedDelta;


    while(
      this.accumulator >= this.fixedStep
    ){

      this.update(this.fixedStep);

      this.accumulator -= this.fixedStep;

    }


    this.fpsAccum += clampedDelta;

    this.fpsFrames += 1;


    if(this.fpsAccum >= 1){

      this.fps =
        this.fpsFrames / this.fpsAccum;

      this.fpsAccum = 0;

      this.fpsFrames = 0;

    }


    this.renderer.render(
      this.mario,
      this.fps
    );


    requestAnimationFrame(
      this.loop.bind(this)
    );


  }



  update(delta:number){

    this.mario.update(delta);

    this.mario.resolveGround(216);

  }


}
