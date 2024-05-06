import { Navigate } from "react-router-dom";
import { ProviderProps } from "../utils/types";
import { useAuthContext } from "../context/authContext";

const ProtectedRoutes = ({ children }:ProviderProps) => {
    const {isAuthenticated} = useAuthContext().authState
    if(!isAuthenticated) return <Navigate to='/login' replace></Navigate>
    return children
}
export default ProtectedRoutes;