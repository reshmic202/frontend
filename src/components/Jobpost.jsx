import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Jobpost = () => {

    const [editorState, setEditorState] = useState('');
    const [jobForm,setJobForm]=useState({
        jobTitle:"",
        jobTags:"",
        jobRole:"",
        jobMinSalary:"",
        jobMaxSalary:"",
        jobSalaryRange:"",
        jobVacencies:"",
        jobLevel:"",
        jobCountry:"",
        jobCity:""
    })

    const handleInputChange=(e)=>{
        setJobForm({
            ...jobForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=async()=>{
        console.log("Other",jobForm)
        console.log("Editor State",editorState)
    }
    return (
        <section className=' lg:px-28 py-3 md:px-8 px-4 min-h-screen '>
            <h1 className='font-bold text-3xl mt-11'>Post a job</h1>
            <h1 className=' font-semibold mt-3'>Find the best talent for your company</h1>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold'>Job Title</h1>
                <input name={"jobTitle"} onChange={handleInputChange} type="text" placeholder='Add job title, role vacancies etc' className='border-2 p-4 w-full rounded-md' />
            </div>
            <div className=' mt-6 flex items-center justify-between gap-4'>
                <div className='w-full '>
                    <h1 className='mb-1 text-xl font-semibold'> Tags</h1>
                    <input name={"jobTags"} onChange={handleInputChange} type="text" placeholder='Job keyword, tags etc' className=' border-2 p-4 w-full rounded-md' />
                </div>
                <div className='w-full '>
                    <h1 className='text-xl font-semibold mb-1'> Job role</h1>
                    <input name={"jobRole"} onChange={handleInputChange} type="text" placeholder='Job keyword, tags etc' className=' border-2 p-4 w-full rounded-md' />
                </div>
            </div>

            <div className=' mt-4'>

                <div className=' flex items-center justify-between gap-3'>
                    <div className=' flex gap-2 w-1/2'>
                        <div className=''>
                            <h1 className=' text-xl font-semibold mb-1'>Min Salary</h1>
                            <div className=' w-full flex items-center border-2 rounded-md'>
                                <input name={"jobMinSalary"} onChange={handleInputChange} className=' p-4 w-[80%]' type="text" placeholder='Minimum Salary....' />
                                <p className=' bg-slate-100 p-4'>INR</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold mb-1'>Max Salary</h1>
                            <div className=' w-full flex items-center border-2 rounded-md'>
                                <input name={"jobMaxSalary"} onChange={handleInputChange} className=' p-4 w-[80%]' type="text" placeholder='Minimum Salary....' />
                                <p className=' bg-slate-100 p-4'>INR</p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-1/2  rounded-md'>
                        <h1 className=' text-white'>ds</h1>
                        <select name={"jobSalaryRange"} onChange={handleInputChange} id="" className='w-full bg-slate-50 rounded-md p-4 border-2'>
                            <option value="Select">Select an option</option>
                            <option value="500000">5 Lakhs</option>
                            <option value="600000">6 Lakhs</option>
                            <option value="1000000">10 Lakhs</option>
                            <option value="1500000">15 Lakhs</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className=' flex items-center justify-between gap-2 mt-4'>
                <div className=' w-1/2'>
                    <h1 className=' text-xl font-semibold mb-1'>Vacancies</h1>
                    <input name={"jobVacencies"} onChange={handleInputChange} className=' p-4 border w-[80%]' type="text" placeholder='Number of vacancies' />
                </div>

                <div className=' w-1/2'>
                    <h1 className=' text-xl font-semibold mb-1'>Job Level</h1>
                    <select name={"jobLevel"} onChange={handleInputChange} id="" className='w-full bg-slate-50 rounded-md p-4 border-2'>
                        <option value="Select">Select an option</option>
                        <option value="Fresher">Fresher</option>
                        <option value="Associate">Associate</option>
                        <option value="Mid-Level">Mid-Level</option>
                        <option value="Senior">Senior</option>
                    </select>
                </div>

            </div>

            <div className=' mt-6 flex items-center justify-between gap-4'>
                <div className='w-full '>
                    <h1 className='mb-1 text-xl font-semibold'>Country</h1>
                    <input name={"jobCountry"} onChange={handleInputChange} type="text" placeholder='Job keyword, tags etc' className=' border-2 p-4 w-full rounded-md' />
                </div>
                <div className='w-full '>
                    <h1 className='text-xl font-semibold mb-1'> City</h1>
                    <input name={"jobCity"} onChange={handleInputChange} type="text" placeholder='Job keyword, tags etc' className=' border-2 p-4 w-full rounded-md' />
                </div>
            </div>

            <div className=' mt-4'>
                <h1 className='mb-1  text-xl font-semibold'>Job Description</h1>
                <ReactQuill theme="snow" className=' ' value={editorState} onChange={setEditorState} />
                
            </div>

            <div>
                <button onClick={handleSubmit} className=' p-2 bg-purple-600 rounded-md w-1/4 text-white mt-4'>Add Job</button>
            </div>

        </section>
    )
}

export default Jobpost
