import firebase from '../config/index'
import { ToastsStore } from 'react-toasts';

export const addStoreData = (store_info) => dispatch => {
    var user = firebase.auth().currentUser;
    var ref = firebase.database().ref('storeData/' + user?.uid);
    ref.set(store_info)
    // console.log(data,user,ref)
    dispatch({
        type:"STORE_INFO",
        payload:store_info
    })

    ToastsStore.success("Your data succesfully saved")
}


export const getStoredata = () => dispatch => {
    var user = firebase.auth().currentUser;
    var ref = firebase.database().ref('storeData/' + user?.uid);
    ref.on('value' , function(snapshot){
        let data = snapshot.val() 
        console.log(data)
        dispatch({
          type:"STORE_INFO",
          payload: data
      })
   // console.log(data,user,ref)  
})
}