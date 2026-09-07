import type {CollisionBox} from "./CollisionBox";


export class Collision {


  static intersects(
    a:CollisionBox,
    b:CollisionBox
  ){

    return (
      a.x < b.x+b.width &&
      a.x+a.width > b.x &&
      a.y < b.y+b.height &&
      a.y+a.height > b.y
    );

  }


}
