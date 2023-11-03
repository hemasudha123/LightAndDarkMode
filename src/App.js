import './App.css';
import React, { useState } from 'react'
function App() {
  const [dark, setDark] = useState("")

  const handleModes = () => {
    setDark(!dark)
  }
  return (
    <div className={dark ? 'lightContainer' : 'darkContainer'}>
      <h1>click to Change Mode</h1>
      <button onClick={handleModes}>{dark ? 'Light mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default App;