import react, { useEffect } from 'react'
export default function PtquseEffect(){
    const[count,setCount]=useState(0);
    const ptqHandleList =()=>{
        setCount(pev=>pev +1);
        useEffect(()=>{
            document.title = `Phạm Thế Quyền:You clicked ${count} times`;
            console.log(`You Clicked ${count}times`);
        });
        useEffect(()=>{
            console.log("Chạy lần đầu tiên-một lần");
        },[])
        useEffect(()=>{
            return (`useEffect count Click:`,count)
        },[count])
    }
  return(
    <div>
      <h2>Demo-Effect:you clicked{count}times</h2>
      
      <button >
        Click me
      </button>
    </div>
  )
}