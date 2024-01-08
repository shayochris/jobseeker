import React from 'react'
import defo from  "../../../assets/images/profile-default.jpg";
import { Link } from 'react-router-dom';

export default function SideNav1() {
  return (
    <div className="hidden md:block md:w-[40%] lg:w-[30%] max-h-[500px] sticky top-16 left-0 mr-3 ">
        <div className="bg-white w-full border border-gray-300">
            <div className="w-full h-full">
                <div className="bg-blue-700 h-20 relative flex items-center">
                    <img src={defo} alt="" className="avatar-xl absolute ring ring-white top-10 left-20 lg:left-28" />
                </div>
                <div className="mt-12">
                    <div className="text-center pb-2 border-b border-gray-300">
                        <p className='font-semibold'>Christopher Shayo</p>
                        <p className="text-gray-600 text-sm">proffessional web developer</p>
                    </div>
                    <div className="text-center pb-2 border-b border-gray-300">
                        <p className='font-semibold'>1234</p>
                        <p className="text-gray-600 text-sm">Applications</p>
                    </div>
                    <div className="text-center pb-2 border-b border-gray-300">
                        <p className='font-semibold'>1234</p>
                        <p className="text-gray-600 text-sm">Connections</p>
                    </div>
                    <div className="text-center py-2">
                        <Link className='text-blue-500 text-sm'>view profile</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
