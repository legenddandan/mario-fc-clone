import { Mario } from "./entities/Mario";
import { TileMap, TileType } from "./world/TileMap";
import { Camera } from "./world/Camera";


export class Renderer {


  ctx:CanvasRenderingContext2D;


  constructor(
    private canvas:HTMLCanvasElement
  ){

    this.ctx =
      canvas.getContext("2d")!;

  }


  render(
    mario:Mario,
    camera:Camera,
    tileMap:TileMap
  ){


    const ctx=this.ctx;


    ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );


    // sky

    ctx.fillStyle="#5c94fc";

    ctx.fillRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );


    this.renderTileMap(
      tileMap,
      camera
    );


    this.renderMario(
      mario,
      camera
    );

  }


  private renderMario(
    mario:Mario,
    camera:Camera
  ){


    this.ctx.fillStyle="#e52521";


    this.ctx.fillRect(

      mario.position.x - camera.x,

      mario.position.y - camera.y,

      mario.width,

      mario.height

    );


  }


  renderTileMap(
    tileMap:TileMap,
    camera:Camera
  ){


    for(
      const tile of tileMap.tiles
    ){


      if(tile.type===TileType.Ground){

        this.ctx.fillStyle="#8b4513";

      }


      if(tile.type===TileType.Brick){

        this.ctx.fillStyle="#b87333";

      }


      this.ctx.fillRect(

        tile.x-camera.x,

        tile.y-camera.y,

        tile.size,

        tile.size

      );


    }


  }


}
