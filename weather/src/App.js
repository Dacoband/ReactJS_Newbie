import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Weather from './Components/Weather/Weather'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Weather' element={<Weather />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}