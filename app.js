// firebase import
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth , db} from "../firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";


// get html elements
let blogDiv = document.querySelector('.blog-div')
let addNewBlog = document.getElementById('add-btn')
let buttonsDiv = document.querySelector('.buttons')
let logOut = document.getElementById('LogOut')
let signUp = document.getElementById('signUp')
let signIn = document.getElementById('signIn')
let title = document.getElementById('title')
let description = document.getElementById('description')

// logOut function
logOut.addEventListener('click',()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
})



// current user check


// functionality
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
signIn.style.display = 'none'
signUp.style.display = 'none'
logOut.style.display = 'block'
    // ...
  } else {
    signIn.style.display = 'block'
signUp.style.display = 'block'
logOut.style.display = 'none'
    // User is signed out
    // ...
  }
});
// Blog Add

// const createNewBlog = ()=>{
// blogDiv.innerHTML += ``
// }  

if (addNewBlog) {
  addNewBlog.addEventListener('click', async ()=>{
   await addDoc(collection(db, "users"), {
        title: title.value,
        description: description.value,
        date: Date()
      });
      console.log("Document written with ID: ", docRef.id);
      console.log(docRef.title , docRef.description)
    })
    
  }
