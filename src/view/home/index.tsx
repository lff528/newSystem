import React from 'react'
import menuList from "../../routerConfig/index"
import { HashRouter as Router, Switch, Route, Link ,Redirect,useHistory} from "react-router-dom";
import type { MenuProps } from 'antd';
// import { type } from '@testing-library/user-event/dist/type';
import {Layout, Menu, Row, Col, Dropdown,} from 'antd';
import { SnippetsFilled, PieChartFilled, ApiFilled, PieChartOutlined ,DownOutlined} from '@ant-design/icons';
const { Header, Content, Sider } = Layout;



type PropsType = {
    history: any,
    match: any
}
const Home:React.FC<PropsType> = (props)=> {

  const History = useHistory()
  type MenuItem = Required<MenuProps>['items'][number];
  const items:MenuItem[] = menuList
  
  const onClick : MenuProps['onClick'] = e => {
    History.push(props.match.path+e.key)
  }
  return (
    <Layout style={{ height: '100vh' }}>
    <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', paddingLeft: '20px' }}>
        <Row>
            <Col span={10}><div className="logo" style={{ color: "#ffffff", fontSize: '32px', fontWeight: 'bold' }}>React App</div></Col>
            <Col span={2} offset={12} style={{ textAlign: 'right' }}>
                {/* <Dropdown   trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        admin
                        <DownOutlined />
                    </a>
                </Dropdown> */}
            </Col>
        </Row>

    </Header>
    <Layout   style={{ height: '100%' }}>
        <Sider width={200} style={{ background: '#000000' }} className="site-layout-background" >
          
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%', borderRight: 0, paddingTop: '60px' }}
                items={items}
                onClick={onClick}
            > 
            </Menu>
        </Sider>
        <Layout   className="site-layout" style={{ paddingTop: 64 }}>
            <Content
                className="site-layout-background"
                style={{
                    padding: 15,
                    margin: 0,
                    height: '100%',
                    overflow: 'auto'
                }}
            >
                <Router>
                    <Switch>
                        <Redirect from='/home' exact to='/home/couponManagement' /> 
                        {
                            menuList.map(item => {
                                return item.children.map(itemA => {
                                    return <Route path={item.key+itemA.key} component={itemA.component}></Route>
                                })
                            })
                        }
                    </Switch>
                </Router>
            </Content>
        </Layout>
    </Layout>
</Layout>
  )
}

export default Home