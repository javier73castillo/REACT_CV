import React from 'react'
import './About.scss'

function About({person}) {
  return (
    <div className='container'>
      <h1 className='title'>Información personal </h1>
    <div className='about'>
     <ul className='list'>
      {person.aboutMe.map(item => {
        return ( <p className='item'>↗️ {item.info}</p>

        )
      
      })}
    </ul> 
    </div>
   </div>
  )
}

export default About





