import React, { useEffect, useState } from 'react'
import { Layout, Menu, MenuProps } from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    PieChartOutlined
  } from '@ant-design/icons';
import './index.css'
import axios from 'axios';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
const {Sider} = Layout;

interface PropsType extends RouteComponentProps {
    collapsed: boolean
}
const SiderMenu:React.FC<PropsType> = (props) =>  {
  const {collapsed} = props
  const [menu, setMenu] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:3004/rights?_embed=children').then(res=> {
      setMenu(res.data)
    })
  },[])


  // 原数据类型
  type itemType = {
      id: number;
      title: string;
      key: string;
      pagepermisson: number;
      grade: number;
      children?: itemType[];
  };

  type MenuItem = {
      label: React.ReactNode;
      key: string | number;
      icon?: React.ReactNode;
      children?: MenuItem[];
  };

  function diffTree(list: itemType[]): MenuItem[] {
      return list.filter(itemA=> itemA.pagepermisson === 1).map((item) => {
          const obj = {
              label: item.title,
              key: item.key,
              icon: <PieChartOutlined/>,
              children: item.children?.length && Array.isArray(item.children) ? diffTree(item.children) : undefined
          };
          return obj;
      });
  } 
  const history = useHistory()
  const onSelect: MenuProps['onSelect'] = keys => {
    history.push(keys.key)
  }


  const usehistory = useHistory()
  const selectKeys = [props.location.pathname]
  const openKeys = ["/"+props.location.pathname.split("/")[1]]
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{display:'flex', height:'100%',flexDirection:'column'}}>
          <div className="logo">管理系统</div>
          <div style={{flex:1,overflow:'auto'}}>

            <Menu
                defaultSelectedKeys={selectKeys}
                defaultOpenKeys={openKeys}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={diffTree(menu)}
                onSelect={onSelect}
            />
          </div>
      </div>
    </Sider>
  )
}

export default withRouter(SiderMenu)