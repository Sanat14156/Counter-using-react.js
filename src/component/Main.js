import React, { useState } from 'react'

function Main() {
    let [count,setCount]=useState(0);
    let increment=()=>{
            // setCount(++count);
            setCount(prevState=>prevState+1);
    }
    let decrement=()=>{
      // setCount(--count);
      setCount(prevstate=>prevstate-1);
    }
    let reset=()=>{
      // setCount(count=0);
      setCount(prevstate=>prevstate*0);
    }
    return(
    
    <section>
    <h1>{count}</h1>
    <br></br>
    <div><button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button></div>
    </section>
    )
}

export default Main