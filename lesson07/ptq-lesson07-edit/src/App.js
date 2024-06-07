import "./App.css";
import { React, useState } from "react";
import PTQListTask from "./component/PTQListTask";
import PTQAddEditAndDelete from "./component/PTQAddEditAndDelete";
function App() {
  // Mock data
  const PTQ_listTasks = [
    {
      ptq_taskId: 2210900059,
      ptq_taskName: "Phạm Thế Quyền",
      ptq_level: "Small",
    },
    {
      ptq_taskId: 1,
      ptq_taskName: "Học lập trình frontend",
      ptq_level: "Small",
    },
    {
      ptq_taskId: 2,
      ptq_taskName: "Học lập trình reactjs",
      ptq_level: "Medium",
    },
    {
      ptq_taskId: 3,
      ptq_taskName: "Lập trình với Frontend - Reactjs",
      ptq_level: "High",
    },
    {
      ptq_taskId: 4,
      ptq_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      ptq_level: "Small",
    },
  ];
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [ptqListTasks, setptqListTasks] = useState(PTQ_listTasks);

  // tạo state dữ liệu cho form (add, edit)
  // Đối tượng task
  const ptqTaksObj = {
    ptq_taskId: 0,
    ptq_taskName: "NTU",
    ptq_level: "Medium",
  };
  // Tạo state
  const [ptqTask, setptqTask] = useState(ptqTaksObj); // dữ liệu trên form
  // state đê phân biệt trạng thái là thêm mới hay sửa
  const [ptqIsAddOrEdit, setptqIsAddOrEdit ] = useState(true); // mặc định ban đầu là form thêm mới

  // Nhận dữ liệu khi sửa
  const ptqHandleEdit = (param) => {
    console.log("App - Edit:", param);
    
    setptqTask(param);
    // Cập nhật trạng thái form là sửa
    setptqIsAddOrEdit(false);
  };

  const ptqHandleSubmit = (ptqParam) => {
    console.log("App:", ptqParam);
    if(ptqIsAddOrEdit===true){ // trường hợp thêm mới dữ liệu
      setptqListTasks((prev) => {
        return [...prev, ptqParam];
      });
    }else{ 
      for (let i = 0; i < ptqListTasks.length; i++) {
          if(ptqListTasks[i].ptq_taskId == ptqParam.ptq_taskId){
            ptqListTasks[i] = ptqParam;
            break;
          }
      }
      
      setptqListTasks((prev) => {
        return [...prev];
      });
    }
  };

 
  const ptqHandleDelete = (param)=>{
    let ptqResult = ptqListTasks.filter(x=>x.ptq_taskId != param.ptq_taskId);
    setptqListTasks(ptqResult);
  }
  return (
    <div className="container border">
      <h1>Phạm Thế Quyền - K22CNT2</h1>
      <hr />
      <div>
        {/* Danh sách list task  */}
        <PTQListTask
          renderptqListTasks={ptqListTasks}
          onptqTaskEdit={ptqHandleEdit}
          onptqTaskDelete = {ptqHandleDelete}
        />
      </div>
      <div>
        <PTQAddEditAndDelete 
            renderptqTask = {ptqTask}
            renderptqIsAddOrEdit = {ptqIsAddOrEdit}
            ptqOnSubmit={ptqHandleSubmit} />
      </div>
    </div>
  );
}

export default App;