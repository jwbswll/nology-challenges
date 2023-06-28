import React from "react";
import Button from "./Button";
import s from "./Card.module.scss"


const Card = () => {
  return (
    <article className={s.container} >
      <img src="https://loremflickr.com/640/360" alt="an image" className={s.img} />
      <h3 className={s.text}>This is a title</h3>
      <h4 className={s.text}>This is a subtitle</h4>
      <p className={s.text}>This is a short description</p>
      <Button />
    </article>
  )
}

export default Card;