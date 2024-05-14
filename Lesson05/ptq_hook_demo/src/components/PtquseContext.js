import react, { useContext, useState } from 'react'
export const ThemeContext=createContext('')

export default function PtquseContext(){
const[Theme,setTheme] = useState('red');
const ptqHandleChange = ()=>{
    setTheme(Theme==='red'?'blue':'red');
}
  return(
    <ThemeContext.Provider value= {Theme}>
    <div className='alert'>
      <h2>Demo useContext</h2>
      <ThemeContext1/>
      <button onClick={ptqHandleChange}> Change bgColor</button>
    </div>
    </ThemeContext.Provider>
  )
}