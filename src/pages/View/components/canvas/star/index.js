import React, { Component } from "react";
class Star extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.draw();
  }
  draw() {
    const context = document.getElementById("canvas_star").getContext("2d");
    const r = 200;
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, 500, 500);
    context.translate(250, 250);
    context.save();
    context.fillStyle = "#eee";
    context.beginPath();
    context.moveTo(r, 0);
    for (let i = 0; i < 9; i++) {
      context.rotate(Math.PI / 5);
      if (i % 2 === 0) {
        context.lineTo((r / 0.525731) * 0.200811, 0);
      } else {
        context.lineTo(r, 0);
      }
    }
    // context.rotate(Math.PI / 6);
    context.closePath();
    context.fill();
    context.restore();
  }

  render() {
    return (
      <canvas id="canvas_star" className="canvas" width="500" height="500" />
    );
  }
}

export default Star;
