import React from 'react';

function FuncJsxQuyen(props) {
    const user = {
        name : "Quyền",
        age : 20
    }
    return (
        <div>
            <h2>Function Component Demo</h2>
            <p>
                Welcome {user.name} . Your age is {user.age} .
            </p>
            <hr/>
                <h3>
                    Props:
                    <br/> FullName: {props.fullName}
                    <br/> Age : {props.age}
                </h3>
        </div>
    );
}

export default FuncJsxQuyen;