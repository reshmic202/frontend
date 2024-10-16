import React from 'react'
import { Link } from 'react-router-dom'
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialYoutube } from "react-icons/ti";
import { RiTwitterFill } from "react-icons/ri";

import { CiInstagram } from "react-icons/ci";

const ListOfLinks1 = [
    {
        id: 1,
        name: "about",
        link: "/about"

    },
    {
        id: 2,
        name: "contact",
        link: "/contact"

    },
    {
        id: 3,
        name: "Admin",
        link: "/admin"
    }
]
const ListOfLinks2 = [
    {
        id: 4,
        name: "Browse Jobs",
        link: "/browseJobs"
    },
    {
        id: 5,
        name: "Browse Employers",
        link: "/browseEmployers"
    },
    {
        id: 6,
        name: "Candidate Dashboard",
        link: "/candidateDashboard"
    },
    {
        id: 7,
        name: "Saved jobs",
        link: "/savedJobs"
    }
]
const ListOfLinks3 = [
    {
        id: 8,
        name: "Post a job",
        link: "postJob"
    },
    {
        id: 9,
        name: "Browse Candidates",
        link: "/browseCandidates"
    },
    {
        id: 10,
        name: "Employers Dashboard",
        link: "/employersDashboard"
    },
    {
        id: 11,
        name: "Applications",
        link: "/applications"

    }
]
const dummyIcon=[
    {
         "link":"/",
        "icon":<BiLogoFacebook  size={20} className=' cursor-pointer'/>,
    },
    {
        "link":"/",
        "icon":< TiSocialYoutube size={20} className=' cursor-pointer'/>,
    },
    {
        "link":"/",
        "icon":<CiInstagram size={20} className=' cursor-pointer'/>,
    },
    {
        "link":"/",
        "icon":<RiTwitterFill size={20} className=' cursor-pointer'/>
    }
    
        
    
]
const dummyImage=[

]

const FooterPage = () => {
    return (
        <footer className='h-100 bg-purple-100 lg:px-16 py-3 md:px-8 px-4'>
            <div className=' grid grid-cols-2 gap-5 lg:grid-cols-4 '>
                <div>
                    <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-purple-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <h1 className=' flex font-bold text-2xl cursor-pointer text-purple-600'>AlwaysApply</h1>
                    </div>
                    <div className='text-gray-400'>
                    <p className='py-4 font-semibold text-xl'>Call now: <span className='text-purple-600 '>+919591776078</span></p>
                    <p>456 Chadani Chowk Street, Near Red Fort, Old Delhi, New Delhi, Delhi 110006, India</p>
                    </div>
                </div>
                <div>
                    <h1 className=' font-semibold text-purple-700 text-xl mb-4'>Quick Link</h1>
                    <ul className=' items-center gap-4 cursor-pointer'>
                        {
                            ListOfLinks1.map((item) => {
                                return (
                                    <li className={`${item.name=='contact'?"text-purple-600": "text-gray-500"} mb-2 hover:text-blue-800 hover:font-bold duration-500 transition-all`}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h1 className=' font-semibold text-purple-700 text-xl mb-4'>Candidate</h1>
                    <ul className='items-center gap-4 cursor-pointer'>
                        {
                            ListOfLinks2.map((item) => {
                                return (
                                    <li className=' text-gray-500 mb-2 hover:text-blue-800 hover:font-bold duration-500 transition-all'>
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h1 className=' font-semibold text-purple-700 text-xl mb-4'>Employers</h1>
                    <ul className=' items-center gap-4 cursor-pointer'>
                        {
                            ListOfLinks3.map((item) => {
                                return (
                                    <li className='  hover:text-blue-800 hover:font-bold duration-500 transition-all text-gray-500 mb-2'>
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
            <hr className="flex-grow border-t border-gray-300 mx-4" />
            <div className=' flex flex-col md:flex-row justify-between items-center mt-4 mb-4' >
                <div>
                    <h1 className=' text-purple-400'>@ 2022 AlwaysApply -job Portal. All rights Reserved</h1>
                </div>
                <div className='flex  gap-3'>
                {dummyIcon.map((item,index)=>{
                    return (
                        <a href={item.link} key={index} className='text-purple-900'>
                            {item.icon}
                        </a>
                    )
                })}
                </div>
            </div>
        </footer>
    )
}

export default FooterPage
