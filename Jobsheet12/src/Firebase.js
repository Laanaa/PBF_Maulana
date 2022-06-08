import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};


const config = {
  apiKey: "AIzaSyDSQABZHZlF6W60X-Q6SW-dcIVC759O_VE",
  authDomain: "reactpbf.firebaseapp.com",
  projectId: "reactpbf",
  storageBucket: "reactpbf.appspot.com",
  messagingSenderId: "1030852580335",
  appId: "1:1030852580335:web:00913caef03d1362485c1a",
  measurementId: "G-17WCT2JVQS"
};
// const config = {
//   apiKey: "AIzaSyB1dW-X5MnIVbktbSeyeNinfvrsV0G8WYo",
//   authDomain: "flutterfirebase-2be5d.firebaseapp.com",
//   databaseURL: "https://flutterfirebase-2be5d-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "flutterfirebase-2be5d",
//   storageBucket: "flutterfirebase-2be5d.appspot.com",
//   messagingSenderId: "688280762161",
//   appId: "1:688280762161:web:cceb1284e1cd0bfcb86210",
//   measurementId: "G-C8CXTNMWFG"
// };
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
