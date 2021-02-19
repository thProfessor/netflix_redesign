import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5uPJOxahGpQdfolndoveY8t0TZE2AVl4",
  authDomain: "netflix-redesign-3e791.firebaseapp.com",
  projectId: "netflix-redesign-3e791",
  storageBucket: "netflix-redesign-3e791.appspot.com",
  messagingSenderId: "70653751186",
  appId: "1:70653751186:web:dc3b7210353c4d3e841b4b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
