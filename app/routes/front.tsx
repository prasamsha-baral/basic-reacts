import React from 'react'
import v1 from "../welcome/v1.png"
import girl from "../welcome/girl2.png"
import NavBtn from '~/components/NavBtn'


const front = () => {
  return (
    <>
    {/* <div className= bg-amber-50"> 

      <nav className="flex">
        
       
          <NavBtn text="" path=""/>
      </nav>
   
  </div>  */}
    <div className='bg-[#E7E0D5] min-h-screen flex justify-center items-center pb-23'>
        <div className=' mx-auto w-[90vw] 
         sm:w-[85vw] 
          md:w-[75vw] 
        lg:w-[69vw]
        min-h-[70vh]
         max-w-4xl
        min-w-xs
    border-[#1c1001] border-13 rounded-4xl shadow-md  '>



    <nav className='flex flex-col items-start sm:flex-row  sm:justify-between sm:items-center md:justify-center  md:gap-5  lg:justify-between lg:gap-8  p-4'>
        <div className=' flex flex-col sm:flex-row justify-center sm:gap-2 p-4 md:gap-1 lg:gap-6 lg:p-5'>
            <button className='border-black border-2 text-xs p-1 text-black rounded-2xl cursor-pointer shadow-md hover:shadow-gray-400'>Individual</button>
            
           <NavBtn text="About" path="/about"/>
        </div>
        <div className='flex flex-col sm:flex-row justify-center sm:gap-1 p-4  md:gap-1  lg:gap-5 lg:p-4 '>
          
           <NavBtn text="Calculator" path="/calculator"/>
       <NavBtn text="Counter" path="/counter"/>
        <NavBtn text="list" path="/todo"/>
        
        </div>
        <div className='flex flex-col pt-4 sm:p-4  md:flex-row justify-center sm:gap-1 p-3 md:gap-2 lg:gap-6 lg:p-5'>
            
          
             <button className='btn'>Download</button>
              </div>
    </nav>

     <div className="flex  lg:flex-row items-center justify-between ">

    <div className='flex-1 px-4 sm:px-6 md:px-10'>

    <h1 className=' text-black underline text-xl sm:text-2xl md:text-3xl lg:4xl px-1.5 font-serif'>Designed for <br />
        Productivity in <br />
         Everyday Conversations</h1>
            <br />
         <h3 className='text-black font-mono text-lg sm:text-base md:text-lg'>Stay Connected, Stay Texty.</h3>


        <div className=' gap-4 mt-4'>
        
         <button className='btn'>Get Started</button>
         <button className='border-black border text-black text-xs mx-3 p-1 '>Try chat for use <select ></select> </button>
         </div>
        </div>

        <div className="flex-1 flex justify-center  mt-5 lg:mt-0">
      <div className="relative">
    <img
      src={v1}
      alt="Chat UI"
      className="w-500px  lg:w-620px drop-shadow-2xl -translate-y-6"
    />
    <img src={girl} alt=""
    className="absolute  top-1/2  left-1/2  -translate-y-16 -translate-x-10  w-36 lg:w-48 drop-shadow-xl" />
    </div>
  </div>
        


  </div>
  </div>



    </div>
    </>
  )
}

export default front


