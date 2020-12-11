import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrM0dDqdd0eOMSvqk_ehguTVBZdhZIHpI",
  authDomain: "projects-62658.firebaseapp.com",
  projectId: "projects-62658",
  storageBucket: "projects-62658.appspot.com",
  messagingSenderId: "155595392456",
  appId: "1:155595392456:web:affee03584bad107a72cfd",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// which providre do we wanna use linkedin,fb,google......
const provider = new firebase.auth.GoogleAuthProvider();
// which type of functionality
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
