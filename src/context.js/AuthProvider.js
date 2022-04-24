const { createContext, useEffect } = require("react");

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useEffect({});

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;