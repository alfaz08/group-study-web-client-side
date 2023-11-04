import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null)
const googleProvider= new GoogleAuthProvider()

const AuthProviders = ({children}) => {
 const [user,setUser]=useState(null)
 const [loading,setLoading] =useState(true)

  const googleLogin = ()=>{
    setLoading(false)
    return signInWithPopup(auth,googleProvider)
  }
   
   const valueInfo={
    googleLogin,
    user,
   }

  return (
  
       <AuthContext.Provider value={valueInfo}>
      {children}
    </AuthContext.Provider>
   
   
  );
};

export default AuthProviders;