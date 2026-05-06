import { Component } from "react";


 export class Counter extends Component {

    constructor() {

        super();
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=> {this.setState((pre)=>{
            return{count:pre.count+1}
            })}} style={styling.inc}>Increment</button>

            <button onClick={()=>{ if (this.state.count>0){this.setState((pre)=>{
            return{count:pre.count-1}
            })}}} style={styling.dec}>Decrement</button>
            <button onClick={()=> {this.setState((pre)=>{
            return{count:0}
            })}} style={styling.r}>R</button>
            </>
        )
    }

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