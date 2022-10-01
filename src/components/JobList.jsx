import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import {FaRegMoneyBillAlt} from 'react-icons/fa'

const li = `flex items-center gap-[5px]`

const jobTypeColor = {
    'full-time': 'blue'
}

export const JobList = () => {
    return (
        <div className='flex flex-col border-2 border-gray-200 rounded-[3px] my-3 w-full'>
            <div className='flex flex-row justify-between items-center p-4 gap-5 border-l-4 border-l-blue-600 hover:bg-gray-200 cursor-pointer'>
                <div className="company__logo">
                    Logo
                </div>
                <div className="flex flex-col flex-1 gap-1 ">
                    <h3>Senior Software Engineer</h3>
                    <div className="">
                        <ul className='flex flex-row gap-3 text-xs text-gray-500'>
                            <li className={li}> <BsBriefcase/>ZenTech</li>
                            <li className={li}> <FiMapPin /> Korle-Bu</li>
                            <li className={li}> <FaRegMoneyBillAlt /> $200/month</li>
                            <li className='border-2 border-gray-300 flex justify-center items-center p-[2px] rounded-[3px]'>New</li>
                        </ul>
                    </div>
                </div>
                <div className={`border-2 border-${jobTypeColor['full-time']}-500 flex justify-center items-center p-[2px] text-sm text-${jobTypeColor['full-time']}-600 bg-${jobTypeColor['full-time']}-100 font-thin rounded-[3px]`}>
                    Full-Time
                </div>
            </div>
            <div className='flex flex-row justify-between items-center p-4 gap-5 border-l-4 border-l-green-600'>
                <div className="company__logo">
                    Logo
                </div>
                <div className="flex flex-col flex-1 gap-1">
                    <h3>Senior Software Engineer</h3>
                    <div className="">
                        <ul className='flex flex-row gap-3 text-xs text-gray-500'>
                            <li className={li}> <BsBriefcase/>Company Name</li>
                            <li className={li}> <FiMapPin /> Location</li>
                            <li className={li}> <FaRegMoneyBillAlt /> Rate</li>
                            <li className='border-2 border-gray-300 flex justify-center items-center p-[2px] rounded-[3px]'>New</li>
                        </ul>
                    </div>
                </div>
                <div className={`border-2 border-green-500 flex justify-center items-center p-[2px] text-sm text-green-600 bg-green-100 font-thin rounded-[3px]`}>
                    Part-Time
                </div>
            </div>
        </div>
    )
}
