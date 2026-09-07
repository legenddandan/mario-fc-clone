export enum TileType {

  Empty = 0,

  Ground = 1,

  Brick = 2,

  Question = 3,

  Pipe = 4,

  Cloud = 5,

  Flag = 6

}


export class Tile {


  constructor(
    public type:TileType,
    public x:number,
    public y:number,
    public size:number = 16
  ){}


  isSolid(){

    return (
      this.type === TileType.Ground ||
      this.type === TileType.Brick ||
      this.type === TileType.Question ||
      this.type === TileType.Pipe
    );

  }


}
