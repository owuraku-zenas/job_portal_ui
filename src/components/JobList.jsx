import React, { useEffect } from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { Job } from './Job'
import { useNavigate } from 'react-router-dom'




export const JobList = ({ jobs }) => {
    const navigate = useNavigate()
    const viewJob = (id) => {
        navigate(`/jobs/${id}`)
    }


    return (

        <div className='flex flex-col border-2 border-gray-200 rounded-[3px] my-3 w-full'>
            {


                jobs.map((job) => (
                    <Job job={job} key={job.id} onClick={(id) => viewJob(id)} />
                ))
            }
        </div>
    )
}
