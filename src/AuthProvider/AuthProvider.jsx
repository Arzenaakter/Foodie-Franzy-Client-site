import React, { useEffect, useState, createContext } from 'react';


import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    

 const [user, setUser] = useState([])
 const [loading, setLoading] = useState(true)

    // signUp
    const SignUp = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }

    // login
    const LogIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Google sign in

    const GoogleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }



    //  github sign in

    const GithubSignIn =()=>{
        setLoading(true)

        return signInWithPopup(auth,githubProvider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,CurrentUser =>{
            setUser(CurrentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
      }, [])

      const logOut =()=>{
        return signOut(auth)
      }

      const UpdateUserData =(name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName : name,
            photoURL: photo

        })

      }




    const authInfo ={
        user,
        loading,
        SignUp,
        LogIn,
        GoogleSignIn,
        GithubSignIn,
        logOut,
        UpdateUserData
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;