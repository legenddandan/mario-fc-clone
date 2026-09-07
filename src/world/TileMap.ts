import { Tile, TileType } from "./Tile";


export class TileMap {


  tiles:Tile[] = [];


  tileSize = 16;


  constructor(
    data:number[][]
  ){

    this.load(data);

  }



  private load(data:number[][]){


    data.forEach(
      (row,y)=>{

        row.forEach(
          (value,x)=>{


            if(value !== TileType.Empty){

              this.tiles.push(
                new Tile(
                  value,
                  x*this.tileSize,
                  y*this.tileSize,
                  this.tileSize
                )
              );

            }

          }
        )

      }
    );


  }



  getSolidTiles(){

    return this.tiles.filter(
      t=>t.isSolid()
    );

  }


}
