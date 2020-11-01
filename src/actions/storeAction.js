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

export const getAllStores = () => dispatch => {
    var ref = firebase.database().ref('storeData/');
    ref.once('value' , function(snapshot){  
        let arr = []
        snapshot.forEach(values=>{
          let data = snapshot.val() 
          arr.push(values.val())

          })
             dispatch({
                    type:"STORE_LIST",
                    payload: arr
                })
       
    
    console.log(arr,'arroo')  
})
}

export const storeOrder = (item) => (dispatch) => {
    var ref = firebase.database().ref('orders/' );
    ref.push(item)

}

export const getAllOrders = () => dispatch => {
    var ref = firebase.database().ref('orders/');
    ref.once('value' , function(snapshot){  
        let arr = []
        snapshot.forEach(values=>{
          let data = snapshot.val() 
          arr.push(values.val())

          })
             dispatch({
                    type:"ORDERS",
                    payload: arr
                })
       
    // ToastsStore.success('Succesfully order placed')
    console.log(arr,'arroo')  
})
}