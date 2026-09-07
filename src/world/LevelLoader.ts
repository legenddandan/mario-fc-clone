export class LevelLoader {


  static async load(
    path:string
  ):Promise<number[][]>{


    const response =
      await fetch(path);


    if(!response.ok){

      throw new Error(
        `Failed loading level: ${path}`
      );

    }


    return await response.json();

  }


}
