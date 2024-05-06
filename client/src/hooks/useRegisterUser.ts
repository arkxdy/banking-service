import { apiHost } from "../config";
import { credentials } from "./useAuthenticate";

const useRegistration = async (credentials: credentials) => {
    // return fetch(`${apiHost}/signup`,{
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //       },
    //     body: JSON.stringify(credentials)
    // })
    // .then((res) => res.json())
    // .then((data) => data)
    // .catch((err) => err)

    return {
        token: "12345",
        session: "12h"
    }
}

export default useRegistration;