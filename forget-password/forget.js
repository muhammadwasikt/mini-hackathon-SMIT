// firebase import
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "../firebase.js";

// email input
let email = document.getElementById('email')

// forget Button
let forgetButton = document.getElementById('f-p-btn')

// forgot function
forgetButton.addEventListener('click',()=>{
    sendPasswordResetEmail(auth, email.value)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})