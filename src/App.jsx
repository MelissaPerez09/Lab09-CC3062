import { useState } from 'react'
import './App.css'
import './index.css'
import Button from "./components/Button"

function App() {

  const buttons = [
    ["AC", "+/-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
  ]

  return (
    <div className="wrapper">
      <div className="display"></div>
      <div className="buttonBox">
        {buttons.flat().map((bt, i) => (
          <Button 
            value={bt}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default App
