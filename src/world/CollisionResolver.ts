import { Mario } from "../entities/Mario";
import { TileMap } from "./TileMap";


export class CollisionResolver {


  static resolveMario(
    mario: Mario,
    tileMap: TileMap
  ){


    mario.grounded = false;


    for(const tile of tileMap.getSolidTiles()){


      const marioBottom =
        mario.position.y + mario.height;


      const tileTop =
        tile.y;


      const overlapX =
        mario.position.x < tile.x + tile.size &&
        mario.position.x + mario.width > tile.x;


      const falling =
        mario.velocity.y >= 0;


      if(
        overlapX &&
        falling &&
        marioBottom >= tileTop &&
        mario.position.y < tileTop
      ){

        mario.position.y =
          tileTop - mario.height;


        mario.velocity.y = 0;


        mario.grounded = true;


      }


    }


  }


}
