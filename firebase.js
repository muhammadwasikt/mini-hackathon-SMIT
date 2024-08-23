 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth , GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyBQ28c5obCnhon8GF52WWq3LBMNY-SVfcY",
    authDomain: "fir-authentication-579a2.firebaseapp.com",
    projectId: "fir-authentication-579a2",
    storageBucket: "fir-authentication-579a2.appspot.com",
    messagingSenderId: "161731544495",
    appId: "1:161731544495:web:79c6dba133e9a912eb9b5a"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 const provider = new GoogleAuthProvider();
 const db = getFirestore(app);

 export {app , auth , provider , db}
