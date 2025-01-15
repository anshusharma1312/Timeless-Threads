// Import the functions you need from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBom8Khcz7iJ6RSVo2NE0UZj0pDEwjPqE4",
  authDomain: "timeless-threads-89195.firebaseapp.com",
  projectId: "timeless-threads-89195",
  storageBucket: "timeless-threads-89195.firebaseapp.com",
  messagingSenderId: "1079553203239",
  appId: "1:1079553203239:web:48626b45c4290ac3eb4202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Sign In
const signInButton = document.getElementById('submit');
signInButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Firebase Sign In function
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      alert("Sign In Successful! Welcome, " + user.email);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});

// Handle Sign Up
const signUpButton = document.querySelector("#signUpForm button");
signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Get input values
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const confirmPassword = document.getElementById("signUpConfirmPassword").value;

  // Validate passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Firebase Sign Up function
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Account created successfully
      const user = userCredential.user;
      alert("Account created successfully! Welcome, " + user.email);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});
