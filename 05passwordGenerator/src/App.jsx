/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useState, useRef } from 'react'
import ColorButton from './components/ColorButton'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*()_-=+{}[]~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword])

  useEffect(() => { passGenerator() }, [length, number, character, passGenerator])

  // useRef hook
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (

    <div className={`flex flex-col justify-center items-center h-screen w-screen bg-zinc-800 gap-10`}>

      <h1 className='text-orange-500 text-4xl'>Password Generator</h1>

      <div className="flex flex-col rounded-xl p-5 bg-slate-600 gap-8">
        <div className="flex flex-row">

          <input
            className='outline-none rounded-l-lg px-2 py-1 text-orange-700 font-medium w-full'
            value={password}
            placeholder='password'
            readOnly
            type="text"
            ref={passwordRef}
          />

          <button
            className='rounded-r-lg bg-blue-500 px-3 text-white'
            onClick={copyPassword}
          >
            copy
          </button>
        </div>

        <div className="flex flex-row gap-5">
          {/* length */}
          <div className="flex flex-row ">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className=' cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-orange-500 ml-1'>
              Length( <span className='text-blue-400'>{length}</span> )
            </label>
          </div>

          {/* Number */}
          <div
            className="flex flex-row ">
            <input
              type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label className='text-orange-500 ml-1' htmlFor='numberInput'> Numbers</label>
          </div>

          {/* characters */}
          <div
            className="flex flex-row ">
            <input
              type="checkbox"
              defaultChecked={number}
              id='charactersInput'
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label className='text-orange-500 ml-1' htmlFor='charactersInput'> Characters</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
