// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDTFDhlGvr7EkizUMwkzNN7O5GIxeI8CkI',
    authDomain: 'testproject-fcdb0.firebaseapp.com',
    projectId: 'testproject-fcdb0',
    storageBucket: 'testproject-fcdb0.firebasestorage.app',
    messagingSenderId: '886405225742',
    appId: '1:886405225742:web:2ac04a1e430af65f534b5f',
    databaseURL: 'https://testproject-fcdb0-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
