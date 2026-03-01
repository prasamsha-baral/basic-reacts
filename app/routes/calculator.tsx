import React, { useState } from 'react'

const Calculator = () => {

  const numbers=[1,2,3,4,5,6,7,8,9,0]
  const operators=["+","-","*","/"]

  const [value1, setvalue1] = useState(0)
  const [value2, setvalue2] = useState(0)
  const [Isfirst, setIsfirst] = useState(true)
  const [operator, setoperator] = useState("")
  const [value, setvalue] = useState(0)
  

  return (
    <>
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
    <div className='bg-white w-75 text-center p-7 rounded-xl shadow-md  '>
         <div className='flex justify-center gap-5 pb-7'>
            <h2 className='text-black underline'>{value1}</h2>
            <h2 className='text-black'>{operator}</h2>
            <h2 className='text-black underline'>{value2}</h2>
            <h2 className='text-black'>=</h2>
            <h2 className='text-black'>{value}</h2>
            </div>
            <div className='flex justify-around'>
             <div className='grid grid-cols-3 gap-5 mb-5'>
              <button onClick={()=>{setvalue1(0) ; setvalue2(0);setoperator("") ;setvalue(0); setIsfirst(true)}} className='bg-gray-300 px-3 shadow-md cursor-pointer hover:bg-gray-200'>C</button>
              {numbers.map((num)=>(
                <button 
                key={num}
                onClick={()=>{if (Isfirst){setvalue1(value1*10 + num)}else{ setvalue2(value2*10 +num)}}}
                className='bg-gray-500  px-3 shadow-md cursor-pointer hover:shadow-gray-600 '
                >{num}</button>
              ))}
              
         </div>
        <div className='grid  gap-5 mb-5'>
          {operators.map((op)=>(
            <button 
            key={op}
            onClick={()=>{setoperator(op);setIsfirst(false)}}
            className='bg-green-600  px-3 shadow-md cursor-pointer hover:shadow-green-400 '
            >

            {op}</button>
            
          ))}
               <button onClick={()=>{if (operator=="+"){setvalue(value1 + value2)}
                                      else if(operator=="-"){setvalue(value1 -value2)}
                                      else if(operator=="*"){setvalue(value1 *value2)}
                                      else if(operator=="/"){setvalue(value1 / value2)}
                                    
                                    }}
                className='bg-green-600 cursor-pointer px-3 shadow-md hover:shadow-green-400'>=</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Calculator