import { TileMap } from "./TileMap";
import { CollisionResolver } from "./CollisionResolver";
import { Mario } from "../entities/Mario";
import type { LevelData } from "../types/level";
import { EntitySpawner } from "./EntitySpawner";
import { Entity } from "../Entity";


export class Level {


  tileMap:TileMap;


  spawnX:number;


  spawnY:number;


  entities:Entity[] = [];


  constructor(
    data:LevelData
  ){

    this.tileMap =
      new TileMap(data.tiles);


    this.spawnX =
      data.spawn.x;


    this.spawnY =
      data.spawn.y;


    this.entities =
      EntitySpawner.create(
        data.entities ?? []
      );

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
