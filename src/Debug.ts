export interface DebugStats {
  fps: number;
  marioX: number;
  marioY: number;
  velocityX: number;
  velocityY: number;
}

export class Debug {
  render(
    ctx: CanvasRenderingContext2D,
    width: number,
    stats: DebugStats
  ) {
    const lines = [
      `FPS: ${Math.round(stats.fps)}`,
      "",
      "Mario:",
      `x: ${Math.round(stats.marioX)}`,
      `y: ${Math.round(stats.marioY)}`,
      "",
      "velocity:",
      `x: ${Math.round(stats.velocityX)}`,
      `y: ${Math.round(stats.velocityY)}`
    ];

    ctx.save();

    ctx.fillStyle = "#ffffff";

    ctx.strokeStyle = "rgba(0,0,0,0.7)";

    ctx.lineWidth = 3;

    ctx.font = "12px monospace";

    ctx.textAlign = "right";

    ctx.textBaseline = "top";

    const lineHeight = 14;

    const padding = 6;

    const x = width - padding;

    for (let i = 0; i < lines.length; i++) {
      const y = padding + i * lineHeight;

      const text = lines[i];

      // shadow
      ctx.strokeText(text, x, y);

      ctx.fillText(text, x, y);
    }

    ctx.restore();
  }
}
