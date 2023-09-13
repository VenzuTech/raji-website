// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB50ZZ22tpDNs-jHR-1cdFDz46qkJyoG6M',
  authDomain: 'venzutech-freefirebase.firebaseapp.com',
  projectId: 'venzutech-freefirebase',
  storageBucket: 'venzutech-freefirebase.appspot.com',
  messagingSenderId: '34248005374',
  appId: '1:34248005374:web:681de46de03b121d1a77af',
  measurementId: 'G-4S440ERVGQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
