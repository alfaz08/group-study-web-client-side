import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null)
const googleProvider= new GoogleAuthProvider()

const AuthProviders = ({children}) => {
 const [user,setUser]=useState(null)
 const [loading,setLoading] =useState(true)


 //google signuo
  const googleLogin = ()=>{
    setLoading(false)
    return signInWithPopup(auth,googleProvider)
  }

  //email password register
  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

   //signin with email and password
   const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
   
   const valueInfo={
    googleLogin,
    user,
    createUser,
    signIn
   }

  return (
  
       <AuthContext.Provider value={valueInfo}>
      {children}
    </AuthContext.Provider>
   
   
  );
};

export default AuthProviders;