import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const dummyJobs = [
    {
        id: 1,
        title: "Technical Support Specialist",
        jobType: "FULL-TIME",
        salaryFrom: 20000,
        salaryTo: 25000,
        companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
        companyName: "Google Inc.",
        location: "New Delhi, India",
        totalApplication: 10
    },
    {
        id: 2,
        title: "Technical Support Specialist",
        jobType: "PART-TIME",
        salaryFrom: 20000,
        salaryTo: 25000,
        companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
        companyName: "MicroSoft Inc.",
        location: "New Delhi, India",
        totalApplication: 10
    },
    {
        id: 3,
        title: "Technical Support Specialist",
        jobType: "PART-TIME",
        salaryFrom: 20000,
        salaryTo: 25000,
        companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeSTT3Dtrm4FT_mecUmW0ks0Uml6MDDtqiA&s',
        companyName: "Apple Inc.",
        location: "New Delhi, India",
        totalApplication: 10
    },
]

const FeaturedJobs = () => {
    return (
        <div className='lg:px-16 py-3 md:px-8 px-4 flex flex-col items-center justify-center min-h-screen'>
            <h1 className='font-semibold text-2xl md:text-4xl lg:text-5xl text-center'>Featured Jobs</h1>
            <p className=' text-gray-400 text-2xl text-center py-3 mb-7' >Choose jobs from top employers and apply for the same</p>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 mb-10'>
                {
                    dummyJobs.map((item) => {
                        return (
                            <Card item={item}/>
                        )
                    })
                }

            </div>

            <Link className=' text-violet-700 underline text-2xl font-bold' to={"/"}>View all...</Link>

        </div>
    )
}

export default FeaturedJobs
