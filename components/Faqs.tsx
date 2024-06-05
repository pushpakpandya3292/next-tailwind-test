'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import plushIcon from '../public/plush.svg'
import minusIcon from '../public/minus.svg'


const Faqs = () => {

    const [openAccordian, setOpenAccordian] = useState(0);
    const accordianData = [
        {
            key: 0,
            title: "LOREM IPSUM DOLOR SIT AMET",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            key: 1,
            title: "LOREM IPSUM DOLOR SIT AMET",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            key: 2,
            title: "LOREM IPSUM DOLOR SIT AMET",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            key: 3,
            title: "LOREM IPSUM DOLOR SIT AMET",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            key: 4,
            title: "LOREM IPSUM DOLOR SIT AMET",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            key: 5,
            title: "LOREM IPSUM DOLOR SIT AMET",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ]

    return (
        <div className="pt-44 pb-52">
            <h2 className="font-bold text-[40px] lg:text-7xl text-left lg:text-center uppercase mb-14 px-4">lorem ipsum dolor</h2>
            <div className="mb-8">
                {
                    accordianData?.map((data) => (
                        <div key={data.key}>
                            {
                                data.key === openAccordian ? <>
                                    <div className="py-3 cursor-pointer bg-[url('../asset/images/sliderBGimg.png')] bg-center	">
                                        <div className='max-w-7xl mx-auto px-4 flex items-center justify-between'>
                                            <h3 className="text-2xl">{data.title}</h3>
                                            <Image src={minusIcon} alt="Add Icon" />
                                        </div>
                                    </div>
                                    <div className="max-w-7xl mx-auto px-4 my-3">
                                        <div className="flex justify-between items-center">
                                            <p className="mb-4 opacity-70 text-lg leading-7">
                                                {data.content}
                                            </p>
                                            <i className="fas fa-plus text-green-500"></i>
                                        </div>
                                    </div>
                                </> : <div className="max-w-7xl mx-auto px-4 flex justify-between items-center mb-12" onClick={() => setOpenAccordian(data.key)}>
                                    <div className='flex items-center justify-between w-full'>
                                        <h3 className="font-bold text-2xl">{data.title}</h3>
                                        <Image src={plushIcon} alt="Add Icon" />
                                    </div>
                                    <i className="fas fa-minus text-red-500"></i>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Faqs