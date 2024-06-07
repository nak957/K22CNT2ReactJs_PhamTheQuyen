import React from 'react'

export default function PTQListTask({renderptqListTasks, onptqTaskEdit, onptqTaskDelete}) {
    console.log(renderptqListTasks);
    // Hàm xử lý khi sửa
    const ptqHandleEdit = (param)=>{
        console.log("Click edit:", param);
        onptqTaskEdit(param) //Đẩy lên App thông qua props (ontdtdTaskEdit)
    }
    // Hàm xử lý khi xóa
    const ptqHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            onptqTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
        }
    }
    // render data
    let ptqElementTask = renderptqListTasks.map((task, index)=>{
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{task.ptq_taskId}</td>
                <td>{task.ptq_taskName}</td>
                <td>{task.ptq_level}</td>
                <td>
                    <button className='btn btn-success'
                        onClick={()=>ptqHandleEdit(task)}
                        >Edit</button>    
                    <button className='btn btn-danger'
                    onClick={()=>ptqHandleDelete(task)} >
                        Remove</button>    
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {ptqElementTask}
            </tbody>
        </table>
    </div>
  )
}