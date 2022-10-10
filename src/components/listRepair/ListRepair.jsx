import React from 'react'
import './listRepair.css'

const ListRepair = ({ vehicle }) => {

  const { repair } = vehicle

  return (
    <>
      {repair.map((item) => (
        <ol>
          <li>{item.trouble}</li>
        </ol>
      ))}
    </>
  )
}

export default ListRepair