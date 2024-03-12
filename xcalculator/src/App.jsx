/* eslint-disable no-unused-vars */
import { useState } from 'react'
import number from './assets/number.json'

import './App.css'

function App() {
 
  const[inputs,setInputs]=useState('');
  const [val,setVal]=useState('')

  const handleClick=(symbol)=>{
     if(symbol=='=')
      {hadleEvaluate(inputs);}
     else if(symbol=='C')
     {
      setInputs('');
      setVal('')
    }
else{
  setInputs(inputs+symbol)
}
  }
const hadleEvaluate=(inputs)=>{
  try {
    const result = eval(inputs);
    setVal(result.toString());
  } catch (error) {

    setVal('Error');
  }
}
  return (
    <>
     
      <div className="card">
       <h1>React Calculator</h1>
      
       <div className='screen'>
        {inputs}
       </div>
       <div>{val}</div>
       <div className='container'>
       {number.map((num,id)=>(
        <button key={id} onClick={()=>handleClick(num.symbol)}>{num.symbol}</button>
       ))}
       </div>
      
</div>
    </>
  )
}

export default App
