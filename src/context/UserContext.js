import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const UserContext = ({children}) => {
    const [user,setUser] = useState({});

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const updateName = (name)=>{
        return updateProfile(auth.currentUser,{
            displayName : name
        })
    };

    const verifyEmail =()=>{
        return sendEmailVerification(auth.currentUser)
    };

    const signInWithGoogle = (googleProvider)=>{
        return signInWithPopup(auth,googleProvider)
    };

    const logOut = ()=>{
        return signOut(auth)
    };

    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };

    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth,email)
    };

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])


    const userInfo = {
        user,
        createUser,
        updateName,
        verifyEmail,
        signInWithGoogle,  
        logOut,  
        logIn,  
        resetPassword,  
    };


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;