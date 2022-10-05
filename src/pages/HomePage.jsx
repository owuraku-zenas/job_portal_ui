import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllJobs } from '../api/services'
import { Hero } from '../components/Hero'
import { JobList } from '../components/JobList'
import { Services } from '../components/Services'

export const HomePage = () => {

  const [jobs, setJobs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const allJobs = async () => {
      const response = await getAllJobs()
      if (response?.status === 200) {
        console.log(response?.data);
        setJobs(response?.data?.data)
      } else {
        null
      }
    }

    allJobs()
  },[])

  return (
    <div>
      <Hero />
      <Services />
      <div className="mx-24">
        <h2>
          Recent Jobs
        </h2>
        <JobList jobs={jobs.slice(0, 5)} />
        <div className='flex justify-center items-center w-full'>
          <button className='p-2 bg-green-500 text-white font-semibold' onClick={() => navigate("/jobs")}>Show More</button>
        </div>
      </div>
    </div>
  )
}
