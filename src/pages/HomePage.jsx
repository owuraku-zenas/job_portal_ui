import React from 'react'
import { Hero } from '../components/Hero'
import { JobList } from '../components/JobList'
import { Services } from '../components/Services'

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <div className="mx-24">
        <h2>
          Recent Jobs
        </h2>
        <JobList />
        <div className='flex justify-center items-center w-full'>
          <button className='p-2 bg-green-500 text-white font-semibold'>Show More</button>
        </div>
      </div>
    </div>
  )
}
