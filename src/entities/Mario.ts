import {Entity} from "./Entity";
import {Input} from "../Input";


export class Mario extends Entity{


  private input:Input;


  speed=120;

  jumpPower=260;

  gravity=700;


  grounded=false;



  constructor(input:Input){

    super(100,300);

    this.input=input;

    this.width=24;
    this.height=32;

  }



  update(delta:number){


    this.velocity.x=0;


    if(this.input.isDown("ArrowLeft")){

      this.velocity.x=-this.speed;

    }


    if(this.input.isDown("ArrowRight")){

      this.velocity.x=this.speed;

    }



    if(
      this.input.isDown("ArrowUp")
      &&
      this.grounded
    ){

      this.velocity.y=-this.jumpPower;

      this.grounded=false;

    }



    this.velocity.y += this.gravity * delta;



    this.position.x += this.velocity.x * delta;

    this.position.y += this.velocity.y * delta;



    // 临时地面

    const ground=400;


    if(
      this.position.y + this.height >= ground
    ){

      this.position.y =
        ground-this.height;


      this.velocity.y=0;

      this.grounded=true;

    }

  }



}