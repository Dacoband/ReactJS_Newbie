import React, { useCallback, useEffect, useMemo, useState } from 'react'

function Example3Test(props){
    useEffect(() =>{
        console.log('Rerendering Elements');

    },[props.data])
    return(
        <div>
            Exam3 testing
        </div>
    )
}

export default function Example3() {
    const [count,Setcount] = useState(0);
    const data = useMemo(()=>{
        return{
        maid:'Sakuya',
        shrine:'Reimu',
        magician:'Marisa'
        }
    },[])

    const fnc = useCallback(()=>{},[])
  return (
    <div>
        <Example3Test name = {data} />
        <h2>{count}</h2>
        <button onClick={() => Setcount(pre => pre +1)}>Click THIS NEW BUTTON</button>
    </div>
  )
}

