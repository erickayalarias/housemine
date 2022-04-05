import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,signInWithPopup, GoogleAuthProvider   } from "firebase/auth";
import { auth } from "./config";



export const createAccount = (email, password) => createUserWithEmailAndPassword(auth, email, password)

export const singinFirebase = (email, password) => signInWithEmailAndPassword(auth, email, password)

export const signOutFirebase = () => signOut(auth)

export const loginWithGoogle = () => {
    
    const googleProvider = new GoogleAuthProvider()
    
    return signInWithPopup(auth, googleProvider)
  }