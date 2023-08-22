import { useState } from 'react'
import Chai from './chai'


function App() {
  let [count, setCount] = useState(0);

  const removeValue = () => {
    if(count <= 0){
      alert("value can not less then Zero")
    } else{
      setCount(count - 1)
    }
  }
  const addValue = () => {
    if(count >= 20){
      alert("value can not more then 20")
    } else{
      setCount(count + 1)
    }
  }

  return (
    <>
      <h1>Hare Krisha</h1>
      <h3>Counter value: {count}</h3>

      <button
        onClick={addValue}
      >
        Add Value
      </button>

      <button
        onClick={removeValue}
      >
        Remove value
      </button>
    </>
  )
}

export default App
