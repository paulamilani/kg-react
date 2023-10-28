/* eslint-disable prettier/prettier */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCXD8jnp7dyJa_EzLM_CNdZv-E-F5B4ZvE',
    authDomain: 'kg-react.firebaseapp.com',
    projectId: 'kg-react',
    storageBucket: 'kg-react.appspot.com',
    messagingSenderId: '84160856230',
    appId: '1:84160856230:web:1f9324ee07ccf3092bf467',
    measurementId: 'G-ZM8Q797PEW',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };