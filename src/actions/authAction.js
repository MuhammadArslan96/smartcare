import axios from "axios";
import {ToastsStore} from 'react-toasts';
import CryptoJS from "crypto-js"
import firebase from '../config/index'
import {
  REGISTER_USER,
  ERROR,
  LOGIN_USER,
} from "./type";
// Register User
let log = console.log
export const registerUser = (userData, history) => dispatch => {
 console.log(userData,firebase.createUserWithEmailAndPassword)
//  ToastsStore.success("Succesfully Signup")
 firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
 .then(res => {
   log(res.user)
   if(res.user){
    var ciphertext = CryptoJS.AES.encrypt(res.user.uid, 'firebase uid key').toString();
    log(res.user.uid,ciphertext)
   let user = firebase.database       
   localStorage.setItem('uid',ciphertext)

  //  user.updateProfile({
  //   displayName: userData.isDoctor===true ? 'doctor' : 'anotheruser'  ,
  //   // photoURL: "https://example.com/jane-q-user/profile.jpg"
  // }).then(function() {
  //   // Update successful.
  // }).catch(function(error) {
  //   // An error happened.
  // });
       
         log(user,'user')  

     firebase.database().ref('users/' + res.user.uid).set({
      name:userData.name,
      email:userData.email,
      password:userData.password,
      // number:userData.number,
      isDoctor:userData.isDoctor,
      id: res.user.uid,
      isApproved: false
     })
     .then(res => {
      ToastsStore.success("Succesfully Signup")
      dispatch({
        type: REGISTER_USER,
        payload: userData
      })

      if(userData.isDoctor===true){
        history.push('/dashboard')
      }else{
      history.push('/home')
      }
     })
     .catch(err => console.log(err.message))
   }
 }).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
  //  ToastsStore.error(error.message);
   log(error.message)
   ToastsStore.error(error.message)
    dispatch({
      type: ERROR,
      payload: error.message,
   // ...
 })
 
 })
};
// Login - get user token
export const loginUser = (userData,history) => dispatch => {
  // let db = firebase.database()
  log(CryptoJS,firebase)
  firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
   .then(res => {
    //  ToastsStore.success('Succesfully Login',res.user.uid)
     var ciphertext = CryptoJS.AES.encrypt(res.user.uid, 'firebase uid key').toString();
     log(res.user.uid,ciphertext)
    let user = firebase.database       
    // localStorage.setItem('uid',ciphertext)toasts
  
    dispatch({
      type: LOGIN_USER,
      payload: res.user
    })
    var is_user = firebase.auth().currentUser;
    var ref = firebase.database().ref("users/" + res.user.uid);
    log(is_user)
    ref.on('value', function(snapshot) {
      // snapshot.forEach(function(childSnapshot) {
        var childData = snapshot.val();
        log(childData)
          if(childData?.isDoctor === true || res.user.uid === 'HhtJEKBgjQg2rlswT5GlTC2OI1o2'){
            // alert('hello')
              history.push('/dashboard/')
          }  
          else{
            // alert('helo')
            history.push('/home/')
          }
       
      // });
   //  ToastsStore.success("Succesfully Signup") 
   })
    // if(res.user.uid==='SashTSnFCRVGXivxqEL5rPGIlKD2'){
    // }

    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    log(error.message)
    ToastsStore.error(error.message)
    dispatch({
      type: ERROR,
      payload: error.message
    })
    // ...
  })
};

export const logout = (history) => dispatch => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    // ToastsStore.error(error.message)
    dispatch({
      type: LOGIN_USER,
      payload: 'logout'
    })
    localStorage.removeItem('uid')
    console.log('succes logout')
    // history.push('/login')
  }).catch(function(error) {
    // ToastsStore.error(`error due to ${error.message}`)
    dispatch({
      type: ERROR,
      payload:error.message
  });
});
  
}

export const loginWithFb = (history) => dispatch => {

  let provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    log(token,user)
    ToastsStore.success("Succesfully Signin with Facebook")
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    log(error.message)
    ToastsStore.error("Login Fail due to network connection")
    dispatch({
      type: ERROR,
      payload:error.message
  });

    // ...
  });

}

export const loginWithGmail = (history) => dispatch => {

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    try{
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    log(token,user)
    ToastsStore.success("Succesfully Signin with Gmail")
    dispatch({
      type: LOGIN_USER,
      payload: user
    })
    }
    catch(e){
      log(e.message)
    }
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    log(error.message)
    ToastsStore.error("Login Fail due to network connection")
    dispatch({
      type: ERROR,
      payload:error.message
  });
    // ...
  });

}

export const  empty_error = () => dispatch => {

  dispatch({
    payload:undefined,
    type:ERROR
  })
}
