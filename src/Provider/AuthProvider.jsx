import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
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

    // onAuthStateChanged(auth,currentUser=>{
    //     if(currentUser){
    //         console.log('this is currect',currentUser)
    //         setUser(currentUser)
    //     }

    //     else{
    //         console.log('this is in correct')
    //         setUser(null)
    //     }
    // })

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