/* eslint-disable no-unused-vars */

import Card from './components/Card'
import Counter from './components/Counter'

function App() {
  const cardDetail = {
    name: "one",
    age: 20,
  }

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen content-center'>
      <h1 className="text-orange-500 mb-4">Hare Krishna</h1>
      <div className="flex flex-row gap-5">

        <Card
          name="Delba" obj={cardDetail} btnText="click me"
        />
        <Card
          name="Rose" btnText="visit"
        />
      </div>
      <Counter />
    </div>
  )


  
}

export default App
