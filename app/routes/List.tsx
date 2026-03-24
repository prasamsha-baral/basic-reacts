import React, { useState } from 'react'



const List = () => {
  
 
  const [task, settask] = useState([])
  const [input, setinput] = useState("")
  // const [isEmpty, setisEmpty] = useState(true)


  const add=()=>{
    if(input.trim()!==""){
    settask([...task,input])
    setinput("")
    }
  }

  const cut=(index)=>{
    const updated= task.filter((_,i)=>i!==(index))
    settask(updated)
  }

  
  //  const toggleCheck = (index) => {
  //   const newTasks = [...task]
  //   newTasks[index].done = !newTasks[index].done
  //   settask(newTasks)
  // }

  
  return (
    <>
        {/* <p>To do Lists</p> */}
        <div className='bg-pink-50 h-screen flex justify-center items-center'>
          <div className='bg-pink-200 w-120  text-center p-5 border-pink-300 border-8 shadow-md'>
             <h2 className='underline p-2 text-gray-800 text-xl font-bold'>To do Listsss</h2>
              <div className='flex justify-center gap-2 pt-2'>
                
                  <input type="text"className='text-center font-bold text-pink-400' 
                  value={input}
                   onChange={(e)=>{setinput(e.target.value)}} 
                   placeholder="Enter To-Do's"  />
                 
                  <button className='bg-pink-300 px-2 rounded cursor-pointer' onClick={add}>set</button>
                  
              </div>

              
            
               {task.map((T,index)=>(
                  <div className=' pt-2  text-gray-800 pl-9 flex justify-between  gap-5'  key={index}>
                    <div className='pt-2  text-gray-800 pl-10 flex  gap-5'>
                    <input type="checkbox" className='bg-white ' />
              
                <p className=' font-semibold'>{T}</p>
                </div>

                <div className='flex pr-5'>
                <button onClick={()=>cut(index)} className='text-xl  cursor-pointer text-red-500'>x</button>
                </div>

                </div>
               ))
               }
                  
          
               
                 
                
              
          </div>
        </div>
    </>
  )
}

export default List