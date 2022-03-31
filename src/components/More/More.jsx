
import React from 'react'
import './More.scss'

export default function More({habilities}) {
  return (
    <div className='container'>
    <h1 className='title'>Soft Skills </h1>
  <div className='more'>
   <ul className='list'>
    {habilities.map(item => {
      return ( <p className='item'>- {item} -</p>

      )
    
    })}
  </ul> 
  </div>
 </div>
  )
}