import { useState } from "react";

const Overview = () => {
    const [showModal, setShowModal] = useState<string>('')
    const handleClose = () => {
        setShowModal('')
    }
    return(
        <>
        <div className="w-full h-20">
            <div className="font-bold text-3xl float-start">
                Overview
            </div>
            <div className="flex float-right gap-4 w-24">
                <span>
                    <img onClick={()=>setShowModal('Search')} className="cursor-pointer" src="src/icons/search.png"></img>
                </span>
                <span>
                    <img onClick={()=>setShowModal('Noti')} className="cursor-pointer" src="src/icons/bell.png"></img>
                </span>
                <span>
                    <img onClick={()=>setShowModal('Profile')} className="cursor-pointer" src="src/icons/user.png"></img>
                </span>
            </div>
        </div>
        {showModal === 'Search' && <SearchModal closePopup={handleClose}/>}
        {showModal === 'Noti' && <NotificationModal closePopup={handleClose}/>}
        {showModal === 'Profile' && <ProfileModal closePopup={handleClose}/>}
        </>
    )
}

export default Overview;


const SearchModal = (props:{closePopup:() => void}) => {
    const [search, setSearch] = useState<string>('')
    
    return(
        <>
            <div className="absolute flex">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                type="search" id="default-search" className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button
                
                type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                <span className="" onClick={props.closePopup}>
                    <svg className="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
        </>
    )
}

const ProfileModal = (props:{closePopup:() => void}) => {
    return(
        <>
        </>
    )
}

const NotificationModal = (props:{data?:string, closePopup:() => void}) => {
    return(
        <>
        <div className="fixed flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>{props.data || 'No notification'}</p>
        <span className="px-4 py-3" onClick={props.closePopup}>
            <svg className="fill-current h-6 w-6 text-white-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
        </div>
        </>
    )
}