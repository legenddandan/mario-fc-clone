import {Input} from "./Input";
import {Renderer} from "./Renderer";
import {Mario} from "./entities/Mario";
import {Level} from "./world/Level";
import { LevelLoader } from "./world/LevelLoader";


export class Game{


  input:Input;

  mario:Mario;

  renderer:Renderer;


  level!:Level;


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



  async init(){

    await this.loadLevel();

  }


  async loadLevel(){

    const data =
      await LevelLoader.load(
        "/levels/world1-1.json"
      );


    this.level =
      new Level(data);

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


    this.renderer.renderTileMap(
      this.level.tileMap
    );


    requestAnimationFrame(
      this.loop.bind(this)
    );


  }



  update(delta:number){

    this.mario.update(delta);

    this.level.resolveMarioCollision(this.mario);

  }


}
