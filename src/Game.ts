import {Input} from "./Input";
import {Renderer} from "./Renderer";
import {Mario} from "./entities/Mario";


export class Game{


  input:Input;

  mario:Mario;

  renderer:Renderer;


  lastTime=0;



  constructor(
    private canvas:HTMLCanvasElement
  ){

    this.input=new Input();

    this.mario=
      new Mario(this.input);


    this.renderer=
      new Renderer(canvas);


  }



  start(){

    requestAnimationFrame(
      this.loop.bind(this)
    );

  }



  loop(time:number){


    const delta =
      (time-this.lastTime)/1000;


    this.lastTime=time;


    this.update(delta);


    this.renderer.render(
      this.mario
    );



    requestAnimationFrame(
      this.loop.bind(this)
    );


  }



  update(delta:number){

    this.mario.update(delta);

  }


}