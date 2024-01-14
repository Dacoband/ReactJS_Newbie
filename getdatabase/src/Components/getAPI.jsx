import React, { useEffect, useState } from 'react'

export default function GetAPI() {
    let [data,Setdata] = useState([]);

    useEffect( () => {
        let callAPI = async() =>{
        let res = await fetch("https://server.nglearns.com/user");
        let resourse = await res.json();
        Setdata(resourse)
        //console.log(resourse)
    }
    callAPI();
    })

    const [value,Setvalue] = useState(''); //inside useState() is the type of data you want 

    const HandleChange = (parameter) =>{
        Setvalue(parameter.target.value)
        console.log()
    }

  return (
    <div>
        <input type="text" value={value} onChange={HandleChange} />
    <h1>Get API</h1>
    {
        data
       // .filter(v => v.id.includes(value)) FOR FILTERING MULTIPLE CONDITION
        .filter(v => v.email.includes(value))
        .map((v, i)=> {
            return <h4 key ={i}> {v.id} - {v.first_name} - {v.email} </h4> 
        }

        )

    }
    </div>
  )
}
