import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIj-2-PPzURcgKGEzRqOhbBQK4y7TpYdQ",
  authDomain: "instagram-clone-f01b8.firebaseapp.com",
  projectId: "instagram-clone-f01b8",
  storageBucket: "instagram-clone-f01b8.appspot.com",
  messagingSenderId: "611924791271",
  appId: "1:611924791271:web:463f5718d9c16a15647742",
  measurementId: "G-4PXWGCBJMW"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }