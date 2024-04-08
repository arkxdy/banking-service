import { createContext, useContext, useRef, useState } from "react";
import {AuthContextProviderProps, IAuth, IAuthContextType} from "../utils/types";
export const authInitialState: IAuth = {
    isAuthenticated:false,
    loginType:'anonymous',
    loginId:'',
    email:'default',
}

const AuthContextType:IAuthContextType = {
    authState: authInitialState,
    setAuthState: ()=>undefined
}

const AuthContext = createContext<AuthContextType| undefined>(undefined);

const newAuthState:IAuth = {
    isAuthenticated:true,
    email:'Nigger',
    loginId:'allah',
}
interface AuthContextType {
    authState: IAuth;
    login: (newAuthState:IAuth) => void;
    logout: () => void;
  }

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be within AuthProvider')
    }
    return context;
}
export const AuthProvider = ({children}:AuthContextProviderProps) => {
    const [authState, setAuthState] = useState<IAuth>(authInitialState);
    const authStateRef = useRef<IAuth>();
    authStateRef.current = authState;
    const login = (newAuthState:IAuth) => {
        setAuthState(newAuthState);
    }
    const logout = () => {
        setAuthState(authInitialState);
    }
    const authContextValue: AuthContextType = {
        authState,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}
