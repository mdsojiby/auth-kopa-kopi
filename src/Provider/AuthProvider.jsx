import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

 export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {


    const [user,setUser]=useState(null)

    const  name='potato alu miya'

    const createUser=(email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }

    const signOutUser=()=>{
        return signOutUser(auth)
    }

    useEffect(()=>{
         const unSubscribe=onAuthStateChanged(auth,currentUser =>{
            console.log('current user',currentUser)
            setUser(currentUser)
        })

       return ()=>{
        unSubscribe()
       }
       
    
     } ,[])

    

    const authInfo={
        user,
        name,
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;