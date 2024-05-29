import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import PtqTaskAddOrEdit from './components/PtqTaskAddOrEdit';

function App() {
  const ptq_listTasks = [
    { ptq_taskId:2210900059,ptq_taskName:"Phạm Thế Quyền", ptq_level:"Small" },
    { ptq_taskId:1,ptq_taskName:"Học lập trình frontend", ptq_level:"Small" },
    { ptq_taskId:2, ptq_taskName:"Học lập trình reactjs",ptq_level:"Medium"},
    { ptq_taskId:3, ptq_taskName:"Lập trình với Frontend - Reactjs",ptq_level:"High"},
    { ptq_taskId:4, ptq_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",ptq_level:"Small"},
   ]
   const[ptqlistTasks, setptqlistTasks] = useState(ptq_listTasks);

   const ptqHandleSubmit=(ptqParam)=>{
    console.log("App",ptqParam);
    setptqlistTasks(prev=>{
      return[
        ...prev,
      ]
    })
   }
  return (     
    <div className="container boder">
      <h1>Phạm Thế Quyền-K22CNT2</h1>
      <hr/>
      <div>
        {/*danh sách list task  */}
        <ptqlistTasks renderPtqListTask={ptqlistTasks}/>
      </div>
      <div>
        <PtqTaskAddOrEdit ptqOnSubmit={ ptqHandleSubmit}/>
      </div>
    </div>
  );
}

export default App;
