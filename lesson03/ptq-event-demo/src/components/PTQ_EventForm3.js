import React, { Component } from 'react';

class PTQ_EventForm3 extends Component {

    //Xử lý sự kiện với props, state
    constructor(props){
        super(props);
        //Tạo đối tượng thông qua state
        this.state = {
            name : "Phạm Thế Quyền",
            job : "Normal Person"
        }
    }
    handleChangeName = () =>{
        this.setState({
            name : "PHẠM THẾ QUYỀN",         
        });
    }
    handleChangeJob = () =>{
        this.setState({
            job : "UPPERCASE PERSON",
        })
    }


    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Thay đổi dữ liệu trong state</h2>
                <p>Dữ liệu:{this.state.name} - {this.state.job}</p>
                <button type='button' className='btn btn-success' onClick={this.handleChangeName}>Đổi Name</button>
                <button type='button' className='btn btn-success' onClick={this.handleChangeJob}>Đổi Job</button>
            </div>
        );
    }
}

export default PTQ_EventForm3;