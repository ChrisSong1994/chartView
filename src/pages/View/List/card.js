import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, Icon, Modal } from 'antd';
import PropTypes from 'prop-types'

class CardWrap extends Component {
    static propTypes = {
        window: PropTypes.object,
        onDelete: PropTypes.func
    }
    constructor(props) {
        super(props);

    }

    // 删除窗口
    handleDelete(id, name) {
        Modal.confirm({
            title: `是否确定删除 ${name} 窗口吗?`,
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                this.props.onDelete(id)
            }
        });
    }

    // 全屏显示
    handlePreview() {

    }

    render() {
        const { id, name } = this.props.window;
        return (
            <div className="view-list-card">
                <Card
                    title={name}
                    style={{ width: 360 }}
                    actions={[
                        <Icon type="edit" onClick={() => { this.props.history.push(`/view/edit/${id}`) }} />,
                        <i className="iconfont icon-preview" onClick={() => { this.handlePreview() }} />,
                        <Icon type="delete" onClick={() => { this.handleDelete(id, name) }} />
                    ]}  >
                    <div className="view-list-card-content">
                        <img
                            alt={name}
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    </div>
                </Card>
            </div>
        );
    }
}


export default withRouter(CardWrap);
