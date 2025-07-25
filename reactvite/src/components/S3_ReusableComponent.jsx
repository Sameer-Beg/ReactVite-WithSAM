import React from 'react'

const S3_ReusableComponent = () => {
    const SAmDEtails = {
        name:"SameerBeg",
        Age:21,
        Email:"sam@gmail.com"
    }
  return (
    <div>
      <h1>Name = {SAmDEtails.name}</h1>
      <h2>Age = {SAmDEtails.Age}</h2>
      <h3>Email = {SAmDEtails.Email}</h3>
    </div>
  )
}

export default S3_ReusableComponent
