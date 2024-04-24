import { useState } from "react";

const Counter=()=>{
    const [counter,setCounter]=useState(0);
    const clickHandler=()=>{
        setCounter(counter+1);
        console.log("Counter : ",counter)
    }
    return(
        <div>Counter : {counter}
        <button onClick={clickHandler}>+</button>
        </div>
    )
}
export default Counter;