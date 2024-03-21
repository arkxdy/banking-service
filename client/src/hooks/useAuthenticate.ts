import { apiHost } from "../config"

export type credentials = {
    email: string,
    password: string,
}

const useAuthenticate = async (credentials:credentials) => {
    return fetch(`${apiHost}login`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(credentials)
    })
    .then((res) => res.json())
    .then((data) => data)
}


export default useAuthenticate;