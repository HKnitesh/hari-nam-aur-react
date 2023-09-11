import  { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)
    const addValue = () => {
        setValue((prev) => prev + 1);
        setValue((prev) => prev + 1);
        setValue((prev) => prev + 1);
        setValue((prev) => prev + 1);
        setValue((prev) => prev + 1);
       
        
    }
    const removeValue = () => {
        setValue(value - 1);
    }
    return (
        <div className='flex flex-col rounded-lg border items-center justify-center mt-6 p-8 gap-8'>
            <h1>Counter Value: {value}</h1>
            <div className="flex flex-row gap-5">

                <button onClick={addValue}>Add value {value}</button>
                <button onClick={removeValue}>Remove value {value}</button>
            </div>
        </div>
    )
}

export default Counter