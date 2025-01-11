import React, { useState } from 'react'

const App = () => {
  let [inputValue, setInputValue] = useState('');
  let [output, setOutput] = useState([]);
  let [editArea, setEditArea]=useState(false)
  let [editingIndex, setEditingIndex] = useState()
  let [editValue, setEditValue] = useState('')

  let handleInput= (e)=>{
    setInputValue(e.target.value)
  }

  let handleEditValue= (e)=>{
    setEditValue(e.target.value)
  }

  let handleSubmit=()=>{
    setOutput([...output, inputValue])
    setInputValue('')
  }

  let handleDelete = (index)=>{
    setOutput(output.filter((_, i) => i !== index))
  }

  let handleEdit =(index)=>{
    setEditArea(true);
    setEditValue(output[index]);
    setEditingIndex(index)

  }

  let handleSave=()=>{
    let updatedOutput = [...output];
    updatedOutput[editingIndex] = editValue; 
    setOutput(updatedOutput);
    setEditArea(false)
    setEditValue('')
  }

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className='container'>
      <div className='w-[800px] mx-auto border bg-gray-200 shadow-md py-4 mt-5 relative'>
        <h1 className='text-center font-bold text-[28px] leading-[34px]'>To-Do App</h1>
        <div className='flex gap-2 mt-5 items-center justify-center'>
        <input onChange={handleInput} 
        onKeyPress={handleInputKeyPress}
         value={inputValue} type="text" placeholder='Enter Task...' className='w-[700px] px-3 py-3 text-[16px] font-medium border' />
        <button onClick={handleSubmit} 
        className='px-3 py-3 text-[16px] font-medium border bg-teal-300' >Submit</button>
        </div>
        {output.length>0 && (
          <div>
            <h2 className=' mt-5 mx-auto text-center text-[18px] font-semibold'>Task Manager</h2>
            {output.map ((task, index)=>(
          <div key={index}>
            <ul><li className='flex justify-between px-[20px]'>{task}
              <div className='flex gap-3'>
                <button onClick={()=>handleEdit(index)}>Edit</button>
                <button onClick={()=>handleDelete(index)} className='text-red-500'>X</button>
              </div>
              </li></ul>
          </div>
        ))}
          </div>
        )}
{/* ---------------------------edit area------------------------ */}
        <div>
          {
            editArea && (
              <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                <div className=' bg-white py-4 px-3'>
                <div className='flex gap-2 mt-5 items-center justify-center '>
                  <input onChange={handleEditValue}
                  onKeyPress={handleEditKeyPress}
                value={editValue}
                 type="text" className='w-[700px] px-3 py-3 text-[16px] font-medium border border-black bg-transparent' />
                  <button onClick={handleSave} className='px-3 py-3 text-[16px] font-medium border bg-green-400'>Save</button>
                </div>
              </div>
              </div>
            )
          }
        </div>
        
      </div>
      
    </div>
  )
}

export default App