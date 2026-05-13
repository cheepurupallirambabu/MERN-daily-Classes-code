import React, { useMemo, useState, useEffect } from 'react'

const Factorial = () => {

    const [number,setNumber] = useState(1);
    const [count,setCount] = useState(1);
    
    // useMemo is used here to memoize the result of the expensive factorial calculation.
    // It will only re-run when the 'number' dependency changes.
    const calculatedFactorial = useMemo(() => {
        console.log("Calculating factorial...");
        let fact=1;
        for (let i=1;i<= number;i++) {
            fact=fact*i; 
        }
        return fact;
    }, [number]);

    // useEffect is the correct hook for side-effects, like logging.
    // This will run whenever the factorial is recalculated.
    useEffect(() => {
        console.log(`Factorial of ${number} is ${calculatedFactorial}`);
    }, [calculatedFactorial, number])

  return (
    <div className='h-60'>
        <h1 className='text-center text-2xl font-bold'>Factorial</h1>
        
        <input className="border-2 border-black w-100 p-3 bg-amber-100 rounded-3xl m-10 mr-10" type="number" value={number} onChange={(e)=>{
            // Parse the input value to a number before setting state
            setNumber(Number(e.target.value))
        }} />
        <button onClick={()=> {
            // Use functional updates for setting state to avoid stale state issues
            setCount(c => c + 1)
        }} className='bg-red-500 p-2 rounded-3xl m-3'>Increment Count: {count}</button>
        <button onClick={()=> {
            setNumber(n => n + 1)
        }} className='bg-green-500 p-2 rounded-3xl m-3'>Increment Number {number}: {calculatedFactorial}</button>
        </div>
  )
}

export default Factorial