import React, { useState } from 'react'

const App = () => {
  let [inputValue, setInputValue] = useState('');
  let [output, setOutput] = useState([]);
  let [edit, setedit]=useState('')

  let handleInput= (e)=>{
    setInputValue(e.target.value)
  }

  let handleSubmit=()=>{
    setOutput([...output, inputValue])
  }

  let handleDelete = (index)=>{
    setOutput(output.filter((_, i) => i !== index))
  }

  let handleEdit =(index)=>{
    
  }
  return (
    <div className='container'>
      <div className='w-[800px] mx-auto border bg-gray-200 shadow-md py-4'>
        <h1 className='text-center font-bold text-[28px] leading-[34px]'>To-Do App</h1>
        <div className='flex gap-2 mt-5 items-center justify-center'>
        <input onChange={handleInput} type="text" placeholder='Enter Task...' className='w-[700px] px-3 py-3 text-[16px] font-medium border' />
        <button onClick={handleSubmit} className='px-3 py-3 text-[16px] font-medium border bg-teal-300' >Submit</button>
        </div>
        {output.length>0 && (
          <div>
            <h2 className=' mt-5 mx-auto text-center text-[18px] font-semibold'>Task Manager</h2>
            {output.map ((task, index)=>(
          <div key={index}>
            <ul><li className='flex justify-between px-[20px]'>{task}
              <div>
                <button onClick={()=>handleEdit(index)}>Edit</button>
                <button onClick={()=>handleDelete(index)} className='text-red-500'>X</button>
              </div>
              </li></ul>
          </div>
        ))}
          </div>
        )}
        
      </div>
      
    </div>
  )
}

export default App