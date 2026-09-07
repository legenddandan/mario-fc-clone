import type { LevelData } from "../types/level";


export class LevelLoader {


  static async load(
    path:string
  ):Promise<LevelData>{


    const response =
      await fetch(path);


    if(!response.ok){

      throw new Error(
        `Cannot load ${path}`
      );

    }


    return await response.json();

  }


}
