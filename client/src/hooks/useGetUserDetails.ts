import { apiHost } from "../config";
import { IUser } from "../utils/types";

const useGetUserDetails = async (user:IUser) => {
    const reqBody = {
        user:user.username,
        token:user.token
    }
    return fetch(`${apiHost}/users`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    })
    .then((res)=>res.json())
    .then((data) => data)
    .catch((err) => err)
}
export default useGetUserDetails;