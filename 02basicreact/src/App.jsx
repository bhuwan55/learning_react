import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15;
  const [counter, setCounter] = useState(15)
  
  function addValue(){
    setCounter(counter+1)
  }
  function decreaseValue(){
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Here is a counter: {counter}</h1>
      <p>Counter: {counter}</p>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={decreaseValue}>Reduce value</button>
      <footer>Footer note: {counter}</footer>
    </>
  )
}

export default App
