import React,{Component} from 'react';
import {CardBody,Table} from 'reactstrap'
class Store extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:undefined,
            search:''
          }
    }
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('current_item'))
        this.setState({data})
    }

    search_filter=e=>{
        this.setState({search:e.target.value.substr(0,20)})
    }
    render() { 
          const {data,search} = this.state
          console.log(data)
          let filtered_medicine = data?.medicineList ? data?.medicineList.filter((item,index)=>{
              return item.name.toLowerCase().indexOf(this.state.search) !== -1 
          }) : []
          let same ;
           let fors = data?.medicineList.length>0 && data?.medicineList.forEach(uper => {
                same = filtered_medicine.filter(lower => {  
                    console.log(uper.formula == lower.formula)                  
                    return uper.formula == lower.formula
                })
                console.log(same,filtered_medicine,fors)
          })
        return ( 
            <div style={{backgroundColor:'white'}} >
                <div className='store_banner' >
                    <h2 style={{color:'#31325D',padding:'10px'}} >
                       <img src={require('./images/store1.svg')} width='50px' />{data?.storeName} </h2>
                    <input className='search'
                     placeholder='search medicine' type='text' onChange={this.search_filter} value={search} />
                </div>
             
                <CardBody>
                        <Table responsive bordered>
                        <thead>
                        <tr>
                            <th>Medicine Name</th>
                            <th>Formula</th>
                            <th>Expiry date</th>

                            {/* <th>Action</th> */}
                        </tr>
                        </thead>
                        <tbody>
                            {filtered_medicine.length!==0 && filtered_medicine.map((item,index) => {
                                return (
                                    <tr> 
                                        <td>{item.name} </td>                                       
                                        <td>{item.formula} </td>                                       
                                        <td>{item.expiry} </td>                                       
                                    </tr> 
                                   
                                )
                            })}
                                             
                        </tbody>
                        
                        </Table>
                       
                    </CardBody>
                   
            </div>
         );
    }
}
 
export default Store;