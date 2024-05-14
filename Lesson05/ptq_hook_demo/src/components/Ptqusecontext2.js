import react, { useContext } from 'react'
import { ThemeContext } from './PtquseContext'

export default function PtquseContext2(){
  const Theme =useContext(ThemeContext);
  return(
   
    <div className = {Theme + 'm-3'}>
      <h2>PtquseContext2</h2>
      <p>
        <b>22004543</b>
        <b>Phạm Thế Quyền</b>
        <i>k22CNT2</i>
      </p>
    </div>
    
  )
}