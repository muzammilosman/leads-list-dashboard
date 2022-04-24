const { createContext, useContext, useState } = require("react");

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);

    const login = (user) => {
        console.log(user)
        setAuth(user);
    }

    const logout = () => {
        setAuth(null);
    }

    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}