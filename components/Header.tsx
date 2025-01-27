'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../asset/images/logo.svg"

const Header = () => {

    const [open, setOpen] = useState(false)
    return (
        <header>
            <nav className="bg-black border-gray-200 px-4 lg:px-8 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com" className="flex items-center w-24 h-6  sm:h-9">
                        <Image src={logo} className="mr-3 w-full" alt="Flowbite Logo" />
                    </a>
                    <div className="flex items-center lg:order-2">
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false" onClick={() => setOpen(p => !p)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`${open ? "" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2`}> This is</div>
        </header>
    )
}

export default Header