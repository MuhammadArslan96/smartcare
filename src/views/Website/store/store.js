import React,{Component} from 'react';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:undefined
          }
    }
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('current_item'))
        this.setState({data})
    }
    render() { 
          const {data} = this.state
        return ( 
            <div>
                <p>name: {data?.storeName} </p>
                <p>address: {data?.address} </p>
                <p>medical List </p>
                {data?.medicineList?.map((item,index) => {
                    return (
                        <li>item</li>
                    )
                })}
            </div>
         );
    }
}
 
export default Store;