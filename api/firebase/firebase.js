import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBMeqXMNKNhXE5UyybG81mUnN1gmo-FaAo",
    authDomain: "mentor-me-globant.firebaseapp.com",
    projectId: "mentor-me-globant",
    storageBucket: "mentor-me-globant.appspot.com",
    messagingSenderId: "152236325420",
    appId: "1:152236325420:web:8912383abd2e97f1ef6f89"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth= firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
