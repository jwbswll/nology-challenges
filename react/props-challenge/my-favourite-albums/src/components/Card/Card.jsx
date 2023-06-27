import style from './Card.module.scss';

const Card = ({ albumTitle, bandName, albumRating, albumArt }) => {
  return (
  <div className={style.card}>
    <img className={style.image} src={albumArt} />
    <div className={style.textbox}>
      <p>{albumTitle}</p>
      <p>{bandName}</p>
      <p>{albumRating}</p>
    </div>
  </div>
  )
}

export default Card;