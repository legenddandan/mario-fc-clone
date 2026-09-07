export interface EntityData {

  type: string;

  x: number;

  y: number;

}


export interface LevelData {

  width: number;

  height: number;


  spawn: {
    x: number;
    y: number;
  };


  entities: EntityData[];


  tiles: number[][];

}
