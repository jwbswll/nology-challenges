import { useState } from 'react'
import './App.css'
import TaskCardList from './components/TaskCardList/TaskCardList.jsx'
import tasks from './data/data.json'

function App() {

  return (
    <>
      <h1>ToDo:</h1>
      <TaskCardList tasks={tasks} />
    </>
  )
}

export default App
