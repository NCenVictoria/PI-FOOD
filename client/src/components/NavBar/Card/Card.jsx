import React from 'react'

export default function Card(props) {
  return (
    <div>
      <img src={props.image}/>
      <p>name:{props.name}</p>
   </div>
  )
}
