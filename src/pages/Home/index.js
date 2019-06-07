import React, { Component } from "react";
import Echarts from "echarts";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  popupScroll(e) {
    console.log(
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight
    ); // 获取
  }


  render() {
    return (
      <div>
        首页
      </div>
    );
  }
}



export default Home;
