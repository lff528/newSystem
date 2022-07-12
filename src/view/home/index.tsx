import React from 'react'
import menuList from "../../routerConfig/index"
import { HashRouter as Router, Switch, Route ,Redirect,useHistory, withRouter, RouteComponentProps} from "react-router-dom";
import type { MenuProps } from 'antd';
import {Layout, Menu, Row, Col} from 'antd';
const { Header, Content, Sider } = Layout;

interface propsType extends RouteComponentProps {
    sideStatus?: boolean
}

const Home:React.FC<propsType>= (props)=> {

  const History = useHistory()
  type MenuItem = Required<MenuProps>['items'][number];
  const items:MenuItem[] = menuList
  
  const onClick : MenuProps['onClick'] = e => {
    console.log(e,History);
    
    // History.push(e.key)
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
                        <Redirect from='/home' exact to='/couponManagement' /> 
                        {
                            menuList.map(item => {
                                return item.children.map(itemA => {
                                    return <Route path={itemA.key} component={itemA.component}></Route>
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

export default withRouter(Home)