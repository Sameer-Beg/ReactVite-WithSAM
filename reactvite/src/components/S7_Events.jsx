import React from 'react'

const S7_Events = () => {
    const handlclick = () =>{
        alert("u click the buttin")
    }
    const mouseover = ()=>{
        alert("u over the mouse on button")
    }

    const addition = (a , b ) =>{
        alert(a + b )
    }
  return (
    <div>
      <h1>We r learning events </h1>
      <button onClick={handlclick}>clcik me </button>
      <button onMouseOver={mouseover}> click me   </button>
      <button onClick={()=>addition(3,4)}>clcik m e </button>
    </div>
  )
}

export default S7_Events
