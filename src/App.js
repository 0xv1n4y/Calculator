

import React,{useState} from "react";
import "./App.css"

function App() {
  const [input,setInput]=useState("");
  const[data,setData]=useState(0);

  const changeHandler=e => {
    setInput(e.target.value);
  }

 
 
  return (
    <div className="App">
      <center>
      <h1>
        <h1 id="yoy">Calculator</h1>

      < input type="text" name="text" value={input} onChange={changeHandler}  id="hello" 
       
     /><br/>
      <button onClick={()=>setData(eval(input))}>Result</button><br/>
      <h2>Result:{data}</h2>

      <button onClick={()=>setInput(input+'1')}>1</button>
      <button onClick={()=>setInput(input+'2')}>2</button>
      <button onClick={()=>setInput(input+'3')}>3</button>
      <button onClick={()=>setInput(input+'4')}>4</button>

      <button onClick={()=>setInput(input+'5')}>5</button><br/>
      <button onClick={()=>setInput(input+'6')}>6</button>
      <button onClick={()=>setInput(input+'7')}>7</button>
      <button onClick={()=>setInput(input+'8')}>8</button>

      <button onClick={()=>setInput(input+'9')}>9</button>
      <button onClick={()=>setInput(input+'0')}>0</button><br/>
      <button onClick={()=>setInput(input+'+')}>+</button>
      <button onClick={()=>setInput(input+'-')}>-</button>

      <button onClick={()=>setInput(input+'*')}>*</button>
      <button onClick={()=>setInput(input+'/')}>/</button>
      <button onClick={()=>setInput("")}>clr</button>
      
      </h1>
      </center>
    
  
    </div>
  );
}



export default App;
