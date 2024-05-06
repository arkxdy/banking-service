export type IAuthContextType = {
    authState: IAuth; 
    setAuthState: React.Dispatch<React.SetStateAction<IAuth>>; 
}

export type ProviderProps = {
    children: React.ReactNode,
}
export type IAuth = {
    isAuthenticated: boolean,
    token?:string,
    sessionEndTime?:Date,
    username?:string,
    email?:string
}
export type IUser = {
    username:string,
    token:string
}