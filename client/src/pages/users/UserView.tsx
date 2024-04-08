import { useState } from "react";
import useGetUserDetails from "../../hooks/useGetUserDetails";
import { IUser } from "../../utils/types";

const UserView = (user:IUser) => {
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<boolean>()

    const getUserDetails:Promise<any> = useGetUserDetails(user)

    return(
        <>
        
        </>
    )
}
export default UserView;