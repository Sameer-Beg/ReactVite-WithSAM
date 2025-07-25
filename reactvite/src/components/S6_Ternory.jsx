import React from 'react'

const S6_Ternory = ({name , age  , pancardID}) => {
    
  return (
    <div className='sam'>
        <h1>Name = {name}</h1>
    <h3>{age > 18 ? <h1>("Yes u can drive")</h1> : <h2>"u can not drive"</h2>}</h3>
        <h3>{name  ==  "sameerbeg" ? <h1>("name is same ")</h1> : <h2>"no name is not same "</h2>}</h3>
        <h2>{pancardID == "122" ? <h1>("you pan id is same ")</h1>:<h1>("Your pan id is not same ")</h1>}</h2>

    </div>

  )
}

export default S6_Ternory
