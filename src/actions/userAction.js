import axios from "axios";
import {ToastsStore} from 'react-toasts';
import CryptoJS from "crypto-js"
import firebase from '../config/index'
import {
  MAKE_APPOINTMENT,
  USERS_LIST,
  CURRENT_USER,
  IS_ADMIN,
  
//   LOGIN_USER,
} from "./type";
// Register User

let log = console.log
export const makeAppointment = (userData, history) => dispatch => {
 console.log(userData)
//  ToastsStore.success("Succesfully Signup") 
};

export const getUsers = () => dispatch => {
  let arr = []
  try{
  var ref = firebase.database().ref("users");
  ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      let filterd = arr.includes(childData.email)
      // if(filterd.length!==0){
      //   arr.push(filterd)
        log(childData.emafirebaseil)
        arr.push(childData)
     
      // } else{
        log(arr,childData)

      // }

      dispatch({
        type:USERS_LIST,
        payload:arr
      })
    });
 //  ToastsStore.success("Succesfully Signup") 
 })
}
catch(e){
  log(e.message)
}
}

export const approveDoctor = (user) => dispatch => {
  let arr = []
  try{
    // let uuid = firebase.auth().currentUser();
    log(user.id)
    firebase.database().ref('users/' + user.id).set({
      name:user.name,
      email:user.email,
      password:user.password,
      isDoctor:user.isDoctor,
      isMedical:user.isMedical,
      isApproved:true,
      id:user.id
    })
    user.isMedical===false?
    ToastsStore.success(`${user.name} approved as a doctor`):
    ToastsStore.success(`${user.name} approved as a Medical Store`)
    log(user)
    dispatch({
      type:'APPROVED',
      payload:user.id
    })
    // userRef.on('value', snapshot => {
    //   log(snapshot.val())
    // })
    // log(userRef.child('isApproved'))
}
catch(e){
  log(e.message)
}
}

export const getCurrentUser = () => dispatch => {
  // ToastsStore.success("get user sy")
  // let arr = []
  try{
    firebase.auth().onAuthStateChanged( (res) => {
      var user = firebase.auth().currentUser;
      log(user,'is bahir')
      if(user !== null){
        if(user.email === "admin@gmail.com"){
          // this.props
        log(user,'isadmin')
          dispatch({
            type:IS_ADMIN,
            payload:true
          })
        }else{
        log(user,'isadmin')
        let userRef = firebase.database().ref('users/' + user.uid)
        userRef.on('value', snapshot => {
          let data = snapshot.val()
          dispatch({
            type:CURRENT_USER,
            payload:data
          })
          // this.setState({isUser:data}) 
          log(user.uid,data)
        })
      
      }

      }else{
        log('!user')
      }
    })
}
catch(e){
  log(e.message)
}
}

export const quotationrequest = (data) => dispatch => {
 const quotations = firebase.database().ref("quotations/");
 quotations.push({...data})
 ToastsStore.success("Your Quotation Request Submitted")
  // const message = firebase.messaging()
  // message.requestPermission()
  // .then((res) => {return message.getToken()} )
  // .then((data) => {log(data)})
  // .catch(err => {log(err.message)})  
}
// Login - get user token

