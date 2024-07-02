// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYrcXkSzYNauCY6QypJKtNk_IVHYmn6Gs",
  authDomain: "login-fc3db.firebaseapp.com",
  projectId: "login-fc3db",
  storageBucket: "login-fc3db.appspot.com",
  messagingSenderId: "363044743065",
  appId: "1:363044743065:web:a50a43257c1a12b9955508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Login function
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
    alert('Login successful!');
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Error logging in: ' + error.message);
  }
}

// Signup function
async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential.user);
    alert('Signup successful!');
  } catch (error) {
    console.error('Error signing up:', error);
    alert('Error signing up: ' + error.message);
  }
}

window.onload = () => {
  document.getElementById('loginButton').addEventListener('click', login);
  document.getElementById('signupButton').addEventListener('click', signup);
};
