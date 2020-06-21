
 import firebase from 'firebase'
  
  var firebaseConfig = {
    apiKey: "AIzaSyAix_OWwQ89fACYH59AC5A4W4SNKnmcJfk",
    authDomain: "saracamp-f5e13.firebaseapp.com",
    databaseURL: "https://saracamp-f5e13.firebaseio.com",
    projectId: "saracamp-f5e13",
    storageBucket: "saracamp-f5e13.appspot.com",
    messagingSenderId: "832219371267",
    appId: "1:832219371267:web:fdae5150731c7ac7c1fb36",
    measurementId: "G-LBXN7EH4SZ"
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