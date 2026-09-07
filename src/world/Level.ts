import { TileMap } from "./TileMap";
import { CollisionResolver } from "./CollisionResolver";
import { Mario } from "../entities/Mario";


export class Level {


  tileMap:TileMap;


  constructor(
    data:number[][]
  ){

    this.tileMap =
      new TileMap(data);


  }


  resolveMarioCollision(mario: Mario){


    CollisionResolver.resolveMario(
      mario,
      this.tileMap
    );

  }


}
