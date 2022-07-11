import React, { useState } from 'react'
import { PieChartOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Layout } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false);
    const changeCollapsed = ()=> {
        setCollapsed(!collapsed)
    }
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: 'admin',
            },
           
            {
                key: '4',
                danger: true,
                label: '退出',
              },
            ]}
          />
        );
    return (
        <Header className="site-layout-background" style={{ padding: '0 16px' }}>
            { collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed}/>}

            <div style={{float:'right'}}>
                <span style={{ marginRight:'10px'}}>欢迎admin回来</span>
                <Dropdown overlay={menu}>
                    <Space>
                        <PieChartOutlined />
                    </Space>
                </Dropdown>
            </div>
        </Header>
    )
}
