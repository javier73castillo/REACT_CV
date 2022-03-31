import React from 'react'
import './Education.scss'

function Education({education}) {
  return (
    <div className='container'>
      <h1 className='title'>Formación académica</h1>
      
      <div className="container__card">
        {education.map((item) => {
          return (
            <div className='list' key={JSON.stringify(item)}>
                <p className="name"> 🎓 {item.name} - Año {item.date} 📌 {item.where} </p>
                
               
            </div>
          );
        })}
      </div>


    </div>
  )
}

export default Education;