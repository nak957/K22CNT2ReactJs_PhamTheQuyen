import react, { useState } from 'react'

export default function Ptq_useState(){
    const[count,setCount]=useState(10);
    const[list,setlist]=useState([])
    const ptqHandleList =()=>{
      let num = parseInt(Math.random()*100);
      setlist([
        ...list,
        num
      ])
    }
  return(
    <div>
       <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
      <hr/>
      <h3>List:{list.toString()}</h3>
      <button onClick={ptqHandleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}