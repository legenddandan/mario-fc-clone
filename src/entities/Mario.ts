import { Entity } from "../Entity";
import { Input } from "../Input";


export class Mario extends Entity {

  private input: Input;


  // ===== FC 风格移动参数 =====

  // 最大速度
  walkSpeed = 90;

  runSpeed = 150;


  // 加速度
  acceleration = 700;

  // 摩擦力
  friction = 0.82;


  // 跳跃
  jumpForce = 320;

  gravity = 900;


  // 空中控制比例
  airControl = 0.45;


  // 状态

  grounded = false;

  facing = 1;


  private jumpHeld = false;


  constructor(input: Input) {

    super(40, 150);

    this.input = input;

    this.width = 16;
    this.height = 24;

  }



  update(delta:number){


    this.handleMovement(delta);

    this.handleJump();

    this.applyGravity(delta);


    this.position.x += this.velocity.x * delta;

    this.position.y += this.velocity.y * delta;


    // ground collision is now handled outside Mario,
    // so only movement/jump/gravity updates remain here.


  }



  private handleMovement(delta:number){


    let direction = 0;


    if(this.input.isDown("ArrowLeft")){

      direction=-1;

    }


    if(this.input.isDown("ArrowRight")){

      direction=1;

    }



    if(direction!==0){


      this.facing=direction;


      const acceleration =
        this.grounded
        ? this.acceleration
        : this.acceleration*this.airControl;



      this.velocity.x +=
        direction * acceleration * delta;



      const maxSpeed =
        this.input.isDown("KeyZ")
        ? this.runSpeed
        : this.walkSpeed;


      if(this.velocity.x > maxSpeed){

        this.velocity.x=maxSpeed;

      }

      if(this.velocity.x < -maxSpeed){

        this.velocity.x=-maxSpeed;

      }


    }
    else {


      // 摩擦减速

      this.velocity.x *= this.friction;


      if(Math.abs(this.velocity.x)<1){

        this.velocity.x=0;

      }


    }


  }



  private handleJump(){


    const jump =
      this.input.isDown("ArrowUp");



    // 起跳

    if(
      jump &&
      this.grounded &&
      !this.jumpHeld
    ){

      this.velocity.y=-this.jumpForce;

      this.grounded=false;

    }


    this.jumpHeld=jump;



    // 松开提前下降

    if(
      !jump &&
      this.velocity.y < -100
    ){

      this.velocity.y*=0.5;

    }


  }


  private applyGravity(delta:number){


    this.velocity.y +=
      this.gravity*delta;


  }



}
