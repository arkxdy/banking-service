const Footer = () => {
    return(
        <footer className="bg-gray-200 text-gray-700 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="#">
                    <span className="ml-3 text-xl">Maniax</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">© 2024 MNX —
                    <a href="#" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Terms & Conditions</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;