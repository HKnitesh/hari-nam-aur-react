/* eslint-disable no-unused-vars */

import { useState } from 'react'
import ColorButton from './components/ColorButton'

function App() {
 
 
  const [color, setColor] = useState('aqua')

  return (

    <div style={{backgroundColor: color}} className={`flex items-center justify-center h-screen w-screen relative `}>

      <div className="bg-white  rounded-xl py-3 px-5 absolute bottom-20 items-center gap-5  flex">
        
        <ColorButton color="green" handleClick={() => setColor("green")}/>
        <ColorButton color="blue" handleClick={() => setColor("blue")}/>
        <ColorButton color="red" handleClick={() => setColor("red")}/>
        <ColorButton color="pink" handleClick={() => setColor("pink")}/>
        <ColorButton color="yellow" handleClick={() => setColor("yellow")}/>
        <ColorButton color="olive" handleClick={() => setColor("olive")}/>
        <ColorButton color="grey" handleClick={() => setColor("grey")}/>
        <ColorButton color="white" handleClick={() => setColor("white")}/>
        <ColorButton color="black" handleClick={() => setColor("black")}/>
        <ColorButton color="purple" handleClick={() => setColor("purple")}/>
        <ColorButton color="lavender" handleClick={() => setColor("lavender")}/>
      </div>
    </div>
  )
}

export default App
