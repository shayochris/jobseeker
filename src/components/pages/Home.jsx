import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import MobileNav from './shared/MobileNav'
import SideNav1 from './shared/SideNav1'
import SideNav2 from './shared/SideNav2'
import defo from  "../../assets/images/profile-default.jpg";
import { Link } from 'react-router-dom'
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BsBriefcaseFill,BsDot,BsThreeDotsVertical} from 'react-icons/bs';
import {MdLocationOn} from "react-icons/md";
import {HiUsers} from "react-icons/hi";
import {initializeApp} from 'firebase/app'
import {getFirestore,collection,getDocs} from 'firebase/firestore'

export default function Home() {
    const [books,setbooks] = useState([])
    const firebaseConfig = {
        apiKey: "AIzaSyAoTNp4pahXcV4mMWm1aAMnSn2Cpl9NY1g",
        authDomain: "jobseeker-512ad.firebaseapp.com",
        projectId: "jobseeker-512ad",
        storageBucket: "jobseeker-512ad.appspot.com",
        messagingSenderId: "1096476440625",
        appId: "1:1096476440625:web:006a7402860ae086ccbd10"
      };
      initializeApp(firebaseConfig)
      const db = getFirestore()
      const colRef = collection(db, 'books')
      getDocs(colRef).then(snapshot =>{
        let books = []
        snapshot.docs.forEach((doc)=>{
            books.push({...doc.data(),id:doc.id})
        })
        setbooks(books)
      })
  return (
    <div className='wrapper'>
        <Navbar/>
        <MobileNav/>
        <div className='flex w-full md:w-[90%] lg:w-[80%] mx-auto mt-2 '>
            <SideNav1/>
            <div className=" w-[95%] mx-auto md:w-[80%] lg:w-[40%] lg:mx-4">
                {books.map((book)=>(
                <div key={book.id} className=" mb-2 p-2 bg-white border border-gray-300">
                    <div className="p-2 flex items-center justify-between w-full">
                        <div className="flex items-center w-full ">
                            <img src={defo} alt="" className="avatar-sm" />
                            <div className='text-sm ml-3'>
                                <p>{book.author}</p>
                                <p className='text-gray-500'>posted 2 mins ago</p>
                            </div>
                            
                        </div>
                        <BsThreeDotsVertical className="w-6 h-6"/>
                    </div>
                    {/* <div className="p-2">
                        <p className="font-semibold text-blue-600">{book.title}</p>
                        <div className="flex items-center">
                            <p className="text-blue-500 flex items-center text-sm">
                                    <span><BsBriefcaseFill className='w-5 h-5 mr-1'/></span>
                                    Full Time Job
                            </p>
                            <BsDot className='mx-1'/>
                            <p className="flex items-center text-blue-500">
                                <AiOutlineClockCircle className='w-5 h-5 mr-1'/>
                                <p className="text-sm">2 days remained</p>
                            </p>
                        </div>
                        
                         
                    </div> */}
                   
                    <div className="flex items-center justify-between p-2">
                        {/* <div className='flex items-center text-sm'>
                            <p className="text-green-500 flex items-center">
                                <span><HiUsers className='w-5 h-5 mr-1'/></span>
                                189 position(s)
                            </p>
                            <BsDot className='text-gray-500 w-4 h-4'/>
                            <p className="text-green-500 flex items-center">
                                <span><MdLocationOn className='w-5 h-5 mr-1'/></span>
                                Dar es Salaam
                            </p>
                        </div> */}
                        {/* <p className='text-sm text-red-500 font-semibold'>Deadline in 2 months</p> */}
                    </div>
                    <div className="p-2">
                        <p className='text-gray-500 text-sm'>{book.title}</p>
                    </div>
                    {/* <div className=" p-2">
                        <button className="button-sm bg-blue-500">see more</button>
                    </div> */}
                </div>
                ))}
            </div>
            <SideNav2/>
        </div>
    </div>
  )
}
