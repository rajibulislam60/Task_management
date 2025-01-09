import React, { useState } from 'react'

const App = () => {
  let [inputValue, setInputValue] = useState('');
  let [output, setOutput] = useState('');

  let handleInput= (e)=>{
    setInputValue(e.target.value)
  }

  let handleSubmit=()=>{
    setOutput(inputValue)
  }
  return (
    <div className='container'>
      <div className='w-[800px] mx-auto border bg-gray-200 shadow-md py-4'>
        <h1 className='text-center font-bold text-[28px] leading-[34px]'>To-Do App</h1>
        <div className='flex gap-2 mt-5 items-center justify-center'>
        <input onChange={handleInput} type="text" placeholder='Enter Task...' className='w-[700px] px-3 py-3 text-[16px] font-medium border' />
        <button onClick={handleSubmit} className='px-3 py-3 text-[16px] font-medium border bg-teal-300' >Submit</button>
        </div>
        {output && 
        (
          <div>
          <h2>{output}</h2>
          </div>
        )
      }
      </div>
      
    </div>
  )
}

export default App