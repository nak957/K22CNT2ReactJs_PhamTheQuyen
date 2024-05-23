import React, { Component } from 'react';

class PTQ_EventForm4 extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : "Alexander MC Queen"
        }
    }

    handleGetName = () => {
        alert(this.props.name);
        this.setState({
            name : this.props.name
        })
    }



    render() {
        return (
            <div className='alert alert-info'>
                <h2>Lấy dữ liệu người dùng</h2>
                <button className='btn btn-success' onClick = {this.handleGetName}>Lấy tên</button>
                <h2>Welcome to League of {this.state.name} !</h2>
            </div>
        );
    }
}

export default PTQ_EventForm4;