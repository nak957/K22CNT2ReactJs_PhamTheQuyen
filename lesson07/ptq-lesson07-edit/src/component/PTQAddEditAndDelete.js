import React, { useEffect, useState } from 'react'

export default function PTQAddEditAndDelete({renderptqTask, renderptqIsAddOrEdit,ptqOnSubmit}) {
    
    const [ptqTask, setptqTask] = useState(renderptqTask);
    useEffect(()=>{
        setptqTask(renderptqTask)
    },[renderptqTask])

    // tạo tiêu đề form
    const ptqTieuDe = renderptqIsAddOrEdit == true?"Thêm mới task":"Sửa thông tin task";
    // Hàm xử lý sự kiện thay đổi trên điều khiển
    const ptqHandleChange = (ptqEvent)=>{
        let name = ptqEvent.target.name;
        let value = ptqEvent.target.value;

        setptqTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    
    const ptqHandleSubmit = (ptqEvent)=>{
        ptqEvent.preventDefault();
        ptqOnSubmit(ptqTask);
    }
  return (
    <div>
        <h2>{ptqTieuDe}</h2>
        <form >
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input type="text" 
                    name='ptq_taskId' value={ptqTask.ptq_taskId} onChange={ptqHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task ID</span>
                <input type="text" 
                    name='ptq_taskName' value={ptqTask.ptq_taskName} onChange={ptqHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
    
                <select name='ptq_level' value={ptqTask.ptq_level} onChange={ptqHandleChange}  className="form-control" 
                    aria-describedby="basic-addon"> 
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={ptqHandleSubmit} className='btn btn-primary'>Ghi lại</button>
        </form>
    </div>
  )
}