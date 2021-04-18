import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBLcrKfK_26tUD5al_xgUYhENR3j-hYF_I",
    authDomain: "cv-personal-d9e82.firebaseapp.com",
    projectId: "cv-personal-d9e82",
    storageBucket: "cv-personal-d9e82.appspot.com",
    messagingSenderId: "428006087586",
    appId: "1:428006087586:web:9fd51c977a08a1ef7470fb"
}

firebase.initializeApp(firebaseConfig)

export {firebase}