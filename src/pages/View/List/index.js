import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, message, Modal, Spin, Form, Input } from "antd";
import { queryWindows, deleteWindow } from 'api/window'
import Card from './card'
import { generateUUID } from 'utils/util'
import "./index.scss";

const FormItem = Form.Item
const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 16
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            windowList: [],
            paganation: {
                page: 1,
                limit: 20
            },
            loading: false,
            createVisible: false
        }
    }

    componentDidMount() {
        this.queryWindows()
    }

    // 查询窗口数据
    queryWindows() {
        const { paganation } = this.state
        this.setState({ loading: true })
        queryWindows(paganation).then(res => {
            if (res.success && res.data) {
                this.setState({
                    windowList: res.data,
                    loading: false
                })
            }
        })
    }

    // 删除
    handleDelete(id) {
        deleteWindow({ id }).then(res => {
            if (res.success) {
                message.success('窗口删除成功！')
                this.queryWindows()
            } else {
                message.success('窗口删除失败！')
            }
        })
    }

    // 创建窗口
    handleCreate() {
        const { name } = this.state
        if (name.trim() !== '') {
            const id = generateUUID()
            this.props.history.push(`/view/edit/${id}`)
        } else {
            message.warning('请输入窗口名称')
        }
    }

    render() {
        const { windowList, createVisible, loading } = this.state
        return (
            <div className="view-list">
                <div className="view-list-head">
                    <Button
                        type="primary"
                        onClick={() => { this.setState({ createVisible: true }) }}>
                        新建窗口
                    </Button>
                </div>

                <Spin spinning={loading}>
                    <div className="view-list-content clearfix">
                        {
                            windowList && windowList.map((window, index) => {
                                return (<Card
                                    window={window}
                                    key={index}
                                    onDelete={(id) => { this.handleDelete(id) }} />)
                            })
                        }
                    </div>
                </Spin>
                <Modal
                    title="新建窗口"
                    visible={createVisible}
                    okText='确认'
                    cancelText='取消'
                    closable={false}
                    destroyOnClose={true}
                    maskClosable={false}
                    onOk={() => { this.handleCreate() }}
                    onCancel={() => { this.setState({ createVisible: false }) }}>
                    <FormItem {...formItemLayout} label="窗口名称">
                        <Input style={{ width: 320 }} placeholder="请输入"
                            onChange={(e) => {
                                this.setState({ name: e.target.value })
                            }} />
                    </FormItem>
                </Modal>
            </div >
        );
    }
}

export default List;
