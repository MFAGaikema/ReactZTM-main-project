import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD7k-E382wOdx6mN1CD4LsLQirjJG6Fby8",
  authDomain: "crwn-db-2b6c6.firebaseapp.com",
  projectId: "crwn-db-2b6c6",
  storageBucket: "crwn-db-2b6c6.appspot.com",
  messagingSenderId: "47661893576",
  appId: "1:47661893576:web:9c8f4f751f79bd68d5e2fd",
  measurementId: "G-8Z30QV0K7N"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if(!userAuth) return;

 const userRef = firestore.doc(`/user/${userAuth.uid}`)

 const snapShot = await userRef.get();

 if(!snapShot.exists) {
   const {displayName, email} = userAuth;
   const createdAt = new Date();

   try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
   }
   catch(error) {
    console.log("error creating user", error.message);
   }
 }
 return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;