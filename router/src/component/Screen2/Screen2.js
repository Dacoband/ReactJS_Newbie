import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
export default function Screen2() {
  const loc =useLocation();
  
  return (
    <div>
      {JSON.stringify(loc)}
       <br />
      {loc.state?.account?? 'ko thay'}
      <Link to={'/user'}>Profile</Link>
      <Link to={'/user/password'}>Password</Link>
      <Outlet/>
    </div>
  )
}
