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
export type IAuthenticated = {
    isAuthenticated: boolean,
    token?:string,
    sessionEndTime?:Date,
    username?:string
    
}