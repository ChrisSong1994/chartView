import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";


class List extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="view-type">
                    <Link to="/view/edit">
                        <Button type="primary">新建窗口</Button>
                    </Link>
                </div> 窗口列表</div>
        );
    }
}


export default List;
