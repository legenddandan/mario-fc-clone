import {Entity} from "../Entity";


export class Goomba extends Entity {


  speed = 30;


  constructor(
    x:number,
    y:number
  ){

    super(x,y);

    this.width = 16;

    this.height = 16;

    this.velocity.x =
      -this.speed;

  }


  update(delta:number){


    this.velocity.y +=
      900 * delta;


    this.position.x +=
      this.velocity.x * delta;


    this.position.y +=
      this.velocity.y * delta;


  }


}
