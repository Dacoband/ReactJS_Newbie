import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import Screen1 from './component/Screen1/Screen1';
import Screen2 from './component/Screen2/Screen2';
import Admin from './component/Admin/Admin';
import PrimarySearchAppBar from './component/navBar/navBar';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <div className="App">
      <PrivateRoute>
        <h1>Nhan</h1>
      </PrivateRoute>
      <BrowserRouter>
        {/* Header */}
        <p>
          Header: 
           <Link to={'Screen1'}>Home</Link>
           <Link to={'admin/1?name=Nhan&&age=20'}>Admin</Link>
           <Link to={'user'}>User</Link>
           <Link to={'navBar'}>Navigation</Link>
        </p>
          <Routes>
            <Route path="Screen1" element={<Screen1 />}> </Route>
            <Route path='admin/:id' element={<Admin />}></Route>
            <Route path="user" element={
           <PrivateRoute>
            <Screen2/>
            </PrivateRoute> 
          
            }>
              <Route path='' element={<h1>Profile</h1>}/>
              <Route path='password' element={<h1>passwords</h1>}/>
            </Route>
            <Route path="navBar" element={<PrimarySearchAppBar />}></Route>
          </Routes>

        <p>Footer</p>
        {/* Footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
