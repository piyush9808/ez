import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyADs9dILCueB9Nanmt8rMb7Kb66kfP7IY4",
  authDomain: "ezhack-88121.firebaseapp.com",
  projectId: "ezhack-88121",
  storageBucket: "ezhack-88121.appspot.com",
  messagingSenderId: "1003351554027",
  appId: "1:1003351554027:web:90dc5bbdb1eb62f4380bae"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); 

export { db ,storage};

