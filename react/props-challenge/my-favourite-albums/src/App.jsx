import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/CardList/CardList.jsx'

function App() {
  return (
    <>
      <h1>My Favourite Albums</h1>
      <CardList />
    </>
  )
}

export default App
