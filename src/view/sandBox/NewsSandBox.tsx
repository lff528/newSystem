import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SiderMenu from '../../compontents/sandBox/SiderMenu'
import TopHeader from '../../compontents/sandBox/TopHeader'
import Home from './home/Home'
import NoPermission from './nopermission/NoPermission'
import RightList from './right-managemnet/RightList'
import RoleList from './right-managemnet/RoleList'
import UserList from './user-managemnet/UserList'
import './NewsSandBox.css'

import { Layout } from 'antd';
const { Content } = Layout;


export default function NewsSandBox() { 

  return (
    <Layout>
        <SiderMenu collapsed= {false}></SiderMenu>
        <Layout className="site-layout">
            <TopHeader></TopHeader>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    overflow: 'auto'
                }}
                >
                <Switch>
                    <Route path='/home' component={ Home }></Route>
                    <Route path='/user-manage/list' component = { UserList }></Route>
                    <Route path='/right-manage/role/list' component = { RoleList }></Route>
                    <Route path='/right-manage/right/list' component = { RightList }></Route>
                    <Redirect from='/' to='/home' exact/>
                    <Route path='*' component={ NoPermission }></Route>
                </Switch>
            </Content>
           
        </Layout>
        
    </Layout>
  )
}
