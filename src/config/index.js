
 import firebase from 'firebase'
  
  var firebaseConfig = {
    // apiKey: "AIzaSyAix_OWwQ89fACYH59AC5A4W4SNKnmcJfk",
    // authDomain: "saracamp-f5e13.firebaseapp.com",
    // databaseURL: "https://saracamp-f5e13.firebaseio.com",
    // projectId: "saracamp-f5e13",
    // storageBucket: "saracamp-f5e13.appspot.com",
    // messagingSenderId: "832219371267",
    // appId: "1:832219371267:web:fdae5150731c7ac7c1fb36",
    // measurementId: "G-LBXN7EH4SZ"
    apiKey: "AIzaSyD9P-ot1_E9jDmHKVBnnw6M-xWE0V1jlvw",
    authDomain: "smartcare1-90f98.firebaseapp.com",
    databaseURL: "https://smartcare1-90f98.firebaseio.com",
    projectId: "smartcare1-90f98",
    storageBucket: "smartcare1-90f98.appspot.com",
    messagingSenderId: "1042024220464",
    appId: "1:1042024220464:web:c574e83141045414e1aaf5",
    measurementId: "G-3HZ1VGSR1L"
  };

 
  {/* // Initialize Firebase */}
  try{
   firebase.initializeApp(firebaseConfig,);
  firebase.analytics();
  console.log(firebase)

  }
  catch(e){
  console.log(e.message)
  }
    // var database = firebase.database();

// </script>
export default firebase