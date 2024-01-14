import React, { useState } from 'react'
import CtxData, { ctx } from '../../CtxData';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [list, SetList] = useState([])
    const nav = useNavigate([])
    const HandleKeyUp = (event) => {
        if (event.keyCode == 13) {
            let search = event.target.value;
            let appId = '439d4b804bc8187953eb36d2a8c26a02'
            fetch(`https://openweathermap.org/data/2.5/find?appid=${appId}&q=${search}`)
                .then(res => res.json())
                .then(dt => {
                    console.log(dt)
                    SetList(dt.list)
                })
        }
    }
    const GetWeather = ({coord}) => () => {
        console.log(CtxData);
        nav('/Weather');
    }
    return (
        <div>
            <label>Search:</label>
            <input onKeyUp={HandleKeyUp} />
            <div>
                {
                    list.map((v, i) => {
                        return <button ket={i} onClick={GetWeather(v.coord)}>
                            {v.name}
                        </button>
                    })
                }
            </div>
        </div>
    )
}