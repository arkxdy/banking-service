import { Link } from 'react-router-dom'
import logo from '../icons/mnx_logo.ico'

type headerType = {
    isAuth:boolean,
    activeTab?:string,
    username?:string
}
type dropdownType = {
    value:string,
    url?:string,
    active:boolean
}
const Header = (header:headerType) => {
    let user = <span>Login</span>;
    if(header.isAuth){
        user = <span>User</span>
    }
    const dropdown:dropdownType[] = [
        {value:'Home', active:false},
        {value:'Feature', active:false},
        {value:'Team', active:false},
        {value:'Contact', active:false},
        {value:'About', active:false},
        {value:'Future', active:false},
    ]

    return(
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Maniax</span>
                    </a>
                    if ({header.isAuth}) {
                        <div className="flex items-center lg:order-1">
                            <span className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">{header.username}</span>
                        </div>
                    }
                    <div className="flex items-center lg:order-2">
                        <Link to={'/signin'} className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
                        <Link to={'/signup'} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</Link>
                    </div>
                    <div hidden={true}>
                        Test
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" hidden={true} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {dropdown.map((item) => (
                                <li key={item.value}>
                                    <Link to={item.url || '/comingsoon'} className={`block py-2 pr-4 pl-3 ${item.value === header.activeTab?'text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white':'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current="page">{item.value}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header> 
    )
}

export default Header;