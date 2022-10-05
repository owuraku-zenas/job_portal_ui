import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { ResumeList } from '../components/ResumeList'

export const CandidateDashboard = () => {
    const navigate = useNavigate()
  return (
    <div className='py-10 w-[calc(100%-400px)] flex flex-col gap-3 '>
        <h2 className='text-[30px]'>Your Resumes</h2>
        <ResumeList />
        <button className='p-2 bg-green-500 text-white font-semibold rounded-md flex items-center justify-center gap-2'
          onClick={() => {
            navigate("/add-resume")
          }}
        > <BsPlusCircleFill /> Add Resume</button>
    </div>
  )
}
