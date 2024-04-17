import React from 'react'

export default function TVC_EventForm2() {

    
    const eventHandleClick1 = (content)=>{
        console.log('====================================');
        console.log(content);
        console.log('====================================');
    }
  return (
    <div className='alert alert-success'>
      <h2>Event Demo - bài của Quyền</h2>
        <button onClick={eventHandleClick1("Phạm Thế Quyền")}>Gọi khi render</button>
        <button onClick={()=>eventHandleClick1("K22CNT2ReactJs_PhamTheQuyen")}>Gọi khi click </button>
    </div>
  )
}