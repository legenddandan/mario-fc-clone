import { TileMap } from "./TileMap";
import { CollisionResolver } from "./CollisionResolver";
import { Mario } from "../entities/Mario";


export class Level {


  tileMap:TileMap;


  constructor(){

    this.tileMap =
      new TileMap(
        [
          [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
          ],
          [
            0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0
          ],
          [
            2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
          ]
        ]
      );


  }


  resolveMarioCollision(mario: Mario){


    CollisionResolver.resolveMario(
      mario,
      this.tileMap
    );

  }


}
