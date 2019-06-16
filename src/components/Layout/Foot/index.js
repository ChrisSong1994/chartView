import React, { Component } from "react";
import { Layout } from "antd";
const { Footer } = Layout;

class Foot extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Footer
        style={{ textAlign: "center", height: "30px", padding: "5px 10px" }}
      >
        created by song @2019
      </Footer>
    );
  }
}

export default Foot;
