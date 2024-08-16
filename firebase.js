 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth , GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDd12R5hmCbb11Q3y7V_jLrkztIbY77ZuM",
   authDomain: "fir-auth-95638.firebaseapp.com",
   projectId: "fir-auth-95638",
   storageBucket: "fir-auth-95638.appspot.com",
   messagingSenderId: "585901346305",
   appId: "1:585901346305:web:4cf0535e011b40e40e7a00"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 const provider = new GoogleAuthProvider();
 const db = getFirestore(app);

 export {app , auth , provider , db}