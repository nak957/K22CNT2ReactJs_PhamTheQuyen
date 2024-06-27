
import './App.css';
import PtqListUsers from './components/PtqListUsers';
import axios from'./api/ptqApi'
import { useEffect, useState } from 'react';
function PtqApp() {
    const[ptqListUsers,setptqListUsers] =useState([]);
    const ptqGetAllUsers =async ()=>{
        const ptqResponse = await axios.get("ptqUsers");
        console.log("Api Data",ptqResponse.data);
        setptqListUsers(ptqResponse.data)
    }
    useEffect(()=>{
      ptqGetAllUsers();
      console.log("State Data",ptqListUsers);
    },[])

  return (
    <div className="container border my-3">
        <h1>làm việc với Mock-Api</h1>
        <hr/>
        <PtqListUsers renderPtqListUsers={ptqListUsers}/>
    </div>
  );
}

export default PtqApp;
