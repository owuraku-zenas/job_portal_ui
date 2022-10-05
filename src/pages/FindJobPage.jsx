import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { getAllJobs } from '../api/services'
import { JobList } from '../components/JobList'

export const FindJobPage = () => {

  const [jobs, setJobs] = useState([])

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
  }, [])

  return (
    <div>
      <div className="bg-gray-100 bg-cover bg-center h-[20vh] w-full">
        <div className="text-white flex flex-col items-center justify-center w-full h-full bg-opacity-30  bg-black gap-2">
          <div className='w-[calc(100%-400px)]'>
            <div className="text-center flex flex-row items-center justify-between w-full gap-10">
              <div className='flex-1 flex flex-row gap-4'>
                <h1 className='text-[3rem] text-left'>Find the Job You Desire</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className="w-[calc(100%-400px)] flex justify-center gap-10 items-start">
          <JobList jobs={jobs}/>
          <form className="w-[30%] py-5 flex flex-col gap-10">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor='order' className='text-xl'>Sort By</label>
              <select id="order" className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-400' name="order">
                <option className='bg-white' value="desc">Newest</option>
                <option className='bg-white' value="asc">Oldest</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className='text-xl'>Job Type</h2>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="any" name="any" value="any" />
                <label htmlFor="any">Any Type</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="full-time" name="full-time" value="full-time" />
                <label htmlFor="full-time">Full-Time</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="part-time" name="part-time" value="part-time" />
                <label htmlFor="part-time">Part-Time</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="internship" name="internship" value="internship" />
                <label htmlFor="internship">Internship</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="freelance" name="freelance" value="freelance" />
                <label htmlFor="freelance">Freelance</label>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className='text-xl'>Rate/Month</h2>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="any-rate" name="any" value="any" />
                <label htmlFor="any-rate">Any Type</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="00-200" name="00-200" value="00-200" />
                <label htmlFor="00-200">Ghc0 - Ghc200</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="201-500" name="201-500" value="201-500" />
                <label htmlFor="201-500">Ghc201 - Ghc500</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="501-1000" name="501-1000" value="501-1000" />
                <label htmlFor="internship501-1000">Ghc501 - Ghc1000</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="1001-5000" name="1001-5000" value="1001-5000" />
                <label htmlFor="1001-5000">Ghc1001 - Ghc5000</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id="5001" name="5001" value="5001" />
                <label htmlFor="5001">Ghc5000 +</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
