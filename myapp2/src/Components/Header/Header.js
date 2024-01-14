import React, { useEffect, useState } from 'react'

export default function Header(props) {
    const [cnt, setCnt] = useState(0)
    let a = 1;
    let b = <span>123</span>
    let c=[1,2,3,4,5,6,7,8,9]
    let d={m:6}
    const UP = () => {setCnt(pre => pre+1)}

    useEffect(() =>{
        // console.log("DidMount")
        console.log("DidUpdate")
    })
    useEffect(() =>{
        console.log("CNT Watcher");
    }, [cnt])
    useEffect(() =>{
        console.log("DidMount")
        return () =>{
            console.log("Unmount")
        }
    } ,[])
  return (
    <div>
        <h2>{cnt}</h2>
        <button onClick={UP}>Click to UP</button>
        {/* <h1>{a}</h1>
        <h2>{b}</h2>
        <h3>{c}</h3> */}
        {/* <h3>{JSON.stringify(props)}</h3> */}
        <h1>{props.name} - {props.age}</h1>
    </div>
  )
}
