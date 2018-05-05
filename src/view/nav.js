import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

export default class Nav extends Component {
    render() {
        let {mode,id} = this.props;
        return (
            <Menu mode={mode} id={id}>
                <Menu.Item key="1">
                    <Link to="/index"><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/book">教程</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/about">关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}