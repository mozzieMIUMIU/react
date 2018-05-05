import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Layout, Row, Col, Divider, Icon, Dropdown, Button} from "antd";
import Nav from "./nav"
export default class MainHeader extends Component{
    render(){
        return (<Layout.Header>
                <Row className="header">
                    <Col md={6} xs={24}>
                        <h1 id="logo">logo</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider type="vertical" className="header_divider"/>

                        <Nav mode="horizontal" id="nav"/>
                        {/* <Menu mode="horizontal" id="nav">
                            <Menu.Item key="1">
                                <Link to="/index"><Icon type="home"/>首页</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/book">教程</Link>      
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/about">关于</Link>      
                            </Menu.Item>
                        </Menu> */}
                    </Col>
                    {/* 小屏幕 */}
                    <Col md={0} xs={24} className="xsNav">
                        <Dropdown overlay={
                            <Nav mode="vertical" id="xsNav"/>
                        }>
                            <Button>
                                <Icon type="bars"/>
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>);
    }
}