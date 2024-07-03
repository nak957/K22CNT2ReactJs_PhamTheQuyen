import React, { useEffect, useState }  from "react";


export default function PtqAddOrEdit({onPtqClose, renderUser}){
    console.log(renderUser);
    const[ptqId,setPtqId] = useState(0);
    const[ptqUserName,setPtqUserName] = useState("");
    const[ptqPassword,setptqPassword] = useState("");
    const[ptqEmail,setPtqEmail] = useState("");
    const[ptqPhone,setPtqPhone] = useState("");


    useEffect(()=>{
        setPtqId(renderUser.id)
        setPtqUserName(renderUser.UserName)
        setptqPassword(renderUser.Password)
        setPtqEmail(renderUser.Email)
        setPtqPhone(renderUser.Phone)
    },[renderUser])



    const ptqHandleClose = ()=>{
        onPtqClose(false);
    }
    return(
        <div>
            <div className="">
                <form>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="id">Id</span>
                        <input type="text" class="form-control" 
                        name='id' value={''}
                        placeholder="id" aria-label="id" aria-describedby="id"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="UserName">UserName</span>
                        <input type="text" class="form-control" 
                        name='UserName' value={''}
                        placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="Password">Password</span>
                        <input type="password" class="form-control" 
                        name='Password' value={''}
                        placeholder="Password" aria-label="Password" aria-describedby="Password"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="Email">Email</span>
                        <input type="password" class="form-control" 
                        name='Email' value={''}
                        placeholder="Email" aria-label="Email" aria-describedby="Email"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="Phone">Phone</span>
                        <input type="number" class="form-control" 
                        name='Phone' value={''}
                        placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
                    </div>
                    <button className='btn btn-primary' name='btnPtqSave'>Ghi Lại</button>
                    <button className='btn btn-danger' onClick={ptqHandleClose}>đóng</button>
                </form>
            </div>
        </div>
    )
}