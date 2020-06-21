import * as admin from 'firebase-admin';

export const adminConfig = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://saracamp-f5e13.firebaseio.com'
  });

//   admin.initializeApp();
const auth = admin.auth()

// const getAllUsers = (req, res) => {
//     const maxResults = 1; // optional arg.
  
//     auth.listUsers(maxResults).then((userRecords) => {
//       userRecords.users.forEach((user) => console.log(user.toJSON()));
//       res.end('Retrieved users list successfully.');
//     }).catch((error) => console.log(error.message));
//   };

//   getAllUsers()
  auth.listUsers().then(res => {
      
      console.log(res)
    }) 
    .catch(err => {console.log(err.message)})

//   export default (adminConfig)