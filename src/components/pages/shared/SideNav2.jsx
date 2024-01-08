import React from 'react'
import { Link } from 'react-router-dom'
import defo from  "../../../assets/images/profile-default.jpg";

export default function SideNav2() {
  return (
    <div className="hidden lg:block w-[30%] max-h-[500px] sticky top-16 left-0 ml-3 ">
        <div className="bg-white w-full  border border-gray-300 mb-2">
          <div className="p-2 flex justify-between items-center border-b border-gray-300">
            <p className="text-gray-500 font-semibold">Suggestions</p>
            <Link className='text-sm text-orange-500'>see all</Link>
          </div>
          <div className="p-2">
            {[...Array(5)].map((n,i)=>(
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <img src={defo} alt="" className="avatar-xs" />
                  <div className='text-sm ml-3'>
                    <p className='text-gray-500 font-semibold'>name</p>
                    <p className='text-gray-500' >proffession</p>
                  </div>
                </div>
                <div className="flex items-center justify-center border border-gray-300 h-8 w-8">
                  +
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>
  )
}
