import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgIr8M_97g80stP-KRriw6c_Pdi-sfDlk",
  authDomain: "hackathon-2c2da.firebaseapp.com",
  projectId: "hackathon-2c2da",
  storageBucket: "hackathon-2c2da.appspot.com",
  messagingSenderId: "884038989558",
  appId: "1:884038989558:web:1adb039d068842ef8e5ed7",
  measurementId: "G-4STX01DRPX",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };
