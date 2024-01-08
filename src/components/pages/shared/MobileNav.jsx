import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MobileNav() {
    const [menu,setMenu]=useState(false);
  return (
    <div className='md:hidden w-full sticky top-0 left-0 bg-white z-10'>
        {menu &&
        <div className="bg-white fixed top-0 left-0 w-full h-screen z-20 text-gray-600 p-2">
            <button onClick={()=>setMenu(false)} >close</button><br></br>
            <Link to="/signin">logout</Link>
        </div>}
        <ul className="w-full p-2 flex justify-between">
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
                <button onClick={()=>setMenu(true)}>Menu</button>
            </li>
        </ul>
    </div>
  )
}
