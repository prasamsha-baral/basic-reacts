import React, { useState } from 'react'

const counter = () => {

  const [count, setcount] = useState(0)
  

  return (
    <>
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-xl text-center shadow-md w-73'>
        <h2 className='text-black pb-10 underline'>{count}</h2>
        <div className='flex justify-center gap-5'>
        <button onClick={()=>setcount(count+1)} className='bg-green-600 px-3 py-1 shadow-md cursor-pointer hover:shadow-green-400'>+</button>
        <button onClick={()=>setcount(count-1)} className='bg-green-600 px-3 py-1 shadow-md cursor-pointer hover:shadow-green-400'>-</button>
        <button onClick={()=>setcount(0)} className='bg-gray-400 px-3 py-1 shadow-md cursor-pointer hover:shadow-gray-400'>Reset</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default counter