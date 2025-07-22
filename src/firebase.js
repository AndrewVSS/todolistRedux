import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDTFDhlGvr7EkizUMwkzNN7O5GIxeI8CkI',
    authDomain: 'testproject-fcdb0.firebaseapp.com',
    databaseURL: 'https://testproject-fcdb0-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'testproject-fcdb0',
    storageBucket: 'testproject-fcdb0.firebasestorage.app',
    messagingSenderId: '886405225742',
    appId: '1:886405225742:web:eb5a8f5f14b9d1b5534b5f',
    baseURL: 'https://testproject-fcdb0.web.app',
};
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export default app;
