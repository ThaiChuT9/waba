import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <>
            <nav className='bg-orange-100 p-4 flex items-center justify-between fixed top-0 w-full shadow-lg'>
                {/* Logo */}
                <div className="font-bold text-2xl pl-3">
                    <NavLink to="/">
                        PANCAKE
                    </NavLink>
                </div>

                {/* Menu button for mobile */}
                <div className="lg:hidden mt-2">
                    <button onClick={toggleDrawer} >
                        <Bars3Icon className="size-6" />
                    </button>
                </div>

                {/* Navlink */}
                <div className={`hidden space-x-4 lg:flex `}>
                    <NavLink
                        to="/home"
                        className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/shopping"
                        className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}
                    >
                        Shopping
                    </NavLink>
                    <NavLink
                        to="/aboutus"
                        className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/contacus"
                        className={({ isActive }) => isActive ? 'text-gray-400' : 'hover:text-gray-400'}
                    >
                        Contact Us
                    </NavLink>
                </div>
                {/* Button */}
                <div className=" hidden lg:block">
                    <button className="bg-orange-100 px-4 py-2 rounded-md border border-black transition-colors duration-200 hover:bg-black hover:text-white">
                        BOOK NOW
                    </button>
                </div>
            </nav>

            {/* Drawer */}
            {isDrawerOpen && (
                <div className="fixed inset-0 z-40 flex">
                    <div className="fixed inset-0 bg-black opacity-30" onClick={toggleDrawer}></div>
                    <div className="relative bg-orange-100 w-64 h-full shadow-xl z-50">
                        <button className="absolute top-4 right-4" onClick={toggleDrawer}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="mt-16 flex flex-col space-y-4">
                            <NavLink
                                to="/home"
                                className={({ isActive }) => isActive ? 'bg-gray-700 text-white px-3 py-2 rounded-md shadow-inner border border-gray-600' : 'hover:text-gray-400 px-3 py-2'}
                                onClick={toggleDrawer}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/shopping"
                                className={({ isActive }) => isActive ? 'bg-gray-700 text-white px-3 py-2 rounded-md shadow-inner border border-gray-600' : 'hover:text-gray-400 px-3 py-2'}
                                onClick={toggleDrawer}
                            >
                                Shopping
                            </NavLink>
                            <NavLink
                                to="/about-us"
                                className={({ isActive }) => isActive ? 'bg-gray-700 text-white px-3 py-2 rounded-md shadow-inner border border-gray-600' : 'hover:text-gray-400 px-3 py-2'}
                                onClick={toggleDrawer}
                            >
                                About Us
                            </NavLink>
                            <div className="pl-1">
                                <button className="bg-orange-100 px-4 py-2 rounded-md transition-colors duration-200 border border-black max-w-40  hover:bg-black hover:text-white mt-2 w-full">
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar