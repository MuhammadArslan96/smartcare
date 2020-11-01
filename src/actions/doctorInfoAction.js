import firebase from '../config/index'
import { ToastsStore } from 'react-toasts';
const log = console.log
export const addDoctorInfo = (doc_info) => dispatch => {
    var user = firebase.auth().currentUser;
    // let doc_info = {
    //   data:info,
    //   id:user?.uid
    // }
    console.log(doc_info)
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
  let arrD = []
  let user = firebase.auth().currentUser;
  var ref = firebase.database().ref('users/')
  log(user)
  
  ref.once('value' , function(snapshot){  
    snapshot.forEach(function(childsnap){

      console.log(childsnap.val())
      let key = childsnap.val().id
      let data = snapshot.val() 
      // for(let key in data){
        // console.log(value)
        var child = firebase.database().ref('users/' + key ).child('doctorInfo');
        console.log(child)
        var userData = firebase.database().ref('users/' + key )
      let isId = null
        child.once('value' , function(snap){              
          console.log(snap.val() !== null ? snap.val() : 'nh hy')
            if(snap.val() !== null) {
              let value = snap.val()
              console.log(snap.val());
              isId = snap.val().id
              arrD.push(value)
              setTimeout(() => {
                
                dispatch({
                  type:"DOCTOR_INFO",
                  payload: arrD
              })
              }, 500);
            }
           
         
          })   
     
      // }
      if(arrD.length>0){
        console.log(arrD)
          
 
        }
      } 
      )
      
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

export const doctorOrder = (data) => dispatch => {
  var ref = firebase.database().ref('doctorOrders/' );
  ref.push(data)
  ToastsStore.success('Succesfully order placed')

}

export const getAllDoctorOrders = () => dispatch => {
  var ref = firebase.database().ref('doctorOrders/');
  ref.once('value' , function(snapshot){  
      let arr = []
      snapshot.forEach(values=>{
        let data = snapshot.val() 
        arr.push(values.val())

        })
           dispatch({
                  type:"DOCTOR_ORDERS",
                  payload: arr
              })
     
  // ToastsStore.success('Succesfully order placed')
  // console.log(arr,'arroo')  
})
}

export const sendQuotationToUser = () => dispatch => {

}