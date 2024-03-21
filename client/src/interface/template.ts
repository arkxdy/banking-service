export type IAuth = {
    isAuthenticated: boolean,
    loginType?:string,
    loginId:string,
    email:string,
}
export type IAuthContextType = {
    authState: IAuth; 
    setAuthState: React.Dispatch<React.SetStateAction<IAuth>>; 
}

export type AuthContextProviderProps = {
    children: React.ReactNode,
}