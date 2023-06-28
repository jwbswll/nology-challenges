import React from 'react'
import { Card } from '../Card/Card.jsx'
import style from './CardList.module.scss'

const CardList = ({ planets }) => {
  const sortedP = planets.sort((a, b) => {
    return a.diameterInKm - b.diameterInKm
  })

  return (
    <section className={style.container}>
      {sortedP.map((planet, index) => (
        <Card key={index} planet={planet} />
      ))}
    </section>
  )
}

export { CardList };