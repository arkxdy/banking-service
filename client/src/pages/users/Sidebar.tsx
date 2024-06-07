import { Link } from 'react-router-dom';
import icon from '../../icons/green.ico'
const Sidebar = () => {
    const sidebarItems: ISidebar[] = [
        {name: 'Dashboard', to: '/account', icon: 'src/icons/dashboard.png'},
        {name: 'Cards', to: '/account', icon: 'src/icons/credit.png'},
        {name: 'Payments', to: '/account', icon: 'src/icons/expense.png'},
        {name: 'Statistics', to: '/account', icon: 'src/icons/chart-histogram.png'},
        {name: 'Help', to: '/account', icon: 'src/icons/user-headset.png'},
    ]
    return(
        <>
            <aside id="default-sidebar" className="relative top-0 left-0 z-40 w-64 h-svg transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-black dark:bg-black">
                <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <img className='w-5 h-5' src={icon}/>
                            <span className="ms-3 font-bold">Maniax</span>
                </button>
                <ul className="mt-20 space-y-2 font-medium">
                    {sidebarItems.map(item => (
                        <li key={item.name}>
                            <Link to={item.to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <img className='bg-gray-100 p-2' src={item.icon}></img>
                                <span className="ms-3">{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            </aside>
        </>
    )
}
export default Sidebar;

type ISidebar = {
    name: string,
    to: string,
    icon: string
}