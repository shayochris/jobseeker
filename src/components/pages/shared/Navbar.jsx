import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='hidden md:block w-full sticky top-0 left-0 bg-white z-10'>
        <nav className="md:w-[90%] lg:w-[80%] mx-auto flex justify-between items-center p-2">
            <h1 className="logo">JobSeeker</h1>
            <ul className="md:flex hidden ">
                <li className='navlink'>
                    <Link>Home</Link>
                </li>
                <li className='navlink'>
                    <Link>Home</Link>
                </li>
                <li className='navlink'>
                    <Link>Home</Link>
                </li>
                <li className='navlink'>
                    <Link>Home</Link>
                </li>
                <li className='navlink'>
                    <Link>Home</Link>
                </li>
            </ul>
            <div>
                <Link to="/signin">Logout</Link>
            </div>
        </nav>
    </div>
  )
}
