import { TileMap } from "./TileMap";


export class Level {


  tileMap:TileMap;


  constructor(){

    this.tileMap =
      new TileMap(
        [
          [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
          ],
          [
            0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0
          ],
          [
            2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
          ]
        ]
      );


  }


}
