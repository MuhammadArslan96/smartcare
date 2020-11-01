import React,{Component} from 'react';
import {connect} from 'react-redux'
import {getAllStores} from '../../../actions/storeAction'
import {Row,Badge} from 'reactstrap'
import Header from '../Header/Header'
import './style.css'
import Store from './store';
import { ToastsStore } from 'react-toasts';
class StoreList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            selectedStore:undefined,
            everFalse:false,
         }
    }
    componentDidMount() {
        this.props.getAllStores()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.store_list !== prevProps.store_list){
            console.log(this.props.store_list,'storo')
            this.setState({data:this.props.store_list})
        }
    }
    openStore=(item,index)=>{
        console.log(item)
        if(!item?.medicineList) {
            ToastsStore.error("there is no medicine for this store")
            return
        }
        this.setState({selectedStore:item})
        localStorage.setItem('current_item', JSON.stringify(item))
        this.props.history.push('/store')
    }
    render() { 
        const {data} = this.state
        return ( 
            <div style={{backgroundColor:'#ffffff'}} >
                 <Header />
                        <div className="homeBanner">
            <img style={{opacity:0.9,height:'26vw'}} src={require('./images/store.jpg')} className="img-fluid" alt="admin@bootstrapmaster.com" />
                                    <div className="bannerText">
                                        <div className="d-flex flex-column bd-highlight mb-3" >
                              
                                <br/><br/><br/><br/><br/><br/><br/><br/>
                              
                                </div>
                            </div>
                    </div>
                
                <div>
                    <h2 style={{}} >Featured Medical Store</h2>
                </div>
                {data.length==0 ? <p>Loading...</p> : data.map((item,index) => {
                    console.log(index%2 == 0)
                    return (
                        <ul className='items_parent_ul' onClick={this.openStore.bind(this,item,index)} >
                            <li >
                                <ul className='items_ul'   onClick={this.openStore.bind(this,item,index)} >
                                    <li style={{position:'relative',bottom:'2.7vw'}} > 
                                        <img width='100px' 
                                        src={index%2 == 0 ? require('./images/store1.svg') :
                                        require('./images/store2.svg')} />
                                    </li>
                                    <li style={{marginLeft:'3vw',cursor:'pointer'}} onClick={this.openStore.bind(this,item,index)}>
                                        <ul className='inner_ul' >
                                            <li style={{marginTop:'1.2vw'}}>
                                                Store : {item.storeName}</li>
                                            <li style={{marginTop:'1.2vw'}}>
                                            Status : <Badge color='success'> open </Badge>
                                            </li>
                                            <li style={{marginTop:'1.2vw'}}>
                                                Address :  {item.address} </li>
                                        </ul>
                                          </li>
                                    <li>sds</li>
                                </ul>
                            </li>                       
                        </ul>
                    )
                }) }
                {this.state.everFalse !== false && <Store  data={this.state.selectedStore} />}
            </div>
         );
    }
}
 
const mapStatToProps = state => {
    return {
        store_list : state.storeReducer.store_list,
    }
}
export default connect(mapStatToProps,{getAllStores})(StoreList);