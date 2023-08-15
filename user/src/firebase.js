// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBvbZ5QbMfC0ju3GqNJbvvuozTM9UZ_GY",
  authDomain: "e-barangay-15146.firebaseapp.com",
  projectId: "e-barangay-15146",
  storageBucket: "e-barangay-15146.appspot.com",
  messagingSenderId: "860385310796",
  appId: "1:860385310796:web:1e85456788016ec35e1ce9",
  measurementId: "G-PRYNJ9K6N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
