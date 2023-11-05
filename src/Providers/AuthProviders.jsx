import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null)
const googleProvider= new GoogleAuthProvider()

const AuthProviders = ({children}) => {
 const [user,setUser]=useState(null)
 const [loading,setLoading] =useState(true)


 //google signuo
  const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  //email password register
  const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

   //signin with email and password
   const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   //onauth statechange

   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unsubscribe()
    }
   },[])


   //logout
   const logOut =()=>{
    return signOut(auth)
   }
   
   const valueInfo={
    googleLogin,
    user,
    createUser,
    signIn,
    logOut,
    loading
   }

  return (
  
       <AuthContext.Provider value={valueInfo}>
      {children}
    </AuthContext.Provider>
   
   
  );
};

export default AuthProviders;