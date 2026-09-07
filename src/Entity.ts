import type { Vector2 } from "./types/game";


export abstract class Entity {


  position:Vector2;


  velocity:Vector2;


  width:number=16;

  height:number=16;


  constructor(x:number,y:number){

    this.position={
      x,
      y
    };


    this.velocity={
      x:0,
      y:0
    };

  }



  abstract update(delta:number):void;


}