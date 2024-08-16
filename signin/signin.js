// firebase import
import { signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth , provider} from "../firebase.js";


// input field
let userEmail = document.getElementById('user-email')
let userPassword = document.getElementById('user-password')

// checkbox
let passwordCheck = document.getElementById('show-pass')

// button
let loginBtn = document.getElementById('reg-btn')

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


// login function
loginBtn.addEventListener('click',()=>{
    // validations
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail.value) && /[A-Za-z\d!@#$%^&*]{8,}$/.test(userPassword.value)) {
    // authentication
    signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href = '../index.html'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode , errorMessage)
    });
}
    // validation error
    
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail.value)) {
        userEmail.style.color = 'red'
        console.log('wrong email') 
    }
    if (!/[A-Za-z\d!@#$%^&*]{8,}$/.test(userPassword.value)){
        userPassword.style.color = 'red'
    console.log('wrong password')
    }
    
})
if (googleLogin) {
    googleLogin.addEventListener('click',()=>{
        signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        window.location.href = '../index.html'
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used..
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    
      
    }) 
}
