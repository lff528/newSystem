import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    PieChartOutlined
  } from '@ant-design/icons';
import './index.css'
import type { MenuProps } from 'antd';
const {Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];
type PropsType = {
    collapsed: boolean
}
const SiderMenu:React.FC<PropsType> = (props) =>  {
    const {collapsed} = props

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        } as MenuItem;
    }
  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <PieChartOutlined />),
    getItem('Option 3', '3', <PieChartOutlined />),
  
    getItem('Navigation One', 'sub1', <PieChartOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  
    getItem('Navigation Two', 'sub2', <PieChartOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
    ]),
  ];
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">管理系统</div>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
        />
    </Sider>
  )
}

export default SiderMenu