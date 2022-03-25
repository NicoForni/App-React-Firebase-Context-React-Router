import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey ,
  authDomain: process.env.REACT_APP_authDomain ,
  projectId: process.env.REACT_APP_projectId ,
  storageBucket: process.env.REACT_APP_storageBucket ,
  messagingSenderId: process.env.REACT_APP_messagingSenderId ,
  appId: process.env.REACT_APP_appId
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const firestoreDatabase = getFirestore(app)





// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDlKJ2BsLcix6tuvT-LPMDYJoDH53f6bWY",
//   authDomain: "ecommerce-nico.firebaseapp.com",
//   projectId: "ecommerce-nico",
//   storageBucket: "ecommerce-nico.appspot.com",
//   messagingSenderId: "376017860208",
//   appId: "1:376017860208:web:f4862dbdb45308277f26b5"
// };