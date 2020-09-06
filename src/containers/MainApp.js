import React, { useState } from "react";
import { Menu, Layout } from "antd";

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    TableOutlined

} from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import DndTable from "./DndTable";

const { SubMenu } = Menu;

const { Header, Sider, Content } = Layout;

function MainApp() {
    const [collapsed, setCollapsed] = useState(false);

    function toggle() {
        setCollapsed(!collapsed);
    }
    function handleClick(e) {
        console.log('click ', e);
    };

    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                    minHeight: "100vh",
                    overflow: "auto",
                    backgroundColor: "white"
                }}
            >
                <div className="logo">Workspaces</div>
                <Search
                    placeholder="Filter boards..."
                    onSearch={value => console.log(value)}
                    style={{ width: 200, border: "none" }}
                />


                <Menu
                    onClick={handleClick}

                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" style={{ color: "black" }} icon={<HomeOutlined className="menuIcon" />} title="Main">
                        <Menu.Item key="1">Web Design</Menu.Item>


                    </SubMenu>

                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: toggle,
                        }
                    )}

                </Header>

                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <div style={{ marginBottom: "20px" }}><TableOutlined style={{ fontSize: "18px" }} /><span style={{ fontSize: "18px", margin: "0px 10px" }}>Main Table</span></div>
                    <div style={{ marginBottom: "20px" }}><span style={{ fontSize: "16px", margin: "0px 10px", color: "blue" }}>Things To Do</span></div>
                    <DndTable />

                </Content>
            </Layout>
        </Layout >
    );
}
export default MainApp;