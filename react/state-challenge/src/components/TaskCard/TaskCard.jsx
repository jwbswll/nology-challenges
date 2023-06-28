import React from 'react'
import style from './TaskCard.module.scss'

const TaskCard = ({taskName, taskPriority, isDone, handleDone, index}) => {
  const cardHandleDone = () => {
    handleDone(taskName)
    console.log(taskName)
  }
  return (
    <article className={style.card}>
      <h2>{taskName}</h2>
      <p>{taskPriority} priority</p>
      <button onClick={cardHandleDone}>Done</button>
    </article>
  )
}

export default TaskCard;