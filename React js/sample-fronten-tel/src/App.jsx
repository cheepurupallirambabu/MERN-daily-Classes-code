import { useMemo, useState } from 'react'
import Factorial from './Factorial';

function App() {
  const [count,setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }
 let fact=1;
  const factorial = ()=> {
    for (let i=1;i<=5;i++) {
    fact=fact*i; 
  }
  return fact;
  }

  //console.log(factorial());

  useMemo(() => {
    //console.log(factorial());
  }, [])
  
  return (
    <>
    <Factorial />
    <div className="bg-[url(https://i.pinimg.com/736x/d6/20/33/d62033ee49601c7b4b7d886b3d09dfe9.jpg)] p-5 bg-no-repeat w-100% h-200 bg-cover bg-center flex flex-col justify-center">
      <h1 className="text-center text-3xl font-bold bg-red-500 text-white p-3 rounded-4xl shadow-xl shadow-amber-300 m-8">hello</h1>
      <h2 className="backdrop-blur-2sl ml-10 mr-10 text-center text-2xl font-bold shadow-2xl shadow-amber-200 rounded-3xl p-3 m-3 bg-black text-amber-50">Welcome To TeilWindCss</h2>
      
      <h1 className='text-3xl font-bold bg-black text-white  text-center p-4 mr-40 ml-40 rounded-2xl'>{count}</h1>
      <div className='flex gap-10 justify-center mt-10 mb-5'>
          <button onClick={handleIncrement} className='text-center text-xl font-bold bg-green-500 w-30 p-2 rounded-2xl hover:cursor-pointer'>Increment</button>
          <button onClick={handleDecrement} className='text-center text-xl font-bold bg-red-500 w-30 p-2 rounded-2xl hover:cursor-pointer'>Decrement</button>
          <button onClick={handleReset} className='text-center text-xl font-bold bg-yellow-500 w-30 p-2 rounded-2xl hover:cursor-pointer'>Reset</button>
        </div>  
      <div className="grid-cols-4 gap-x-2 gap-y-2 grid bg-blue-200 rounded-2xl p-10">
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 w-30 h-10 rounded-2xl shadow-2xs shadow-black"></div>
      </div>

      </div>

      <div>
        
      </div>
    </>
  )
}

export default App
