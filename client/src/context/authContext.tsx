import { createContext, useContext, useRef, useState } from "react";
import {ProviderProps, IAuth, IAuthContextType} from "../utils/types";
import useLocalStorage from "use-local-storage";
export const authInitialState: IAuth = {
    isAuthenticated:false,
}

const AuthContextType:IAuthContextType = {
    authState: authInitialState,
    setAuthState: ()=>undefined
}

const AuthContext = createContext<AuthContextType| undefined>(undefined);

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
export const AuthProvider = ({children}:ProviderProps) => {
    const [authState, setAuthState] = useLocalStorage<IAuth>('auth',authInitialState);
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
