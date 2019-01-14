import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.param = {};
    this.timer = null;
    this.width =  this.height = 200;
  }

  componentDidMount() {
    var canvas = document.getElementById("canvas_timer");
    var cxt = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var r = width / 2;
    var rem = width / 200; // 比例
    this.param = Object.assign({}, { cxt, width, height, r, rem });
    this.draw();
    this.timer = setInterval(() => {
      this.draw();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  draw() {
    const { cxt, width, height, r, rem } = this.param;
    cxt.clearRect(0, 0, width, height);
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.drawBg();
    this.drawHour(hour, minute);
    this.drawMinute(minute);
    this.drawSecond(second);
    this.drawDot();
    cxt.restore();
  }

  // 先画静态元素
  drawBg() {
    const { cxt, width, height, r, rem } = this.param;
    // 重置原点
    cxt.save();
    cxt.translate(r, r);
    // 时钟外圈
    cxt.beginPath();
    cxt.arc(0, 0, r - 5 * rem, 0, Math.PI * 2, true);
    cxt.lineWidth = 8 * rem;
    cxt.stroke();

    // 小时数
    const hour = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    hour.forEach((num, i) => {
      const rad = ((Math.PI * 2) / 12) * i; // 小时对应的角度
      const x = Math.cos(rad) * (r - 30 * rem);
      const y = Math.sin(rad) * (r - 30 * rem);
      cxt.font = 18 * rem + "px sans-serif";
      cxt.textAlign = "center";
      cxt.textBaseline = "middle";
      cxt.fillText(num, x, y);
    });
  }

  // 画动态元素

  // 时针
  drawHour(hour, minute) {
    const { cxt, width, height, r, rem } = this.param;
    cxt.save();
    const rad = (hour / 12 + minute / (60 * 12)) * Math.PI * 2;
    cxt.beginPath();
    cxt.rotate(rad);
    cxt.moveTo(0, 15 * rem);
    cxt.lineTo(0, -r / 2);
    cxt.lineWidth = 5 * rem;
    cxt.lineCap = "round";
    cxt.stroke();
    cxt.restore();
  }

  // 分针
  drawMinute(minute) {
    const { cxt, width, height, r, rem } = this.param;
    const rad = Math.PI * 2 * (minute / 60);
    cxt.save();
    cxt.beginPath();
    cxt.rotate(rad);
    cxt.moveTo(0, 18 * rem);
    cxt.lineTo(0, -r + 40 * rem);
    cxt.lineWidth = 3 * rem;
    cxt.lineCap = "round";
    cxt.stroke();
    cxt.restore();
  }

  // 分针
  drawSecond(second) {
    const { cxt, width, height, r, rem } = this.param;
    cxt.save();
    const rad = Math.PI * 2 * (second / 60);
    cxt.rotate(rad);
    cxt.moveTo(0, 25 * rem);
    cxt.lineTo(2 * rem, 25 * rem);
    cxt.lineTo(-2 * rem, 25 * rem);
    cxt.lineTo(-1 * rem, -r + 25 * rem);
    cxt.lineTo(1 * rem, -r + 25 * rem);
    cxt.lineTo(2 * rem, 25 * rem);
    cxt.lineWidth = 1 * rem;
    cxt.fillStyle = "#f00";
    cxt.fill();
    cxt.restore();
  }

  // 画中心点
  drawDot() {
    const { cxt, width, height, r, rem } = this.param;
    cxt.beginPath();
    cxt.arc(0, 0, 4 * rem, 0, 2 * Math.PI, true);
    cxt.fillStyle = "#fff";
    cxt.fill();
  }

  render() {
    return (
      <canvas id="canvas_timer" className="canvas" width={this.width} height={this.height} />
    );
  }
}
