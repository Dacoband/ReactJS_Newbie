import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrivateRoute(props) {
    const nav =useNavigate()
    useLayoutEffect(() =>{
        if(!localStorage.getItem('id')){
            nav('/')
        }
    })
  return (
    <div>
        {props.children}
    </div>
  )
}
