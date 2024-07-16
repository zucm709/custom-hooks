import React from 'react'
import { useState } from 'react'

const App = () => {
  let color = 'Green'

  const changeColor = () => {
    color = "Always Green"

  }
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={changeColor}>Change state</button>
    </div>
  )
}

export default App
