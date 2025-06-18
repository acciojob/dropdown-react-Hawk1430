import React from 'react'

const Card = ({id,name, description}) => {
  return (
    <div>
        <div id='state-title'>
            <h2>{name}</h2>
        </div>
        <div id='state-decription'>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card