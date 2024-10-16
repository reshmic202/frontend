import React from 'react'

const Card = ({item}) => {
    return (
        <div className=' bg-violet-100 p-3 w-full rounded-md flex flex-col gap-4'>
            <div className=' flex items-baseline justify-between'>
                <h1 className=' font-semibold text-xl'>{item.title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
            </div>
            <div className=' flex items-center gap-3 text-sm'>
                <h1 className={`${item.jobType === "PART-TIME" ? "text-violet-700" : "text-green-800"} font-semibold`}>{item.jobType}</h1>
                <p>Salary: {item.salaryFrom} INR - {item.salaryTo} INR</p>
            </div>
            <div className=' flex items-center gap-2'>
                <img src={item.companyLogo} alt={item.companyName} height={30} width={30} className=' rounded-full' />
                <div >
                    <h1 className=' font-bold'>{item.companyName}</h1>
                    <div className=' flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p>{item.location}</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>{item.totalApplication}+Applicants</h1>
            </div>
            <div className=' flex item-center justify-evenly mb-3'>
                <button className=' border-purple-700 border-[1px] p text-center p-2 rounded-lg font-semibold px-5'>View details</button>
                <button className=' bg-purple-700 text-center p-2 rounded-lg font-semibold text-white  text-sm px-5'>Apply now</button>
            </div>


        </div>
    )
}

export default Card
