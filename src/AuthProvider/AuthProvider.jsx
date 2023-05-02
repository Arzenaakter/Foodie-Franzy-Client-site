import React, { useState, createContext } from 'react';

import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    

 const [user, setUser] = useState([])

    // signUp
    const SignUp = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // login
    const LogIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Google sign in

    const GoogleSignIn = ()=>{
        return signInWithPopup(auth,provider)
    }

    const authInfo ={
        user,
        SignUp,
        LogIn,
        GoogleSignIn,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;