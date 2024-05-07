import React,{Component} from 'react';
class productAdd extends Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            title:'',
            startus:0
        }
    }
    HandleChange=(event)=>{
        let name= event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })
    }
    HandleSubmit =(ev)=>{
        ev.preventDefault();
   
        this.props.onSubmit(this.state);
    }
    render(){
        return(
            <div>
                <h2>thêm mới sản phẩm</h2>
                <form className='col-md-6'>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        ID
                    </span>
                    <input
                        type="text"
                        className="form-control"                       
                        name='id'
                        value={this.state.id}
                        onChange={this.HandleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">
                        title
                    </span>
                    <input
                        type="text"
                        className="form-control"                    
                        name='tittle'
                        value={this.state.title}
                        onChange={this.HandleChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">
                        startus
                    </span>
                    <input
                        type="text"
                        className="form-control"                    
                        name='tittle'
                        value={this.state.startus}
                        onChange={this.HandleChange}
                    />
                </div>
                <button className='btn btn-success'>ghi lại</button>
                </form>
            </div>
        );
    }
}
export default productAdd;