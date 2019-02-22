import React, { Component } from "react";
import { connect } from "react-redux";
import {addWidget} from "../../store/action";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.addwidget({ "232323": { id: "232323" } });
  }
  render() {
    return <div>this is homekljl</div>;
  }
}

const mapStateToProps = state => {
  return {
    widget: state.widget
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addwidget: widget => {
      dispatch(addWidget(widget));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
