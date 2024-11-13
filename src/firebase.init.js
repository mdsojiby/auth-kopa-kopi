// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt5szwTcQdh10mek-fraPawWn0SfE-kxY",
  authDomain: "auth-moha-milon-96dc6.firebaseapp.com",
  projectId: "auth-moha-milon-96dc6",
  storageBucket: "auth-moha-milon-96dc6.firebasestorage.app",
  messagingSenderId: "283351884890",
  appId: "1:283351884890:web:461f98e72018cc16956463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);