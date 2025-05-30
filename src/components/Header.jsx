import React from 'react'
import { useState } from 'react'
import { TbMenu } from "react-icons/tb";
import arrow from '../assets/images/Home/rightArrow.svg'
import Navbar from './nav/Navbar';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className=' flex justify-between items-center p-5'>
            <div className='flex items-center gap-2'>
                <button className='cursor-pointer' onClick={() => setMenuOpen(true)}>
                    <TbMenu size={36} className="text-white" />
                </button>

                <span className="text-sm text-white tracking-wide">Menu</span>
            </div>

            <div className='inline-flex text-white justify-start items-center px-5 py-2 gap-6 rounded-xs border border-white'>
                <h1>inquire</h1>
                <img src={arrow} alt="Right Arrow" />
            </div>

            {/* Show MobileMenu Component when menuOpen is true */}
            {menuOpen && <Navbar onClose={() => setMenuOpen(false)} />}

        </div>
    )
}

export default Header