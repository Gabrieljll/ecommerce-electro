import { useContext, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup} from "firebase/auth";
import { auth, provider} from "../firebase/config"
import { useEffect } from "react";

export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}
export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        email: null,
        logged: false,
        error: null
    })

    const [loading, setLoading] = useState(false)

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }
    const login = (values) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
        .catch( (error) =>{
            setUser({
                email: null,
                logged: false,
                error: error.message
            })
        })
        .finally( () => {
            setLoading(false)
        })
    }

    const logout = () => {
        signOut(auth)
        .then ( () => {
            setUser({
                email: null,
                logged: false,
                error: null
            })
        })
    }

    const register = (values) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .catch( (error) =>{
            setUser({
                email: null,
                logged: false,
                error: error.message
            })
        })
        .finally( () => {
            setLoading(false)
        })
    }

    useEffect ( () => {
        onAuthStateChanged(auth, (user) =>{
            if (user){
                setUser({
                    email: user.email,
                    logged: true,
                    error: null
                })
            } else {
                logout()
            }
            
        })
    }, [])
    return (
        <LoginContext.Provider value={{user, login, logout, loading, register, googleLogin}}>
            {children}
        </LoginContext.Provider>
    )
}