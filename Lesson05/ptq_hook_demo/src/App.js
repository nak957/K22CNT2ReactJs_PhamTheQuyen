import react from 'react'
import Ptq_useState from './components/PtquseState'
import PtquseEffect from './components/PtquseEffect'
import PtquseContext from './components/PtquseContext'
import './App.css'
export default function App(){
  return(
    <div className='container border mt-3'>
      <h1 className='text-center'>Phạm Thế Quyền-Hook</h1>
      <hr/>
      <PtquseState/>
      <hr/>
      <PtquseEffect/>
      <hr/>
      <PtquseContext/>
    </div>
  )
}
