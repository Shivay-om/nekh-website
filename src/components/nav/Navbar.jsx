import React from 'react';
import logo from '../../assets/images/Home/logo.webp';
import { RiCloseLargeFill } from "react-icons/ri";
import leavesImg from '../../assets/images/Home/navImg.png';
import arrow from '../../assets/images/Home/rightArrow.svg'


const Navbar = ({ onClose }) => {
    return (
        <div className="fixed h-screen inset-0 bg-[#005C43] text-white z-50 p-6">
            {/* Top */}
            <div className='flex justify-between items-center  border-red-600'>
                <div className=" flex items-center gap-2">
                    <button onClick={onClose} className="self-end cursor-pointer">
                        <RiCloseLargeFill size={36} />
                    </button>
                    <span className="text-sm tracking-wide">CLOSE</span>
                </div>

                {/* Logo */}
                <div className="">
                    <img src={logo} alt="Logo" className="w-24 md:w-32" />
                </div>

                {/* Right Top Inquire Button */}
                <div className='inline-flex text-white justify-start items-center px-2 py-2 gap-6 rounded-xs border border-white'>
                    <h1>inquire</h1>
                    <img src={arrow} alt="Right Arrow" />
                </div>
            </div>

            {/* middle */}
            <div className=' md:flex md:my-10 md:py-10'>
                <div className="w-full md:w-[50%] mt-20 md:mt-0 flex justify-center md:justify-start">
                    <img src={leavesImg} alt="Leaves" className="w-52 md:w-60 px-2" />
                </div>

                {/* Center Navigation */}
                <div className="flex flex-col items-center md:items-start md:w-[50%] gap-6 mt-8 md:mt-0 text-2xl md:text-3xl font-light group">
                    {['Portfolio', 'Services', 'About', 'Blog', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white transition-opacity duration-300 ease-out group-hover:opacity-50 hover:opacity-100 slide-up-appear"
                        >
                            {item}
                        </a>
                    ))}
                </div>

            </div>

            {/* Footer */}
            <div className="flex md:justify-end ">
                <div className='flex justify-between items-center w-full md:w-[50%] my-10 md:my-0'>
                    <div className="text-xs flex md:justify-end gap-4">
                        <span>LEGAL</span>
                        <span>R & D</span>
                    </div>

                    <div className="text-xs text-end">
                        hello@nek.in
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
