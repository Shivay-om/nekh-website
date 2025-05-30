import React from 'react'
import logo from '../../assets/images/Home/flogo.png'

const Footer = () => {
    return (
        <div>
            <div className="w-full font-adamina bg-[#F2EEEE] p-8 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Left Side */}
                <div className="space-y-6">
                    <img src={logo} alt="logo" className="w-40 mb-16" />

                    <div className="border border-black p-2 text-sm leading-tight max-w-[180px]">
                        <span className="font-semibold text-[#005C43]">KNOW IT</span> |{" "}
                        <span className="font-semibold text-[#005C43]">SAY IT</span>
                        <p className="mt-1 text-[#555]">Identity design for brands that mean it.</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="mt-10 md:pr-10 md:mt-0 md:w-[30%] space-y-4 text-[#444] text-sm ">
                    <div className="space-y-1">
                        <p>Work</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>

                    <div className="space-y-1">
                        <p>hello@nekh.in</p>
                        <p>+91 98330 60629</p>
                    </div>

                    <p className="text-xs text-[#888]">
                        copyright@nekhidentitydesignsystem2025
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer