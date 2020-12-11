import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDKxkLEgv79tMINp0mE9Xfv77_Uev9XSNE",
  authDomain: "clwn-clothing-6890b.firebaseapp.com",
  projectId: "clwn-clothing-6890b",
  storageBucket: "clwn-clothing-6890b.appspot.com",
  messagingSenderId: "345214303241",
  appId: "1:345214303241:web:dab183d5acbe4b492f8cd8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// which providre do we wanna use linkedin,fb,google......
const provider = new firebase.auth.GoogleAuthProvider();
// which type of functionality
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
