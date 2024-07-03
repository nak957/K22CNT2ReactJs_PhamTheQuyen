
import './App.css';
import PtqListUsers from './components/PtqListUsers';
import axios from'./Api/ptqApi'
import { useEffect, useState } from 'react';
function PtqApp() {
    const[ptqListUsers,setptqListUsers] =useState([]);
    const ptqGetAllUsers =async ()=>{
        const ptqResponse = await axios.get("https://667cd5f93c30891b865dda0b.mockapi.io/ptqApi/V1/ptqUssers");
        console.log("Api Data",ptqResponse.data);
        setptqListUsers(ptqResponse.data)
    }
    useEffect(()=>{
      ptqGetAllUsers();
      console.log("State Data",ptqListUsers);
    },[])
    const[PtqAddOrEdit, setPtqAddOrEdit] = useState(false);
    const ptqInitUser ={
      
        UsersName: "Phạm Thế Quyền",
        Password: "Password 1",
        Email: "Email 1",
        Phone: "Phone 1",
        id : "2210900059"
    }
    const [ptqUser,setptqUser] = useState(ptqInitUser);
    
    const ptqHancleAddNew =()=>{
      setPtqAddOrEdit(true);
    }
    const ptqHandleClose=(param)=>{
      setPtqAddOrEdit(param);
    }
    let ptqElementForm = PtqAddOrEdit===true?
    <PtqAddOrEdit renderUser={ptqUser }
                  onPtqClose ={ptqHandleClose}/>:"";
  return (
    <div className="container border my-3">
        <h1>làm việc với Mock-Api</h1>
        <hr/>
        <PtqListUsers renderPtqListUsers={ptqListUsers}/>
        <button className='btn btn-primary' name='btnPtqThemMoi' onClick={ptqHancleAddNew}>Thêm mới</button>
        {ptqElementForm}
    </div>
  );
}

export default PtqApp;
