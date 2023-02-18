// Import the functions you need from the SDKs you need
import  initializeApp  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAqqecfPk8fAAilKqKKxWapmlpw-WMstc",
  authDomain: "meu-cabaz.firebaseapp.com",
  projectId: "meu-cabaz",
  storageBucket: "meu-cabaz.appspot.com",
  messagingSenderId: "986657584945",
  appId: "1:986657584945:web:326a59411d7d07fc9f6210",
  measurementId: "G-12RV0LJPHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);