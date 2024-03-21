import { useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { IAuth } from "../interface/template";

const About = () => {
    const newAuthState:IAuth = {
        isAuthenticated:true,
        email:'Nigger',
        loginId:'allah',
    }
    const {authState, login} = useAuthContext();
    const handleClick = () => {
        console.log('inside handler')
        login(newAuthState);
    }
    useEffect(()=>{
        console.log('view updated')
        console.log('authState',authState)
    },[authState])
    return(
        <>
            About 
            <div></div>
            <button onClick={handleClick}>Change</button>
            <div></div>
            {authState.loginType}
            <div></div>
            {authState.email}
            {authState.loginId}
        </>
    )
}

export default About;