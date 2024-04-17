import React, { Component } from 'react';

class TVC_EventForm3 extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            name:"Phạm Thế Quyền",
            job:"Dev soft"
        }
    }


    handleChangeName = (ev)=>{
        this.setState({
            name:"K22CNT2ReactJs_PhamTheQuyen"
        })
    }
    handleChangeJob=()=>{
        this.setState({
            job:"Công nghệ phần mềm",
        })
    }
    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Thay đổi dữ liệu trong state</h2>
                <p>DATA:{this.state.name} - {this.state.job}</p>
                <button onClick={this.handleChangeName}>Thay đổi tên</button>
                <button onClick={this.handleChangeJob}>Thay đổi công việc</button>
            </div>
        );
    }
}

export default TVC_EventForm3;