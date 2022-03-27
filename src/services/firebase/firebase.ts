// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyClJux9kTz331WuToljfaovz_QXsg3szRE',
  authDomain: 'petway-fa4e7.firebaseapp.com',
  databaseURL: 'https://petway-fa4e7-default-rtdb.firebaseio.com/',
  projectId: 'petway-fa4e7',
  storageBucket: 'petway-fa4e7.appspot.com',
  messagingSenderId: '850408238848',
  appId: '1:850408238848:web:1d2d3ffaaf9ed35f228de5',
  measurementId: 'G-EH74GSPR2L'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
