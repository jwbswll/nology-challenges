import {useState} from 'react'
import TaskCard from '../TaskCard/TaskCard.jsx'

const TaskCardList = ({ tasks }) => {
  const [stateTasks, setTasks] = useState(tasks)
  
  const handleDone = (taskToRemove) => {
    setTasks(stateTasks.filter((task) => task.task !== taskToRemove))
    console.log(stateTasks)
  }
  return (
    <section>
      {stateTasks.map((task, index) => (<TaskCard key={index} taskName={task.task} taskPriority={task.priority} handleDone={handleDone}/>))}
    </section>
  )
}

export default TaskCardList;