
import './App.css'
import { CardList } from './components/CardList/CardList.jsx'
import planets from './data/planets.js'

function App() {

  return (
    <>
      <h1>Our Solar System</h1>
      <CardList planets={planets} />
    </>
  )
}

export default App
