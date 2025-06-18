import React from 'react'

const Card = ({id,name, description}) => {
  return (
    <div>
        <div id={`${id}-name`}>
            <h2>{name}</h2>
        </div>
        <div id={`${id}-description`}>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card