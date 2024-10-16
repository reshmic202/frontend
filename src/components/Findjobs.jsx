import React, { useContext, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext'


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

]

const Findjobs = () => {

  const [show, setShow] = useState({
    jobType: false,
    workMode: false,
    jobFunctions: false,
    experienceLevel: false
  })

  const hideFilter = (item) => {
    
    setShow((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const {userData,setUserData}=useContext(AuthContext)

  return (
    <section className='lg:px-28 py-3 md:px-8 px-4 min-h-screen  gap-2 '>
      <h1 className='text-black font-bold text-4xl mt-20'>Job Search </h1>
      <h1 className='text-gray-400 text-xl mt-4 mb-5'>Search for your desired job matching your skills</h1>

      <div className='flex items-center justify-between bg-purple-100 p-6 rounded ' >
        <div className=' flex lg:flex-row flex-col items-center gap-6'>
          <div className=' flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input className='  bg-purple-100 border-none outline-none p-2' type="text" name="" id="" placeholder='Enter Job title' />
          </div>
          <div className=' flex items-center gap-2'>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="size-5" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>


            <input className='  bg-purple-100 border-none outline-none p-2' type="text" name="" id="" placeholder='Enter location' />
          </div>
          <div className=' flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

            <input className='  bg-purple-100 border-none outline-none p-2' type="text" name="" id="" placeholder='Years of Experience' />
          </div>
        </div>
        <div className='flex items-end justify-end'>
          <button className='text-white bg-purple-700 py-3 px-10 rounded'>Search</button>
        </div>
      </div>

      {/* filtering jobs and show them here */}

      <div>
        <div className=' mt-12 flex lg:flex-row flex-col gap-6 '>
          {/* filter side */}
          <div className=' lg:w-1/3 w-full '>
            <div className='flex justify-between items-center'>
              <h1 className='text-xl font-bold'>Filter</h1>
              <button className='text-gray-500 cursor-pointer rounded px-2' >Clear all</button>
            </div>

            <div className=' '>

              <div className=' bg-purple-100 p-4 rounded-sm mt-6'>
                <h1 className='font-semibold mb-2'>Salary Range</h1>
                <div className='flex gap-2 items-center'>
                  <input type="number" placeholder='Min' className=' w-full p-1 rounded-sm' />
                  <input type="number" placeholder='Max' className=' w-full p-1 rounded-sm' />
                </div>
                <hr className=' border border-purple-300 mt-3 mb-3' />

                <div>
                  <div className='flex justify-between items-center mt-9 mb-3'>
                    <h1 className=' font-semibold'> Job Type</h1>
                    <button onClick={() => {
                      hideFilter("jobType")
                    }}>
                      {
                        show.jobType === false ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                          </svg>
                        )
                          :
                          (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>


                          )
                      }
                    </button>

                  </div>

                  {
                    show.jobType === false && (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-2">
                            <input
                              defaultChecked
                              type="checkbox"
                              id="all-checkbox"
                              className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="all-checkbox"

                            >
                              All (2567)
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Full-Time (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Part-Time (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Internship (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"
                          >
                            Contract (2567)
                          </label>
                        </div>

                      </>
                    )
                  }
                </div>

                <hr className=' border border-purple-300 mt-3 mb-3' />

                <div>
                  <div className='flex justify-between items-center mt-9 mb-3'>
                    <h1 className=' font-semibold'>Work Mode</h1>
                    <button onClick={() => {
                      hideFilter("workMode")
                    }}>
                      {
                        show.workMode === false ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                          </svg>
                        )
                          :
                          (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>


                          )
                      }
                    </button>

                  </div>

                  {
                    show.workMode === false && (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-2">
                            <input
                              defaultChecked
                              type="checkbox"
                              id="all-checkbox"
                              className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="all-checkbox"

                            >
                              On-Site (2567)
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Remote (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Hybrid (2567)
                          </label>
                        </div>

                      </>
                    )
                  }
                </div>

                <hr className=' border border-purple-300 mt-3 mb-3' />

                <div>
                  <div className='flex justify-between items-center mt-9 mb-3'>
                    <h1 className=' font-semibold'>Job Functions</h1>
                    <button onClick={() => {
                      hideFilter("jobFunctions")
                    }}>
                      {
                        show.jobFunctions === false ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                          </svg>
                        )
                          :
                          (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>


                          )
                      }
                    </button>

                  </div>

                  {
                    show.jobFunctions === false && (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-2">
                            <input
                              defaultChecked
                              type="checkbox"
                              id="all-checkbox"
                              className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="all-checkbox"

                            >
                              Marketing (2567)
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Engineering (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Design (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Sales (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"
                          >
                            Customer Service (2567)
                          </label>
                        </div>

                      </>
                    )
                  }
                </div>

                <hr className=' border border-purple-300 mt-3 mb-3' />

                <div>
                  <div className='flex justify-between items-center mt-9 mb-3'>
                    <h1 className=' font-semibold'>Experience Level</h1>
                    <button onClick={() => {
                      hideFilter("experienceLevel")
                    }}>
                      {
                        show.experienceLevel === false ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                          </svg>
                        )
                          :
                          (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>


                          )
                      }
                    </button>

                  </div>

                  {
                    show.experienceLevel === false && (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-2">
                            <input
                              defaultChecked
                              type="checkbox"
                              id="all-checkbox"
                              className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="all-checkbox"

                            >
                              Fresher/Entry-Level (2567)
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Junior (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Mid-Level (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"

                          >
                            Senior (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"
                          >
                            Lead/Managerial (2567)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="all-checkbox"
                            className="h-5 w-5 accent-purple-800 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="all-checkbox"
                          >
                            Director/Executive (2567)
                          </label>
                        </div>

                      </>
                    )
                  }
                </div>
                <Link className='flex justify-center mt-12 text-violet-700 underline text-xl font-semibold ' to={"/"}>Expand All</Link>
              </div>
              
            </div>

          </div>



          {/* lisiting jobs */}
          <div className=' w-full'>

            <div className='flex justify-between font-semibold'>
              <div >
                <h1 className='font-bold ml-8 text-xl'>All Jobs (2567)</h1>
              </div>
              <div className='flex items-center border rounded p-2'>
                <button>Popular</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
  
              </div>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2 w-full gap-3'>
              {dummyJobs.map((item) => {
                return (
                  <Card item={item} />
                )
              })}
            </div>
            
            <Link className='flex justify-center mt-12 text-violet-700 underline text-2xl font-bold ' to={"/"}>View all...</Link>
          </div>


        </div>

      </div>
    </section>
  )
}

export default Findjobs