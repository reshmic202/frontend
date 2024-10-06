import React, { useState } from 'react'

const Login = () => {

    const [data,setData]=useState({
        email:"",
        password:"",
    })

    const hanldeChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const hanldeSignIn=async()=>{
        const url=process.env.REACT_APP_BACKEND_URL
        let res= await fetch(`${url}/auth/login`,{
            method:"POST",
            headers:{
               'Content-Type': "application/json",
            },
            body:JSON.stringify(data)
        })
        const status=res.status;
        res= await res.json()
        console.log(res)
        if(status===200){
            alert(res.message)
            localStorage.setItem("token",res.token)
            console.log("Result from backend: ",res)
        }else{
            alert(res.message)
        }
        console.log(data)
    }

  return (
    <div className=' min-h-screen flex items-center justify-center bg-slate-200'>
      <div className=' rounded-xl p-4 bg-white flex flex-col gap-2 w-[80%] md:w-[80%] lg:w-1/2'>
        <h1 className=' text-2xl font-bold'>Log in</h1>
        <hr />
        <div className=' text-start w-full'>
            <label htmlFor="">Email Address</label>
            <br />
            <input onChange={hanldeChange} className=' p-2 rounded-lg bg-slate-100 text-sm border-none outline-none w-full' type="email" name="email" id="" />
        </div>
        <div className=' text-start'>
            <label htmlFor="">Password</label>
            <br />
            <input onChange={hanldeChange} className=' p-2 rounded-lg bg-slate-100 text-sm border-none outline-none w-full' type="password" name="password" id="" />
        </div>

        <div className=' text-start'>
            <label htmlFor="">Role</label>
            <br />
            <select onChange={hanldeChange} className=' w-full p-2 rounded-md outline-none border-none bg-slate-100' name="role" id="">
                <option value="">Select a role</option>
                <option value="user">User</option>
                <option value="company">Company</option>
            </select>
        </div>

        <div>
            <button onClick={hanldeSignIn} className=' w-full bg-green-600 p-2 rounded-xl text-white'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
