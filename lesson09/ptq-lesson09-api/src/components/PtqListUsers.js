import React from 'react'
export default function PtqListUsers({renderPtqListUsers}){
    console.log("PtqListUsers:",renderPtqListUsers);
    let ptqEklementUser = renderPtqListUsers.map((ptqUser,index)=>{
        return(
            <>
                <tr>
                <td>{ptqUser.id}</td>
                    <td>{ptqUser.UserName}</td>
                    <td>{ptqUser.Password}</td>
                    <td>{ptqUser.Email}</td>
                    <td>{ptqUser.Phone}</td>
                    <td>...</td>
                </tr>
                    
                    
            </>
        )
    })
    return(
        <div className='row'>
            <table className='table table-borderd'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {ptqEklementUser}
                </tbody>
            </table>
        </div>
    )
}