import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    
    
    return(
        <>
            <Header isAuth={true} activeTab="Home"></Header>
            <section className="h-screen text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Maniax</h1>
                        <p className="mb-8 leading-relaxed">We are committed to providing you with secure and convenient banking services.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"><Link to={'/signup'}>Open an Account</Link></button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"><Link to={'/signin'}>Log In</Link></button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
        
    )
}

export default Home;