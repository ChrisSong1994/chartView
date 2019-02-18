import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import "./index.scss";
import Draggle from "components/Draggle";

const widgets = {
  "80204546": {
    left: 50,
    top: 50,
    width: 100,
    height: 100
  }
};
class Editer extends Component {
  constructor() {
    super();
    this.state = {
      editerHight: 0
    };
  }
  addWidget() {}

  componentWillMount() {
    let height =
      document.body.clientHeight || document.documentElement.clientHeight;
    console.log(height);
    this.setState({
      editerHight: height - 64 - 30
    });
  }

  componentDidMount() {
    const el = findDOMNode(this.refs.wrap);
    this.draagle = new Draggle(el, {
      widgets: widgets,
      widget_selector: ".dragger",
      resizeable: {
        handle: ".resize-handle",
        onStart: () => {
          console.log("start resizing");
        },
        onResize: datas => {
          console.log(datas);
        },
        onStop: () => {
          console.log("stop resizing");
        }
      },
      draggable: {
        onStart: () => {
          console.log("start moving");
        },
        onDrag: datas => {
          console.log(datas);
        },
        onStop: datas => {
          console.log("stop moving", datas);
        }
      }
    });

    // window.onrsize
    window.onresize = () => {
      let height =
        document.body.clientHeight || document.documentElement.clientHeight;
      this.setState({
        editerHight: height - 64 - 30
      });
    };
  }

  render() {
    let { editerHight } = this.state;
    return (
      <div className="editer" style={{ height: editerHight }}>
        <div className="left-panel">左侧边栏</div>
        <div ref="wrap" className="content-wrap">
          <div
            className="dragger"
            style={{ background: "blue", width: 100, height: 100 }}
          >
            <span className="resize-handle" />
          </div>
        </div>
        <div className="right-panel">右侧边栏</div>
      </div>
    );
  }
}

export default Editer;
