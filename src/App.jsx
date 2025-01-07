import React from 'react'

const App = () => {
  return (
    <div className='container'>
      <div className='w-[800px] mx-auto border bg-gray-200 shadow-md py-4'>
        <h1 className='text-center font-bold text-[28px] leading-[34px]'>To-Do App</h1>
        <div className='flex gap-2 mt-5 items-center justify-center'>
        <input type="text" placeholder='Enter Task...' className='w-[700px] px-3 py-3 text-[16px] font-medium border' />
        <button className='px-3 py-3 text-[16px] font-medium border bg-teal-300' >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App