export class Camera {


  x = 0;

  y = 0;


  width:number;

  height:number;


  constructor(
    width:number,
    height:number
  ){

    this.width = width;

    this.height = height;

  }



  follow(
    targetX:number,
    targetY:number,
    worldWidth:number,
    worldHeight:number
  ){


    // 让目标保持在屏幕中间偏左

    this.x =
      targetX - this.width * 0.35;


    this.y =
      targetY - this.height * 0.5;



    // 限制左边界

    if(this.x < 0){

      this.x = 0;

    }


    // 限制上边界

    if(this.y < 0){

      this.y = 0;

    }


    // 限制右边界

    if(
      this.x + this.width > worldWidth
    ){

      this.x =
        worldWidth - this.width;

    }



    // 限制下边界

    if(
      this.y + this.height > worldHeight
    ){

      this.y =
        worldHeight - this.height;

    }


  }


}
