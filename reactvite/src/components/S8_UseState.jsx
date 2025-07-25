import React, { useState } from 'react'

const S8_UseState = () => {

    const [counter ,  setCounter] = useState(0)

    const increseby1 = ()=>{
        // counter++;
        setCounter(counter+1);
        console.log("counter = " , counter)
    }
    const decreseny1 = ()=>{
        // counter--;
        setCounter(counter-1)
        console.log("counter = " , counter)
}
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increseby1}>increse</button>
        <button onClick={decreseny1}>decrese </button>
    </div>
  )
}

export default S8_UseState
