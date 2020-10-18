import React,{Component} from 'react';
import { 
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,  
    Form,
    FormGroup,
    ListGroup,
    ListGroupItem,
    Input,   
    Label,
    Row,Table } from 'reactstrap';
import { connect } from 'react-redux';
import {addStoreData,getStoredata} from '../../actions/storeAction'

class MedicalStore extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            storeName:'',
            address:'',
            medicine:'',
            medicineList:[],
            formula:'',
            expiry:'',
         }
    }
    componentDidMount() {
        this.props.getStoredata()
    }

    componentDidUpdate(prevProps, prevState) {
    console.log(this.props.store_info,prevProps.store_info,'medicol')
        if(prevProps.store_info !== this.props.store_info && this.props.store_info){
            // if(this.props.medicineList && this.props.address && this.props.storeName){
                const {medicineList,storeName,address} = this.props.store_info;
                console.log(storeName)
                this.setState({medicineList:!medicineList?[]:medicineList,storeName,address})
            // }
        }
    }
    onChange=e=>this.setState({[e.target.name]:e.target.value})

    keyDown=e=>{
        const {medicineList,formula,expiry,medicine} = this.state
        if(e.key == 'Enter'){
            let arr = this.state.medicineList;
            arr.push({name:this.state.medicine,expiry,formula});
            console.log(arr)
            this.setState({medicine:'',medicineList:arr})
        }
    }

delItem=index=>{
    let arr = this.state.medicineList;
    arr.splice(index,1);
    this.setState({medicineList:arr})
}

onSubmitForm=e=>{
    const {storeName,address,medicineList,formula,expiry,medicine} = this.state
    // if(e.key == 'Enter'){
        let arr = this.state.medicineList;
        console.log(arr)
        arr.push({name:medicine,expiry,formula});
        console.log(arr)
        this.setState({medicine:'',medicineList:arr},()=>{

            let newObject={
                storeName,address,medicineList
            }
            this.props.addStoreData(newObject)
            console.log(newObject)
        })
    // }
}
    render() { 
        const {storeName,medicine,address,medicineList,formula,expiry} = this.state
        console.log(this.props.store_info,this.state)
        return ( 
            <div>
                <Row>
                <Col xs="12" md="6">
                <Card>
                <CardHeader>
                    <strong>Add Your Detail</strong> 
                </CardHeader>
                <CardBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <FormGroup row>
                        <Col md="3">
                        <Label>Name</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input type="text" id="text-input" name='storeName' onChange={this.onChange} value={storeName}
                            placeholder="Medical Store name" required />
                       </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="text-input">Complete Address</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="text" id="text-input" name='address' onChange={this.onChange} value={address}
                         placeholder="Complete clinic/hospital addres" required />
                        </Col>
                    </FormGroup>
                                      
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="text-input">Add Your Medicine Name</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="text" id="text-input" name='medicine' value={medicine}
                         onChange={this.onChange} placeholder='Add your medicine' onKeyDown={this.keyDown}  >
                        </Input>
                        {/* <FormText color="muted">This is a help text</FormText> */}
                        </Col>
                    </FormGroup> 
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="text-input">Bio Formula</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="text" id="text-input" name='formula' value={formula}
                         onChange={this.onChange} placeholder='Medicine Bio formula' onKeyDown={this.keyDown}  >
                        </Input>
                        {/* <FormText color="muted">This is a help text</FormText> */}
                        </Col>
                    </FormGroup> 
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="text-input">Expiry Date</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="number" id="text-input" name='expiry' value={expiry}
                         onChange={this.onChange} placeholder='Medicine Expiry Date' onKeyDown={this.keyDown}  >
                        </Input>
                        {/* <FormText color="muted">This is a help text</FormText> */}
                        </Col>
                    </FormGroup>                      
                            <Col xs="12" md="12">
                           {medicineList?.length>0 &&
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify"></i><strong>Medicine List </strong>
                                   
                                </CardHeader>
                                <CardBody>
                                    <ListGroup>
                                        <ListGroupItem>
                                            Sr <strong style={{marginLeft:'50px',cursor:'pointer',color:'red'}} ></strong>Name<strong style={{marginLeft:'50px',cursor:'pointer',color:'red'}} ></strong>
                                            Formula<strong style={{marginLeft:'50px',cursor:'pointer',color:'red'}} ></strong>
                                             Expiry
                                        </ListGroupItem>
                                    </ListGroup>
                                        {medicineList.length>0 && medicineList.map((item,index)=> {
                                            return (
                                        <ListGroup>
                                                <ListGroupItem key={index} onClick={this.delItem.bind(this,index)} > 
                                                    {index+1} <strong style={{marginLeft:'50px',cursor:'pointer',color:'red'}} ></strong> {item.name} <strong style={{marginLeft:'50px',cursor:'pointer',color:'red'}} ></strong>
                                                    {item.formula} <strong style={{marginLeft:'50px',cursor:'pointer',color:'red'}} ></strong>
                                                    {item.expiry} <strong style={{marginLeft:'50px',cursor:'pointer',color:'red'}} >X</strong>
                                                </ListGroupItem>
                                             
                                    </ListGroup>

                                            )
                                        })}
                                </CardBody>
                            </Card>
    }
                            </Col>                                            
                    </Form>
                </CardBody>
                <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.onSubmitForm}><i className="fa fa-dot-circle-o"></i>
                     Submit</Button>
                </CardFooter>
                </Card>
            
            </Col>
                   
                </Row>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    console.log(state.storeReducer)
    return {
      currentUser : state.users.currentUser,
      is_admin : state.users.is_admin,
      loading : state.users.loading,
      store_info : state.storeReducer.store_info,
    }
}

export default connect(mapStateToProps,{addStoreData,getStoredata})(MedicalStore);