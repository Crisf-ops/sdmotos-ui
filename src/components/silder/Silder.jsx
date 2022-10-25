import React from 'react'
import mockImg from '../../exports/imgsSilder'
import './silder.css'

const Silder = () => {

  return (
    <>
    <div className='conteiner'>
      <section className='conteiner-slider'>
        <div className='slider'>
          <ul>
          {
            mockImg.map((img,index) => {
              return <li key={index}> <img src={img} alt='imagenes' /> </li>
            })
          }
          </ul>
        </div>
      </section>
    </div>
    </>
  )
}

export default Silder