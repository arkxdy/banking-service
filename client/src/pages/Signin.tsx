import { Link, useNavigate } from "react-router-dom";
import logo from '../images/1609008146652.jpg'
import Footer from "./Footer";
import { ChangeEvent,useEffect,useState } from "react";
import useAuthenticate, { credentials } from "../hooks/useAuthenticate";
import { IAuthenticated } from "../interface/template";

const Signin = () => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState<IAuthenticated>({isAuthenticated:false});
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [labelEmail, setLabelEmail] = useState<string>('')
    const [labelPassword, setLabelPassword] = useState<string>('')
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
    const validateForm = async (credential:credentials) => {
        const checkEmail = validateEmail(credential.email)
        const checkPassword = validatePassword(credential.password)
        if(checkEmail && checkPassword){
            const getAuthInfo = await useAuthenticate(credential);
            if(getAuthInfo){
                setAuthenticated({isAuthenticated:true,username:'Aditya'});
            }

        }
    }
    useEffect(()=>{
        console.log(authenticated)
        if(authenticated.isAuthenticated){
            //redirect homepage
            navigate("/")
        }
    },[authenticated])
    return(
        <>
            <section className="bg-gray-50 dark:bg-gray-200">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
                    <label className="text-xl font-bold leading-tight tracking-tight text-black">Maniax</label>     
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className="text-gray-200 text-sm">{labelEmail}</label>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}
                                value={password}
                                onChange={(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
                                />
                                <label className="text-gray-200 text-sm">{labelPassword}</label>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-rose-600 hover:underline dark:text-rose-500">Forgot password?</a>
                            </div>
                            <button type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-primary-800"
                            onClick={()=>validateForm({email,password})}
                            >Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <Link to={'/signup'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
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
export default Signin;