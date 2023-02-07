import { useContext, useState } from "react";
import { createContext } from "react";

const MOCK_USERS = [
    { 
        email: "gleguiza@a.com",
        password: "clavea"
    },
    { 
        email: "gleguiza@b.com",
        password: "claveb"
    },
    { 
        email: "gleguiza@c.com",
        password: "clavec"
    }
]

export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}
export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        email: '',
        logged: false,
        error: null
    })

    const login = (values) => {
        const match = MOCK_USERS.find(user => user.email === values.email)

        if (!match){
            setUser ({
                email: null,
                logged: false,
                error: "Usuario no encontrado"
            })
            return
        }
        if (match.password === values.password) {
            setUser ({
                email: match.email,
                logged: true,
                error: null
            })
        } else {
            setUser ({
                email: null,
                logged: false,
                error: "Clave incorrecta"
            })
        }
    }

    const logout = () => {
        setUser({
            email: '',
            logged: false,
            error: null
        })
    }

    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}