// firebase import
import { createUserWithEmailAndPassword , sendEmailVerification} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth , provider } from "../firebase.js";



// input field
let userName = document.getElementById('user-name')
let userEmail = document.getElementById('user-email')
let userPassword = document.getElementById('user-password')

// checkbox
let passwordCheck = document.getElementById('show-pass')

// button
let regestrationBtn = document.getElementById('reg-btn')

// image
let googleLogin = document.getElementById('google')

// password show function
passwordCheck.addEventListener('click',()=>{
    if (passwordCheck.checked == true) {
    userPassword.type = 'Text'
} else {
    userPassword.type = 'Password'
}
})


// registration function
regestrationBtn.addEventListener('click',()=>{
// validations
if (/^(?=.*[a-z])(?=.*[A-Z])/.test(userName) && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail.value) && /[A-Za-z\d!@#$%^&*]{8,}$/.test(userPassword.value)) {
// authentication
createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href = '../index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode , errorMessage)
    // ..
  });
// email verification
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
// validation error
} else if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(userName)) {
    userName.style.color = 'red'
    console.log('Name error')
}
if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail.value)) {
    userEmail.style.color = 'red'
    console.log('wrong email') 
}
if (!/[A-Za-z\d!@#$%^&*]{8,}$/.test(userPassword.value)){
    userPassword.style.color = 'red'
console.log('wrong password')
}

})
