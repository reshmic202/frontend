import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const listOfLinks = [
    {
        id: 1,
        name: "Home",
        link: "/home"
    },
    {
        id: 2,
        name: "Find Jobs",
        link: "/findJobs"
    },
    {
        id: 3,
        name: "Applied Jobs",
        link: "/appliedJobs"
    },
    {
        id: 4,
        name: "About",
        link: "/about"
    },
    {
        id: 5,
        name: "Contact Us",
        link: "/contact"
    },
]

const Navbar = () => {

    const [showNavBar, setShowNavBar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavBar(!showNavBar)
    }

    return (
        <nav className=' flex  items-center justify-between lg:px-16 py-3 md:px-8 px-4 '>
            <div className=' flex font-bold text-2xl cursor-pointer text-purple-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <h1>AlwaysApply</h1>
            </div>

            <div className=' hidden md:flex'>
                <ul className=' flex items-center gap-4 cursor-pointer'>
                    {
                        listOfLinks.map((item) => {
                            return (
                                <li className=' font-semibold hover:text-blue-800 hover:font-bold duration-500 transition-all'>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>




            <div className=' flex items-center'>
                <div className=' flex items-center gap-1 bg-slate-100 p-2 px-4 rounded-md cursor-pointer'>
                    <img src="https://pbs.twimg.com/media/Eo828EjU0AAoFD1.jpg:large" alt="userLogo" height={50} width={50} className=' rounded-3xl h-12 w-12 object-cover ' />
                    <div>
                        <h1 className=' font-bold'>Reshmi</h1>
                        <h1 className=' text-sm'>user</h1>
                    </div>
                </div>

                <div onClick={handleShowNavbar} className=' md:hidden cursor-pointer p-1 rounded-md  ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>
            </div>

            {
                showNavBar && (
                    <div className=' fixed top-0 right-0 w-1/2 bg-slate-600 min-h-screen px-6 py-6 text-white z-50'>

                        <p onClick={handleShowNavbar} className=' absolute right-3 top-4 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </p>

                        <ul className=' flex flex-col items-start gap-16  cursor-pointer mt-12'>
                            {
                                listOfLinks.map((item) => {
                                    return (
                                        <li className=' font-semibold  hover:font-bold duration-500 transition-all'>
                                            <Link to={item.link}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar
