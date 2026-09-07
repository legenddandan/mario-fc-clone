import {Entity} from "../Entity";
import {Input} from "../Input";


export class Mario extends Entity{


  private input:Input;


  walkSpeed=90;


  runSpeed=160;


  acceleration=700;


  airAcceleration=350;


  friction=0.82;


  airFriction=0.97;


  jumpForce=260;


  gravity=900;


  private maxFallSpeed=900;


  private jumpHoldCut=0.5;


  private ground=208;


  grounded=false;


  private prevJumpPressed=false;


  private isRunning=false;



  constructor(input:Input){


    super(100,176);


    this.input=input;


    this.width=24;

    this.height=32;


  }



  update(delta:number){


    this.handleInput(delta);


    this.applyHorizontalMovement(delta);


    this.applyJump(delta);


    this.applyGravity(delta);


    this.applyMovement(delta);


    this.applyGroundCollision();


    this.prevJumpPressed =
      this.input.isDown("ArrowUp");

  }



  private handleInput(_delta:number){


    this.isRunning =
      this.input.isDown("ShiftLeft")
      ||
      this.input.isDown("ShiftRight");


  }


  private applyHorizontalMovement(delta:number){


    const left = this.input.isDown("ArrowLeft");


    const right = this.input.isDown("ArrowRight");


    const inputX =
      (left ? -1 : 0)
      +
      (right ? 1 : 0);


    if(inputX===0){


      this.applyFriction(delta);


      return;


    }


    const maxSpeed =
      this.isRunning
        ? this.runSpeed
        : this.walkSpeed;


    const accel =
      this.grounded
        ? this.acceleration
        : this.airAcceleration;


    const deltaVelocity =
      inputX * accel * delta;


    this.velocity.x +=
      deltaVelocity;


    const targetDirection =
      this.velocity.x >= 0
        ? 1
        : -1;


    const shouldClamp =
      targetDirection ===
      Math.sign(inputX);


    if(
      shouldClamp
      &&
      Math.abs(this.velocity.x) > maxSpeed
    ){


      this.velocity.x =
        Math.sign(inputX) * maxSpeed;


    }


    if(!shouldClamp){


      if(
        Math.abs(this.velocity.x) < 5
      ){


        this.velocity.x =
          Math.sign(inputX) * 5;


      }


    }


  }


  private applyFriction(delta:number){


    const damping =
      this.grounded
        ? this.friction
        : this.airFriction;


    this.velocity.x *=
      Math.pow(damping, delta * 60);


    if(
      Math.abs(this.velocity.x) < 0.01
    ){


      this.velocity.x=0;


    }


  }


  private applyJump(delta:number){


    const jumpDown =
      this.input.isDown("ArrowUp");


    if(
      jumpDown
      &&
      !this.prevJumpPressed
      &&
      this.grounded
    ){


      this.velocity.y =
        -this.jumpForce;


      this.grounded =
        false;


    }


    if(
      !jumpDown
      &&
      this.prevJumpPressed
      &&
      !this.grounded
      &&
      this.velocity.y < 0
    ){


      this.velocity.y *=
        this.jumpHoldCut;


    }


  }


  private applyGravity(delta:number){


    this.velocity.y +=
      this.gravity * delta;


    if(this.velocity.y > this.maxFallSpeed){


      this.velocity.y =
        this.maxFallSpeed;


    }


  }


  private applyMovement(delta:number){


    this.position.x +=
      this.velocity.x * delta;


    this.position.y +=
      this.velocity.y * delta;


  }


  private applyGroundCollision(){


    if(this.position.y + this.height >= this.ground){


      this.position.y =
        this.ground - this.height;


      this.velocity.y =
        0;


      this.grounded =
        true;


    }


  }



}
