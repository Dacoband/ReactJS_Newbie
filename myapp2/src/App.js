import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {
  const[count, SetCount] = useState(0)
  const [user, admin, superAdmin, shiper, BA] = [1, 2, 3, 4, 5]
  const Name = ["Ôngdưaleo", "Yulockii", "MôngTo", "LonPhat", "MyAss"]
  const [isShow, SetIsShow] = useState(false)
  const UP =() => {
    SetCount(pre=> pre + 1)
    if(count%2 ==0 && count < 10 ){
        SetCount(pre=> pre +0.2 && count+1)
    } 
    
  }
  const ShowOrHide =() => {
    SetIsShow(pre=>!pre)
  }
  
  
  const DOWN =() => {
    SetCount(count - 1)
    
  }
  return (
    <div className="App"> 
        {/* <h1>{admin}</h1> */}
        <h1>{count}</h1>
        <button onClick={UP}>UP</button>
        
        <button onClick={DOWN}>DOWN</button>
        {/* <h1>{Name[count]}</h1>*/}
         <Header name={"Nhan"} age={count}/> 
        <button onClick={(ShowOrHide)}>Show or Hide</button>
        {isShow &&<Header name="Loc" age={count}/>}

        {/* <h1>abc</h1>
        <h2>abc</h2>
        <Footer/> */}
    </div>
  );
  }

export default App; 
