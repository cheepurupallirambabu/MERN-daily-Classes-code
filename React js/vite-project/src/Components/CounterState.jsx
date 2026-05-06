import { useState } from "react";

const CounterSatet =(props)=> {

    let [count,setCount] = useState(0);
    

    return(
        <>
        <h3>Function based Componet</h3>
  

        <h1>Count {count}</h1>
        <button onClick={()=>{setCount(count+1)}} style={styling.inc}>Increment</button>
        <button onClick={()=>{ if (count>0){setCount(count-1)}}} style={styling.dec}>Decrement</button>
        <button onClick={()=>{setCount(0)}} style={styling.r}>R</button>
        </>
    )

}

const styling = {
  inc : {
    backgroundColor : "Green",
    padding : "5px 20px",
    margin : "10px"
  },
  dec : {
    backgroundColor : "red",
    padding : "5px 20px",
    margin : "10px"
  },
  r : {
    borderRadius : "50%",
    padding : "5px",
  }
}

export default CounterSatet;


