// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF_J231OAjO6WNqvVsOQ1nZczghfixdJU",
  authDomain: "social-media-app-f8757.firebaseapp.com",
  projectId: "social-media-app-f8757",
  storageBucket: "social-media-app-f8757.appspot.com",
  messagingSenderId: "831773076863",
  appId: "1:831773076863:web:697ab941b54dd238413e4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };