import axios from 'axios'
import React, { useEffect } from 'react'

const CouponManagement:React.FC = ()=> {
  useEffect(()=> {
    axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4').then(res=> {
      console.log(res);
      
    })
  },[])
  return (
    <div>CouponManagement</div>
  )
}

export default CouponManagement