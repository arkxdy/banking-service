import { apiHost } from "../config"

export type credentials = {
    email: string,
    password: string,
}

const useAuthenticate = async (credentials:credentials) => {
    // return fetch(`${apiHost}/signin`,{
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //       },
    //     body: JSON.stringify(credentials)
    // })
    // .then((res) => res.json())
    // .then((data) => data)
    // .catch((err) => {token: undefined})
    return{
        token: "12345",
        session: "12h"
    }
}


export default useAuthenticate;