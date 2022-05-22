// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPRcXCVWaHfr5WqZ6ctHR5M_avaFZ9wW4",
  authDomain: "my-blog-app-da863.firebaseapp.com",
  projectId: "my-blog-app-da863",
  storageBucket: "my-blog-app-da863.appspot.com",
  messagingSenderId: "290783705630",
  appId: "1:290783705630:web:399ae209c25c4ac4f00c0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

