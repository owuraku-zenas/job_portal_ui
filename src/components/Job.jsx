import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'


const li = `flex items-center gap-[5px]`

export const Job = ({ job, onClick }) => {
    return (
        <div className='flex flex-row justify-between items-center p-4 py-8 gap-5 hover:bg-gray-200 cursor-pointer' onClick={() => onClick(job.id)}>
            <div className="flex flex-col flex-1 gap-1 ">
                <h3>{job.title}</h3>
                <div className="">
                    <ul className='flex flex-row gap-3 text-xs text-gray-500'>
                        <li className={li}> <FiMapPin />{ job.location }</li>
                        <li className={li}> <FaRegMoneyBillAlt /> Ghc{ job.rate }/Month</li>
                    </ul>
                </div>
            </div>
            <div className={`border-2 border-gray-200 flex justify-center items-center p-[2px] text-sm text-gray-800 bg-gray-300 font-thin rounded-[3px]`}>
                {job.job_type}
            </div>
        </div>
    )
}
