import React, { useEffect, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { getAllJobs, getRecruiterJobs } from '../api/services'
import { JobList } from '../components/JobList'

export const RecruiterDashboardPage = () => {
  const [jobs, setJobs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    const allJobs = async () => {
      const response = await getRecruiterJobs(localStorage.getItem("token"))
      if (response?.status === 200) {
        console.log(response?.data);
        setJobs(response?.data?.data)
      } else {
        null
      }
    }
    allJobs()
  }, [])


  return (
    <div className='py-10 w-[calc(100%-400px)] flex flex-col gap-3'>
      <h2 className='text-[30px]'>Your Jobs</h2>
      <JobList jobs={jobs} />
      <button className='p-2 bg-green-500 text-white font-semibold rounded-md flex items-center justify-center gap-2'
        onClick={() => {
          navigate("/add-job")
        }}
      > <BsPlusCircleFill /> Add Job</button>
    </div>
  )
}
