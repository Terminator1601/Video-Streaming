// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7aO-R7_5Tnj38YQS_0jUS1kRvKg49I_8",
  authDomain: "videostreaming-417509.firebaseapp.com",
  projectId: "videostreaming-417509",
  storageBucket: "videostreaming-417509.appspot.com",
  messagingSenderId: "162864843484",
  appId: "1:162864843484:web:0904b5b52aed9cc990c219",
  measurementId: "G-CVGGNRSQH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;