// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwKF7kYGjftNQ0NOS6cqaiyLHn_IExM6g",
  authDomain: "foodie-franzy.firebaseapp.com",
  projectId: "foodie-franzy",
  storageBucket: "foodie-franzy.appspot.com",
  messagingSenderId: "549234430985",
  appId: "1:549234430985:web:354ddf65fbe4ab301e14d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;