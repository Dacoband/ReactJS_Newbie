import React, { useState } from 'react'

  function Example2Test(props) {
    const [count, Setcount] = useState(0);

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{count}</h2>
            <button onClick={() => Setcount(count+1)}>Click Me!!!</button>
        </div>
    )
}



export default function Example2() {
    const [isShow, SetisShow] = useState(true);
    return (
        <div>


            <button onClick={() => SetisShow(pre => !pre)}>Show Name</button>

            {
                isShow ?
                    <Example2Test name='Reimu' />
                    :
                    <Example2Test name='Marisa' />
            }
        </div>
    )
}

