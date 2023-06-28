import style from './App.css';
import Card from './components/Card/Card';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  document.body.className = !darkMode ? "light_mode" : ''
  return (
    <>
      <div className={!darkMode ? "light_mode" : ''}>
        <Card
          title='First Card'
          content='here is some text that we hide by default'
        />
        <Card title='Second card' content='Here is some other text' />
        <button className = {!darkMode ? "light_mode" : ''} onClick={toggleDarkMode}>Change to {darkMode ? "light" : "dark"} mode</button>
      </div>
    </>
  );
}

export default App;
