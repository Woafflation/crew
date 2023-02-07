import React, { useState } from 'react'
import Reacto from './Reacto'
import Button from './Reacto/Button'
import logo from './logo.svg'
import './App.css'

// Hope we will cooperate!
// Thanks for an interesting task!
// Best regards,
// Igor

function App() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="App">
      <Reacto isActive={isActive} setIsActive={setIsActive} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}

export default App
