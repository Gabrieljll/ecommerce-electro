import { useContext, useState } from "react";
import { createContext } from "react";
/* import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"; */
/* import { auth} from "../firebase/config" */
import { useEffect } from "react";

export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}
export const LoginProvider = ({children}) => {

    const [userAdmin, setUserAdmin] = useState({
        nombre: null,
        logged: false,
        error: null
    })

    const [loading, setLoading] = useState(false)

     const login = (values) => {
        setUserAdmin({
        nombre: values.nombre,
        logged: true,
        error:null
       })
    } 

/*     const logout = () => {
        signOut(auth)
        .then ( () => {
            setUser({
                nombre: null,
                logged: false,
                error: null
            })
        })
    } */

    /* const register = (values) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, values.nombre, values.password)
        .catch( (error) =>{
            setUser({
                nombre: null,
                logged: false,
                error: error.message
            })
        })
        .finally( () => {
            setLoading(false)
        })
    } */

/*     useEffect ( () => {
        setLoading(true)
        onAuthStateChanged(auth, (user) =>{
            if (user){
                setUser({
                    nombre: user.nombre,
                    logged: true,
                    error: null
                })
            } else {
                logout()
            }
        })
        setLoading(false)
    }, []) */
    return (
        <LoginContext.Provider value={{userAdmin, login, loading, setUserAdmin}}>
            {children}
        </LoginContext.Provider>               
    )
}