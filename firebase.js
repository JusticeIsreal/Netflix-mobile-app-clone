// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4MWpbZcMH76BlCCUUWg9yWGdjHcrdKBY",
  authDomain: "netflix-clone-ac942.firebaseapp.com",
  projectId: "netflix-clone-ac942",
  storageBucket: "netflix-clone-ac942.appspot.com",
  messagingSenderId: "361146308486",
  appId: "1:361146308486:web:a91aed1851b266f351fe07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
