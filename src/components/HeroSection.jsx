import React from 'react'

const HeroSection = () => {
    return (
        <section className=' bg-purple-100 lg:px-16 py-3 md:px-8 px-4 lg:min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-2'>
            <div className=' lg:w-1/2 flex flex-col flex-wrap'>
            <div>
                <h1 className='text-4xl font-semibold'> Find a job that aligns with your interests and skills</h1>
                <p className=' mt5 mb-10 text-xl font-thin'> Thousands of jobs all the leading sector are waiting for you.</p>

            </div>

            <div className=' bg-white p-2 py-3 rounded-md flex justify-between flex-wrap gap-3 border-grey-300 border-2 shadow-lg '>
                <div className=' flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input className=' border-none outline-none p-2' type="text" name="" id="" placeholder='Job title, Keyword...' />
                </div>

                <div className=' flex items-center gap-2'>
                    <p className=' text-3xl hidden  lg:flex font-thin text-gray-300'>|</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <input className=' border-none outline-none p-2' type="text" name="" id="" placeholder='Location' />
                </div>
                <div className=' flex items-center gap-3'>
                    <button className=' bg-purple-800 text-white font-semibold text-center p-2.5 rounded-md px-3'>Find Job</button>
                </div>
            </div>
            <p className=' mt-4'> <span className=' text-gray-500'>Suggestion:</span> UI/UX Designer, Programing, <span className=' text-purple-800 font-bold'>Digital Marketig</span>, Video, Animation.</p>
            </div>

            <div className='  flex items-center'>
                <img src="/hero.png" alt="hero" className=' mix-blend-multiply h-[450px] rounded-md'/>
            </div>
            
        </section>
    )
}

export default HeroSection
