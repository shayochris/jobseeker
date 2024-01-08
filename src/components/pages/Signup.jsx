import React from 'react'
import { useState } from 'react';
import { AiFillInfoCircle, AiOutlineClose } from 'react-icons/ai';
import {BiSolidLock, BiSolidUser} from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import { Link } from 'react-router-dom';


export default function Signup() {
    const [error,setError]=useState(false);
    const [usernameError, setUsernameError] =useState(false);
    const [passwordError, setPasswordError] =useState(false);
  return (
    <div className='fixed top-0 left-0 w-full h-screen overflow-y-scroll'>
        <div className="w-full  mx-auto  h-full md:w-[50%] lg:w-[40%] p-2 mt-12">
            <div className="">
                <form  className="bg-white w-[80%] mx-auto p-4 rounded-lg ">
                    <h1 className='text-green-500 font-semibold text-2xl my-3'>JobSeeker</h1>

                    {error && <div  className="flex items-center justify-between p-3 text-sm mb-4 bg-red-200 text-red-700 rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <div className="flex items-center">
                            <AiFillInfoCircle className="w-5 h-5"/>
                            <p className="ml-3 text-sm ">Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <AiOutlineClose onClick={()=>setError(false)}/>
                    </div>}

                    <div className={`my-3 rounded-lg border ${usernameError ? "border-red-500" :"border-green-500"} flex items-center overflow-hidden`}>
                        <div className={`flex items-center justify-center ${usernameError ? "bg-red-500" :"bg-green-500"} p-2`}>
                            <BiSolidUser className='w-5 h-5 text-white' />
                        </div>
                        <input className='outline-none px-4 text-sm' type="text" placeholder="Full Name e.g James John" />
                    </div>
                    <div className={`my-3 rounded-lg border ${usernameError ? "border-red-500" :"border-green-500"} flex items-center overflow-hidden`}>
                        <div className={`flex items-center justify-center ${usernameError ? "bg-red-500" :"bg-green-500"} p-2`}>
                            <MdMail className='w-5 h-5 text-white' />
                        </div>
                        <input className='outline-none px-4 text-sm' type="email" placeholder="email" />
                    </div>

                    <div className={`my-3 rounded-lg border ${passwordError ? "border-red-500" :"border-green-500"}  flex items-center overflow-hidden`}>
                        <div className={`flex items-center justify-center ${passwordError ? "bg-red-500" :"bg-green-500"} p-2`}>
                            <BiSolidLock className='w-5 h-5 text-white' />
                        </div>
                        <input className='outline-none px-4 text-sm' type="password" placeholder="password" />
                    </div>
                   
                    <div className="my-3">
                    <button className='button bg-green-600 w-full'>Register</button>
                    </div>
                   
                    <div className="my-3">
                       <p>
                        Already have an account? 
                        <span className="text-green-500 font-semibold">
                            <Link to="/signin"> Signin</Link>
                        </span>
                       </p>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
