import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Tool extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        window: PropTypes.object
    };
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props.window
        return (
            <div className="tools clearfix">
                <div className="options-edit">
                    <span className="iconfont icon ops-btn icon-repeal"> </span>
                    <span className="iconfont icon ops-btn icon-recover">  </span>
                </div>
                <div className="window-title">
                    {name}
                </div>
                <div className="options-window">
                    <span className="iconfont icon ops-btn icon-save">  </span>
                    <span className="iconfont icon ops-btn icon-preview">  </span>
                    <span className="iconfont icon ops-btn icon-full-screen">  </span>
                    {/* 返回 */}
                    <Link to="/view"><span className="iconfont icon ops-btn icon-return"> </span></Link>
                </div>
            </div>
        );
    }
}
export default Tool