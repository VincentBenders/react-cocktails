import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <>
            <nav className={'bg-white space-x-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-5'}>
                <Link className={'text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:bg-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-yellow-700 dark:hover:bg-yellow-800 dark:focus:ring-bg-yellow-900'} to={"/"}>Home</Link>
                <Link className={'text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:bg-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-yellow-700 dark:hover:bg-yellow-800 dark:focus:ring-bg-yellow-900'} to={"/cocktails"}>Cocktails</Link>
                <Link className={'text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:bg-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-yellow-700 dark:hover:bg-yellow-800 dark:focus:ring-bg-yellow-900'} to={"/cocktails/create"}>Create</Link>
            </nav>
            <main>
                <Outlet/>
            </main>

        </>
    )
}
export default Layout