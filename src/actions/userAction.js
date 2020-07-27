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
  ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      let filterd = arr.includes(childData.email)
      // if(filterd.length!==0){
      //   arr.push(filterd)
        log(childData.emafirebaseil)
      if(arr.length!==0){
        arr && arr.forEach(item => {
          log(item.id != childData.id)
        if(item.id !== childData.id){
          arr.push(childData)
          log(arr)
        }
      })
     } else{
      log(arr)
        arr.push(childData)

     }
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
      isApproved:true,
      id:user.id
    })
    log(user)

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
  let arr = []
  try{
    firebase.auth().onAuthStateChanged( (res) => {
      var user = firebase.auth().currentUser;
      log(user)
      if(user !== null){
        if(user.uid === 'pkNEGXoUvUgufASmuW4yjyUwHor2'){
          dispatch({
            type:IS_ADMIN,
            payload:true
          })
        }else{
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
 
  // const message = firebase.messaging()
  // message.requestPermission()
  // .then((res) => {return message.getToken()} )
  // .then((data) => {log(data)})
  // .catch(err => {log(err.message)})  
}
// Login - get user token

