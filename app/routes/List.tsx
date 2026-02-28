import React, { useState } from 'react'

const List = () => {
  
 
  const [task, settask] = useState([])
  const [input, setinput] = useState("")
  // const [isEmpty, setisEmpty] = useState(true)


  const add=()=>{
    if(input.trim()=="")return
    settask([...task,{text:input , done:false}])
    setinput("")
  }
   const toggleCheck = (index) => {
    const newTasks = [...task]
    newTasks[index].done = !newTasks[index].done
    settask(newTasks)
  }

  
  return (
    <>
        {/* <p>To do Lists</p> */}
        <div className='bg-pink-50 h-screen flex justify-center items-center'>
          <div className='bg-pink-200 w-90  text-center p-5 border-pink-300 border-8 shadow-md'>
             <h2 className='underline p-2 text-gray-800 text-xl font-bold'>To do Lists</h2>
              <div className='flex justify-center gap-2 pt-2'>
                
                  <input type="text"className='text-center font-bold text-pink-400' 
                  value={input}
                   onChange={(e)=>{setinput(e.target.value)}} 
                   placeholder="Enter To-Do's"  />
                 
                  <button className='bg-pink-300 px-2 rounded cursor-pointer' onClick={add}>set</button>
                  
              </div>
            
               {task.map((T,index)=>(
                  <div className=' pt-2  text-gray-800 px-9 flex  gap-5'  key={index}>
                    <input type="checkbox" className='bg-white ' checked={task.done}
            onChange={()=>toggleCheck(index)} />

                <p className='pb-2 font-semibold'>{T.text}</p>

                </div>
               ))
               }
                  
          
               
                 
                
              
          </div>
        </div>
    </>
  )
}

export default List