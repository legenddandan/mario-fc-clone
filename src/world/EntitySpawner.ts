import { Goomba } from "../entities/Goomba";
import type { EntityData } from "../types/level";
import { Entity } from "../Entity";


export class EntitySpawner {


  static create(
    data: EntityData[]
  ){

    const entities: Entity[] = [];

    for(const item of data){

      switch(item.type){

        case "goomba":

          entities.push(
            new Goomba(
              item.x,
              item.y
            )
          );

          break;

      }

    }

    return entities;

  }


}
