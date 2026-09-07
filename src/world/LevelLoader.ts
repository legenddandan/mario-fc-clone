export interface LevelData {

  width:number;

  height:number;


  spawn:{
    x:number;
    y:number;
  };


  tiles:number[][];

}


export class LevelLoader {


  static async load(
    path:string
  ):Promise<LevelData>{


    const response =
      await fetch(path);


    if(!response.ok){

      throw new Error(
        `Failed loading ${path}`
      );

    }


    return await response.json();

  }


}
