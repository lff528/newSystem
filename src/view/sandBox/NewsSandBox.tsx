import Sider from 'antd/lib/layout/Sider'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SiderMenu from '../../compontents/sandBox/SiderMenu'
import TopHeader from '../../compontents/sandBox/TopHeader'
import Home from './home/Home'
import NoPermission from './nopermission/NoPermission'
import RightList from './right-managemnet/RightList'
import RoleList from './right-managemnet/RoleList'
import UserList from './user-managemnet/UserList'

export default function NewsSandBox() { 
  return (
    <div>
        <SiderMenu></SiderMenu>
        <TopHeader></TopHeader>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/user/management/list' component = {UserList}></Route>
            <Route path='/right/management/role/list' component = {RoleList}></Route>
            <Route path='/right/management/right/list' component = {RightList}></Route>
            <Redirect from='/' to='/home' exact/>
            <Route path='*' component={NoPermission}></Route>
        </Switch>
    </div>
  )
}
