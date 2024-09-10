// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHgl-VUIZ1OK3CAZ74NThLdEBkSmwETLA",
  authDomain: "fastener-e6f62.firebaseapp.com",
  projectId: "fastener-e6f62",
  storageBucket: "fastener-e6f62.appspot.com",
  messagingSenderId: "1036347661282",
  appId: "1:1036347661282:web:14450eb7a6b254616b77bb",
  measurementId: "G-40GYCTL1YQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
