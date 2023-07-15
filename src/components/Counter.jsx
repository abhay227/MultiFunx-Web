import { useState } from "react";
import "./Counter.css"
//import React from "react";
const Counter = () => {
    const [countval,setcountval] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{countval}</h2>
      <div class="btn-grp">
        <button onClick={()=>setcountval(countval+1)}>Increment</button>
        <button onClick={()=>setcountval(countval-1)}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter