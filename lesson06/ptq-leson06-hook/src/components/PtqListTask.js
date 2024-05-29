import React from "react";
export default function ptqlistTasks({renderPtqListTask}){
    console.log(renderPtqListTask);
    //render data
    let ptqElementTask = renderPtqListTask.map((task,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{task.ptq_taskId}</td>
                    <td>{task.ptq_taskName}</td>
                    <td>{task. ptq_lever}</td>
                    <td>
                        <button className='btn btn-susccess'>Edit</button>
                        <button className='btn btn-danger'>Remove</button>
                    </td>
                </tr>
            </>
        )
    })
    return(      
        <div>
            <h2>danh sách các nhiệm vụ</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Lever</th>
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