import React from 'react'
import './index.scss'
import { Button } from 'antd'
// import { type } from '@testing-library/user-event/dist/type'

type propType = {
  children:any,
  history: any
}

const Login:React.FC<propType> = ({history})=> {
  const loginBtn = ()=> {
    history.push('/home')
  }
  return (
    <div className='login_wrap'>
        login
      <Button type='primary' onClick={loginBtn}>登陆</Button>
    </div>
  )
}

export default Login