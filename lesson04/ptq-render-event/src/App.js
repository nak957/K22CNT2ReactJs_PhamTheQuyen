import React, { Component } from 'react';
import PTQ_ProductList from './component/PTQ_ProductList';
import PTQ_AddProduct from './component/PTQ_AddProductList';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Cabbage', id: 1, status: 1},
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'Iphone', id: 4, status: 1}
      ]
    }
  }
  PTQ_handleSubmit = (paragram) =>{
    console.log("App:",paragram);
    //thêm vào mảng dữ liệu product
    let {products} = this.state;
    products.push(paragram);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Phạm Thế Quyền - Render Data - Event Form</h1>
        <hr/>
        <PTQ_ProductList renderProduct = {this.state.products} />
        <hr/>
        <PTQ_AddProduct onSubmit = {this.PTQ_handleSubmit} />
      </div>
    );
  }
}

export default App;