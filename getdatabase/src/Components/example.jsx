import React from 'react'

export default function Example() {
    const Handle = (num) => () => {
        console.log('GG REIMU');
        console.log(num);
    }
  return (
    <div>example
    <button onClick={Handle(1)}>Click Me!!!</button>
    </div>
  )
}
