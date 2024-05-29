import React, { useState } from "react";
export default function PtqTaskAddOrEdit( ptqOnSubmit){
    //đối tượng task
    const ptqTaskObj={
        ptq_taskId:0,
         ptq_taskName:"",
         ptq_level:""
    }
    const[ptqtask, setPtqTask]=useState();
    //hàm xử lý sự kiện thay đổi trên điều khiển 
    const ptqHandleChange =(ptqEvent)=>{
        let name=ptqEvent.target.name;
        let value=ptqEvent.target.value;

        setPtqTask(prev=>{
            return{
                ...prev,    
            [name]:value,
            }
        })
        console.log(ptqtask);
    }   
    const ptqHandleSubmit = (ptqEvent)=>{
        ptqEvent.preventDefault();
        ptqOnSubmit(ptqtask)
    }
    return(
        <div>
            <h2>thêm mới task</h2>
            <form>
                
                <div>
                    <label>Task ID</label>
                    <input name='ptq_taskId' value={ptqtask.ptq_taskId} onChange={ptqHandleChange}/>
                </div>
                <div>
                    <label>Task Name</label>
                    <input name='ptq_taskName' value={ptqtask.ptq_taskName} onChange={ptqHandleChange}/>
                </div>
                <div>
                    <label>Task Lever</label>
                   <select name='ptq_level' value={ptqtask.ptq_level} onChange={''}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                   </select>
                </div>
                <button onClick={ptqHandleChange}>ghi lại</button>
            </form>
        </div>
    )
}