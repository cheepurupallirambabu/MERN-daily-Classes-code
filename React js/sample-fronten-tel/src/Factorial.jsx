import React, { useMemo, useState } from 'react'

const Factorial = () => {

    const [number,setNumber] = useState(1);
    const [count,setCount] = useState(1);
    
    
    const factorial = ()=> {
        let fact=1;
    for (let i=1;i<= number;i++) {
    fact=fact*i; 
  }
  return fact;
  }

   useMemo(() => {
    let result= factorial()
    console.log(result);
    
    }, [number])

  return (
    <div className='h-60'>
        <h1 className='text-center text-2xl font-bold'>Factorial</h1>
        
        <input className="border-2 border-black w-100 p-3 bg-amber-100 rounded-3xl m-10 mr-10" type="number" onChange={(e)=>{
            setNumber(e.target.value)
        }} />
        <button onClick={()=> {
            setCount(count+1)
            
        }} className='bg-red-500 p-2 rounded-3xl m-3'>Increment Count :{count}</button>
        <button onClick={()=> {
            setNumber(number+1)
        }} className='bg-green-500 p-2 rounded-3xl m-3'>Increment Number{number}:{factorial()}</button>
        </div>
  )
}

export default Factorial