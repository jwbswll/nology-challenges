import React from 'react'
import style from './Card.module.scss'

const Card = ({ planet }) => {
  const { planetName, image, distanceFromSun, diameterInKm, numberOfMoons, lengthOfYear } = planet
  return (
    <div className={numberOfMoons ? style.card : style.noMoons}>
      <img className={style.image} src={image} alt={planetName} />
      <h2>{planetName}</h2>
      <p>Distance from the Sun: {distanceFromSun}</p>
      <p>Diameter: {diameterInKm}km</p>
      {numberOfMoons ? <p>Number of Moons: {numberOfMoons}</p> : ""}
      <p>Length of Year: {lengthOfYear}</p>

    </div>
  )
}

export { Card }