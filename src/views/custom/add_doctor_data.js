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
    FormText,
    FormFeedback,
    Input,   
    Label,
    Row,Table } from 'reactstrap';
import { connect } from 'react-redux';
import {addDoctorInfo,getDoctorInfo} from '../../actions/doctorInfoAction'
import { ToastsStore } from 'react-toasts';
import MedicalStore from './medicalStore'
// import { filter } from 'core-js/fn/array';

const log = console.log
// let savedScheduleArr=[]
class AddDoctorData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectDay:undefined,
            schedule:undefined,
            toggle:false,
            timeFrom:undefined,
            timeTo:undefined,
            apmFrom:undefined,
            apmTo:undefined,
            savedSchedule:[],
            Specialization:undefined,
            address:undefined,
            experience:undefined,
            description:undefined,
            gender:undefined,
            isEdit:false,
            editRow:undefined
         }
    }

    onChange=e=>this.setState({[e.target.name]:e.target.value})

addSchedule=()=>{
    const {timeFrom, timeTo, apmFrom, apmTo,selectDay,savedSchedule,editRow} = this.state;
    this.setState({timeFrom:'', timeTo:'', apmFrom:'', apmTo:'',selectDay:''})
let newSchedule = {timeFrom, timeTo, apmFrom, apmTo,selectDay}
if(timeFrom=='' ||timeFrom==undefined || timeTo==''||timeTo==undefined|| apmFrom=='' ||apmFrom==undefined
 ||apmTo==''||apmTo==undefined||selectDay==''||selectDay==undefined){
    ToastsStore.error("Please Select  All fields")
    return false
}
if(editRow!==undefined){
    // ToastsStore.warning("if ka ka",editRow)
    let filtered = this.state.savedSchedule;
    filtered[editRow] = newSchedule;
    this.setState({savedSchedule:filtered,toggle:false,editRow:undefined,isEdit:false});
}else{
    // ToastsStore.warning("else ka")
    let savedScheduleArr = savedSchedule
    savedScheduleArr.push(newSchedule)
    
    this.setState({savedSchedule:savedScheduleArr,toggle:false,})
}

// let finalData={}

log(savedSchedule)
} 

onSubmitForm=()=>{
    // alert('hello')
const {Specialization,address, experience, description,gender,savedSchedule} = this.state
    if(Specialization==undefined || Specialization=='' ||address==''||address==undefined||
     address==''|| address==undefined|| description==''||description==undefined||
     gender==''||gender==undefined||savedSchedule.length===0){
        ToastsStore.error("Fill all the fields ")
        return false
    }
    let data = {
        Specialization,address, experience, description,gender,schedule:savedSchedule
    }
    this.props.addDoctorInfo(data)
    log(data)
}

//WARNING! To be deprecated in React v17. Use componentDidMount instead.
UNSAFE_componentWillMount() {
    
    this.props.getDoctorInfo()
}
componentDidMount() {
    setTimeout(() => {
        if(this.props.doctor_info){
         let propsie = this.props.doctor_info
            this.setState({
                Specialization:propsie.Specialization,
                address:propsie.address,
                description:propsie.description,
                experience:propsie.experience,
                gender:propsie.gender,
                savedSchedule:propsie.schedule,
            })
        }
    }, 1000);
}

// componentDidUpdate(prevState,prevsprops){
//     if(this.props.doctor_info !== prevsprops.doctor_info){
//         let propsie = this.props.doctor_info
//         this.setState({Specialization:propsie.Specialization})
//     }
// }
editSchedule=(item,index)=>{
    ToastsStore.warning("You are in edit mode now")
    this.setState({toggle:true,isEdit:true, timeFrom:item.timeFrom,timeTo:item.timeTo,
                    apmFrom:item.apmFrom,apmTo:item.apmTo,selectDay:item.selectDay,editRow:index})
}
deleteSchedule=()=>{
 const filtered= this.state.savedSchedule;
 filtered.splice(this.state.editRow,1);
 this.setState({savedSchedule:filtered,toggle:false,isEdit:false,editRow:undefined,
                timeFrom:'', timeTo:'', apmFrom:'', apmTo:'',selectDay:''})
}
    render() { 
        log(this.props)
        const {timeFrom, timeTo, apmFrom, apmTo,selectDay,savedSchedule,Specialization,address, experience, description,gender,} = this.state
        let propsie = this.props.doctor_info
        return ( 
            <div className="animated fadeIn">
                {this.props.currentUser?.isMedical == true ? <MedicalStore/>:
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
                        <p className="form-control-static">{this.props.currentUser?.name}</p>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="text-input">Specialization</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="select" id="text-input" name='Specialization' onChange={this.onChange} 
                        value={Specialization} placeholder="Specialization" required>
                            <option>Select a service</option>
                            <option>Eye Specialist</option>
                            <option>ENT Specialist</option>
                            <option>Heart Specialist</option>
                            <option>General Physician</option>
                        </Input>
                        {/* <FormText color="muted">This is a help text</FormText> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="text-input">Complete Address</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="text" id="text-input" name='address' onChange={this.onChange} value={address}
                         placeholder="Complete clinic/hospital addres" required />
                        {/* <FormText color="muted">This is a help text</FormText> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="email-input">Year of Experience</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="number" id="email-input" name='experience' onChange={this.onChange} value={experience}
                         placeholder="Year of experience" required />
                        <FormText className="help-block">Please enter your Relevent Experience </FormText>
                        </Col>
                    </FormGroup>                  
                   
                 
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="textarea-input">Description</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="textarea" name='description' onChange={this.onChange} value={description} rows="9"
                                placeholder="Write Description..." />
                        </Col>
                    </FormGroup>                                 
                   
                    <FormGroup row>
                        <Col md="3">
                        <Label>Gender</Label>
                        </Col>
                        <Col md="9">
                        <FormGroup check inline>
                            <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value={gender}
                            onChange={(e) => {this.setState({gender:'male'})}} />
                            <Label className="form-check-label" check htmlFor="inline-radio1">Male</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value={gender}
                            onChange={(e) => {this.setState({gender:'female'})}} />
                            <Label className="form-check-label" check htmlFor="inline-radio2">Female</Label>
                        </FormGroup>
                       
                        </Col>
                    </FormGroup>                                                                      
                    </Form>
                </CardBody>
                <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.onSubmitForm}><i className="fa fa-dot-circle-o"></i>
                     Submit</Button>
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </CardFooter>
                </Card>
            
            </Col>
                    <Col xs="12" lg="6">
                    <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Set Your Schedule
                    </CardHeader>
                  
                   {this.state.toggle === false&&
                    <CardBody>
                        <Table responsive bordered>
                        <thead>
                        <tr>
                            <th>Saturday</th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            {/* <th>Action</th> */}
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.savedSchedule.length!==0 && this.state.savedSchedule.map((item,index) => {
                                return (
                                    <tr style={{cursor:'pointer'}} onClick={this.editSchedule.bind(this,item,index)}
                                     >                  
                                        {item.selectDay==='Saturday' ?<td>  {item.timeFrom} {item.apmFrom}-{item.timeTo} {item.apmTo} </td>
                                        : <td>-</td>
                                        }   
                                         {item.selectDay==='Sunday' ?<td>  {item.timeFrom} {item.apmFrom}-{item.timeTo} {item.apmTo} </td>
                                        : <td>-</td>
                                        }
                                         {item.selectDay==='Monday' ?<td>  {item.timeFrom} {item.apmFrom}-{item.timeTo} {item.apmTo} </td>
                                        : <td>-</td>
                                        }
                                         {item.selectDay==='Tuesday' ?
                                         <td  >  {item.timeFrom} {item.apmFrom}-{item.timeTo} {item.apmTo} </td>
                                        : <td>-</td>
                                        }
                                         {item.selectDay==='Wednesday' ?<td>  {item.timeFrom} {item.apmFrom}-{item.timeTo} {item.apmTo} </td>
                                        : <td>-</td>
                                        }
                                         {item.selectDay==='Thursday' ?<td>  {item.timeFrom} {item.apmFrom}-{item.timeTo} {item.apmTo} </td>
                                        : <td>-</td>
                                        }                                                             
                                        {item.selectDay==='Friday' ?<td>  {item.timeFrom} {item.apmFrom}-{item.timeTo} {item.apmTo} </td>
                                        : <td>-</td>
                                        }
                                    </tr> 
                                )
                            })}
                                             
                        </tbody>
                        
                        </Table>
                       
                    </CardBody>}
                    {this.state.toggle === true&&
                   
                   <CardBody>

                    <Form>
                   <FormGroup row>
                        <Col md="2">
                        <Label htmlFor="select">Select Day</Label>
                        </Col>
                        <Col xs="12" md="12">
                        <Input type="select" name="selectDay" id="select" onChange={this.onChange} value={selectDay} >
                            <option value="0">Please Select Day</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                        </Input>
                        </Col>
                        {/* <Row> */}
                        <div style={{marginTop:'2vw',marginRight:'2vw'}}>
                        <Col md="12" >
                        <Label htmlFor="select">Select Time</Label>
                        </Col>
                        <Row>
                            <Col >
                            <FormGroup className="pr-1">
                                {/* <Label htmlFor="exampleInputName2" className="pr-1">Name</Label> */}
                                <Input type="number" name='timeFrom' onChange={this.onChange} value={timeFrom} placeholder="From" required />
                            </FormGroup>                  
                            </Col>

                            <Col >
                                <Input type="select"  name='apmFrom' onChange={this.onChange} value={apmFrom}  id="select">
                                    <option value="">am/pm</option>
                                    <option value="am">am</option>
                                    <option value="pm">pm</option>
                                    
                                </Input>
                            </Col>

                            <Col >
                            <FormGroup className="pr-1">
                                {/* <Label htmlFor="exampleInputEmail2" className="pr-1">Email</Label> */}
                                <Input type="number" name='timeTo' onChange={this.onChange} value={timeTo}  placeholder="To" required />
                            </FormGroup>
                            </Col>

                            <Col >
                                <Input type="select" name='apmTo' onChange={this.onChange} value={apmTo} id="select">
                                    <option value="">am/pm</option>
                                    <option value="am">am</option>
                                    <option value="pm">pm</option>
                                    
                                </Input>
                            </Col>
                            </Row>
                            </div>
                        {/* </Row> */}
                    </FormGroup>
                    </Form>
                    </CardBody> }
                    <CardFooter>
                    {this.state.toggle===false&&
                    <Button type="submit" size="sm" color="primary" onClick={()=>{this.setState({toggle:!this.state.toggle})}}><i className="fa fa-dot-circle-o"></i>
                     Add Schedule</Button>}
                    {this.state.toggle===true&&                     
                     <Button type="submit" size="sm" color="primary" onClick={this.addSchedule}><i className="fa fa-dot-circle-o"></i>
                     Save</Button>
                    }
                    <Button onClick={this.deleteSchedule} style={this.state.isEdit==true?{display:'inline'} : {display:'none'}} type="reset" size="sm" color="danger">
                        <i className="fa fa-ban"></i> Delete</Button>
                </CardFooter>
                    </Card>
                </Col>

                </Row>             
                }</div>
         );
    }
}
const mapStateToProps = state => {
    log(state.users)
    return {
      currentUser : state.users.currentUser,
      is_admin : state.users.is_admin,
      loading : state.users.loading,
      doctor_info : state.doctorReducer.doctor_info,
    }
  }
export default connect(mapStateToProps,{addDoctorInfo,getDoctorInfo})(AddDoctorData);