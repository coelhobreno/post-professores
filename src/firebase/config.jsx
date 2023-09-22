import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPnSrxZ3q0nJL029sOzGTrok73O9WJiq8",
  authDomain: "posts-professores.firebaseapp.com",
  projectId: "posts-professores",
  storageBucket: "posts-professores.appspot.com",
  messagingSenderId: "1019331900946",
  appId: "1:1019331900946:web:34c9bab2143d206f5b8acb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }