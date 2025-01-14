/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)


    // create new user
    const createUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    // Login user
    const loginUser = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    // logout User
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => () => {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            console.log("currentUser",currentUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    },[])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        logout,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;