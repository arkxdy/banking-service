import { Link, useNavigate } from "react-router-dom";
import logo from '../images/1609008146652.jpg'
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { credentials } from "../hooks/useAuthenticate";
import useRegistration from "../hooks/useRegisterUser";
import { IAuth } from "../utils/types";

const Signup = () => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState<IAuth>({isAuthenticated:false});
    const [email,setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [acceptTOC, setAcceptTOC] = useState<boolean>(false)

    const [labelEmail, setLabelEmail] = useState<string>('')
    const [labelPassword, setLabelPassword] = useState<string>('')
    const [labelConfrimPassword, setLabelConfirmPassword] = useState<string>('')

    const validateEmail = (email:string) => {
        const emailRegex = /^[a-z0-9.@]+$/
        if(emailRegex.test(email)){
            setLabelEmail('')
            return true;
        }else{
            setLabelEmail('Email should be in correct format(name@company.com)')
            return false;
        }
    }
    const validatePassword = (password:string) => {
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
        if(passwordRegex.test(password)){
            setLabelPassword('')
            return true;
        }else{
            setLabelPassword('Password should contain atleast one number and one special character')
            return false;
        }
    }
    const validateConfirmPassword = (confirmPassword:string) => {
        if(confirmPassword!==password){
            setLabelConfirmPassword('Password does not match')
        }else{
            setLabelConfirmPassword('')
        }
    }
    const submitForm = async (credential:credentials) => {
        const checkEmail = validateEmail(credential.email)
        const checkPassword = validatePassword(credential.password)
        if(checkEmail && checkPassword && credential.password === confirmPassword && acceptTOC){
            const registerUser = await useRegistration(credential)
            if(registerUser){
                setAuthenticated({isAuthenticated:true,username:'Aditya'})
            }
        }
    }
    useEffect(()=>{
        validateConfirmPassword(confirmPassword)
    },[confirmPassword])

    useEffect(()=>{
        console.log(authenticated)
        if(authenticated.isAuthenticated){
            navigate("/account")
        }
    },[])

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-200">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-4 mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
                        <label className="text-xl font-bold leading-tight tracking-tight text-black">Maniax</label>    
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true}
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                                    <label className="text-gray-200 text-sm">{labelEmail}</label>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                                    <label className="text-gray-200 text-sm">{labelPassword}</label>
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}
                                    value={confirmPassword}
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                    />
                                    <label className="text-gray-200 text-sm">{labelConfrimPassword}</label>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true}
                                        checked={acceptTOC}
                                        onChange={(e)=>setAcceptTOC(e.target.checked)}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-rose-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-primary-800"
                                onClick={()=>submitForm({email,password})}
                                >Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to={'/signin'} className="font-medium text-rose-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Signup;