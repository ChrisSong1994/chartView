import React, { Component } from "react";

class Widget extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className="dragger"
        style={{ background: "blue", width: 100, height: 100 }}
      >
       <span class="resize-handle"></span>
      </div>
    );
  }
}

export default Widget;
