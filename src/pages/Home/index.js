import React, { Component } from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const Option = Select.Option;
import { addWidget } from "../../store/action";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.addwidget({ "232323": { id: "232323" } });
  }
  popupScroll(e){
    console.log(e.target.scrollHeight-e.target.scrollTop-e.target.clientHeight)  // 获取
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={this.handleChange}
          onPopupScroll={e=>{this.popupScroll(e)}}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="scscc">scscc</Option>
          <Option value="ssdsddsd">ssdsddsd</Option>
          <Option value="scscscscsc">scscscscsc</Option>
          <Option value="fbfbbfbfb">fbfbbfbfb</Option>
          <Option value="Yiminghe1">yiminghe1</Option>
          <Option value="Yiminghe2">yiminghe2</Option>
          <Option value="Yiminghe3">yiminghe3</Option>
          <Option value="Yiminghe4">yiminghe4</Option>
          <Option value="Yiminghe5">yiminghe5</Option>
        </Select>
      </div>
    );
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
