'use client'
import React, { useState } from 'react'
import abutusImage from "../asset/images/aboutusImage.png";
import Image from "next/image";

const About = () => {

    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className={`mt-[120px] pt-[60px] lg:mt-26 lg:pt-26 mb-[60px] pb-[60px] lg:mb-40 lg:pb-40 relative ${isHovered && `bg-[url('../asset/images/aboutusImage.png')] bg-no-repeat	bg-cover`}`} >
            <div className="max-w-7xl mx-auto px-4">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="relative">
                        <h3 className=" text-[40px] lg:text-9xl uppercase font-bold relative z-[999999]">About Us</h3>
                        <div className="h-80 w-80 rounded-[373px] overflow-hidden absolute right-28 top-28 hidden lg:block cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            {/* <img src="https://i.ibb.co/47ZF021/Group.jpg" alt="" /> */}
                            <Image src={abutusImage} alt="Add Icon" className="h-[320px] object-cover "/>
                        </div>
                        <div className="flex">
                            <ul className="opacity-70">
                                <li className="leading-8">Lorem</li>
                                <li className="leading-8">Lorem</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mb-4 opacity-70 leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About