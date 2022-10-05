import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const resetContext = () => {
        localStorage.removeItem('token')
        setAuth(null)
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, resetContext, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;