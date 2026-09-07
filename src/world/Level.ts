import { TileMap } from "./TileMap";
import { CollisionResolver } from "./CollisionResolver";
import { Mario } from "../entities/Mario";
import type { LevelData } from "./LevelLoader";


export class Level {


  tileMap:TileMap;


  spawnX:number;


  spawnY:number;


  constructor(
    data:LevelData
  ){

    this.tileMap =
      new TileMap(data.tiles);


    this.spawnX =
      data.spawn.x;


    this.spawnY =
      data.spawn.y;

  }


  resolveMarioCollision(
    mario: Mario
  ){


    CollisionResolver.resolveMario(
      mario,
      this.tileMap
    );

  }


}
