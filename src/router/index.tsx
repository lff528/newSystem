import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from "../view/login"
import NewsSandBox from  "../view/sandBox/NewsSandBox"

// type propType = {
//     children:any,
//     history: any
//   }
const IndexRouter:React.FC = ()=> {
    return (
        <HashRouter>
            <Switch>
                <Route path='/login' component = {Login}></Route>
                {/* <Route path='/' component = {NewsSandBox}></Route> */}
                <Route path='/' render={()=> 
                    localStorage.getItem('token') ? 
                    <NewsSandBox></NewsSandBox > : <Redirect to="/login"/>
                }></Route>
            </Switch>
        </HashRouter>
    )
}

export default IndexRouter