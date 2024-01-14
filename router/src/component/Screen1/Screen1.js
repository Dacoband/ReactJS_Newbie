import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Screan1() {
  const ip= useRef()
    const nav= useNavigate();
    const HandleClick =()=>{
      //check login
      localStorage.setItem('id',ip.current.value);
       nav('user',{
          state:{
            account : ip.current.value
          }
       })
       
        
    }
  return (
    <div>

        <h1>Login</h1>
        <input ref={ip} />
        <button onClick={HandleClick}  >submit</button>

    </div>
  )
}