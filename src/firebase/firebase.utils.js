import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getDoc, doc, setDoc, getFirestore } from "firebase/firestore";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDW4b8v5HrcCrrH0T5en_TXJOXVatoVWXQ",

  authDomain: "lsm-team7.firebaseapp.com",

  projectId: "lsm-team7",

  storageBucket: "lsm-team7.appspot.com",

  messagingSenderId: "562019947491",

  appId: "1:562019947491:web:fe182147b0531c1bebc6d6",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore();
export const auth = getAuth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  let userRef = doc(db, "users", `${userAuth.uid}`);

  const userSnap = await getDoc(userRef);

  // if user does not exist create the  new user
  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      userRef = await setDoc(doc(db, "users", `${userAuth.uid}`), {
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (e) {
      console.error("error creating user: " + e.message);
    }
  }

  return { userSnap, id: userRef ? userRef.uid : userAuth.uid };
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export default app;
