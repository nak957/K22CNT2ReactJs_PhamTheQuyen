import React,{Component} from 'react';
class productList extends Component{
    render(){
        let{renderproducts}=this.props;
        console.log("products:",renderproducts);
        let fnStartus =(param)=>{
            if(param===1){
                return 'Active';
            }
            return'NonActive';
        }
        let elementProduct = renderproducts.map((item,index)=>{
            return(
                <>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                           {/*  <td>{item.startus==1?'Active':'NonActive'}</td> */}
                           <td>
                            {fnStartus(item.startus)}
                           </td>
                        </tr>
                </>
            )
        })
        return (
            <div>
                <h2>danh sách sản phẩm </h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {elementProduct}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default productList