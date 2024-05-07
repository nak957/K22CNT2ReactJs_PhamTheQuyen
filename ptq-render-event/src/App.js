import React,{Component} from 'react';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      products: [
        {title:'Cabbage',id: 1},
        {title:'Garlic',id: 2},
        {title:'Apple',id: 3},
        {title:'Samsung',id: 4},
      ]

    }
  }
  HandldSubmit =(param)=>{
    console.log("App:",param);
    let  {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render()
  {
    return(
      <div className='container border mt-5'>
        <h1>phạm thế quyền - render - data - event form</h1><hr/> 
        <productList renderproducts={this.state.products}/>
        <hr/>
        <productAdd onSubmit={this.HandldSubmit}/>
      </div>
    );
    
  }
}
export default App;