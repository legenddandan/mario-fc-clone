export enum TileType {
  Empty = 0,
  Brick = 1,
  Ground = 2
}


export class Tile {

  constructor(
    public type: TileType,
    public x: number,
    public y: number,
    public size:number = 16
  ){}


  isSolid(){

    return (
      this.type === TileType.Brick ||
      this.type === TileType.Ground
    );

  }


}
