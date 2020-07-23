import firebase from '../config/index'
import { ToastsStore } from 'react-toasts';
const log = console.log
export const addDoctorInfo = (doc_info) => dispatch => {
    var user = firebase.auth().currentUser;
    var ref = firebase.database().ref('users/' + user?.uid);
    ref.child('doctorInfo').set({...doc_info})

    // console.log(data,user,ref)
    dispatch({
        type:"DOCTOR_INFO",
        payload:doc_info
    })

    ToastsStore.success("Your data succesfully saved")
}

export const getDoctorInfo = (doc_info) => dispatch => {
  var user = firebase.auth().currentUser;
  var ref = firebase.database().ref('users/' + user?.uid).child('doctorInfo');
  ref.on('value' , function(snapshot){
    let data = snapshot.val() 
    log(data)
    dispatch({
      type:"DOCTOR_INFO",
      payload: data
  })
  })

}
export const getAllDoctorInfo = (doc_info) => dispatch => {
  let arr = []
  let user = firebase.auth().currentUser;
  var ref = firebase.database().ref('users/')
  log(user)
  ref.on('value' , function(snapshot){
    // snapshot.forEach(values=>{
      let data = snapshot.val() 
      for(let key in data){
        let str = key.toString()
        let child = firebase.database().ref('users/' + str+  '/doctorInfo')
        log(child)
      child.on('value' , function(snapshot){
       let childdata = snapshot.val()
        log(key,childdata,user,child)
      })
      }
    //   arr.push(data)
      log(data)
    // })
    dispatch({
      type:"DOCTOR_INFO",
      payload: arr
  })
  })

}

export const getQuotations = () => dispatch => {
  let arr = []
  const ref = firebase.database().ref("quotations/");  
  ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // ToastsStore.warning("data")

      var childData = childSnapshot.val();
      // let filterd = arr.includes(childData.email)
     
        log(childData)
        arr.push(childData)

      log(arr)
      dispatch({
        type:"QUOTATIONS",
        payload:arr
      })
    });
  });
}

export const sendQuotationToUser = (data) => dispatch => {
  
}
