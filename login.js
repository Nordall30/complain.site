// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

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

// Show/hide password function
function togglePassword() {
  const passwordField = document.getElementById('password');
  const toggleButton = document.getElementById('togglePassword');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleButton.textContent = 'Hide';
  } else {
    passwordField.type = 'password';
    toggleButton.textContent = 'Show';
  }
}

window.onload = () => {
  document.getElementById('loginButton').addEventListener('click', login);
  document.getElementById('togglePassword').addEventListener('click', togglePassword);
};
