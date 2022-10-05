import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { JobPageHero } from '../components/JobPageHero'
import { RiLinkedinBoxFill, RiLinksLine, RiTwitterFill } from 'react-icons/ri'
import { TbMap2 } from 'react-icons/tb'
import { BsPerson } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { getJob, getUser } from '../api/services'
import { JobList } from '../components/JobList'
import { FaMoneyBill } from 'react-icons/fa'

export const JobPage = () => {
  const params = useParams()
  const [job, setJob] = useState({})
  const [roles, setRoles] = useState([])
  const [requirements, setRequirements] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    const job = async () => {
      const response = await getJob(localStorage.getItem("token"), params.jobId)
      console.log(response?.data?.data);
      if (response?.status) {
        setJob(response?.data?.data)
        console.log(response?.data?.data?.responsibilities);
        setRoles(response?.data?.data?.responsibilities)
        setRequirements(response?.data?.data?.requirements)
      }
    }

    const user = async () => {
      const response = await getUser(localStorage.getItem("token"))
      console.log(response?.data);
      if (response?.status) {

        setUser(response?.data)
      }
    }

    job()
    user()
  }, [])


  return (
    <div className='flex flex-col items-center'>
      <JobPageHero title={job?.title} type={job?.job_type} />
      <div className='flex flex-row py-10 items-start gap-8 w-[calc(100%-400px)]'>
        <div className='flex items-start flex-col gap-8 flex-1 text-gray-500'>
          <header className="flex items-center gap-6 w-full">
            <div className="flex flex-col flex-1">
              <h3 className='text-2xl text-black'>{user.name}</h3>
              {/* <ul className='flex gap-4'>
                
                <li className='flex items-center'><RiLinksLine />{user.website}</li>
                <li className='flex items-center'><RiLinkedinBoxFill />Linked In</li>
                <li className='flex items-center '><RiTwitterFill />Twitter</li>
              </ul> */}
            </div>
          </header>
          <hr className='w-full' />
          <div className='flex flex-col gap-4'>
            <section>
              {job?.description}
            </section>
            <div className='flex flex-col gap-4'>
              <h3>The <span className='text-black'>Name of Job Role</span> will have responsibilities that include: </h3>
              <ul className='list-disc pl-5 flex flex-col gap-4 marker:text-green-500'>
                { roles ?
                  roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  )) : null
                }

              </ul>
            </div>
          </div>
          <div className="w-full  flex flex-col gap-4">
            <h3 className='text-black text-xl font-[500]'>Job Requirement</h3>
            <ul className='flex flex-col gap-4 list-disc pl-5 marker:text-green-500'>
              {
                requirements ?
                requirements.map((requirement, index) => (
                  <li key={index}> {requirement} </li>
                )) : null
              }
            </ul>
          </div>
        </div>
        <div className="overview w-3/7 ">
          <h3 className='py-4 text-lg font-semibold'>Overview</h3>
          <div className='border-2 p-8'>
            <ul className='flex flex-col gap-4'>
              <li className='flex gap-4'>
                <div className='text-green-500'>
                  <TbMap2 size={25} />
                </div>
                <div>
                  <h3>Location:</h3>
                  <p className='text-gray-500'>{job?.location}</p>
                </div>
              </li>
              <li className='flex gap-4'>
                <div className='text-green-500'>
                  <BsPerson size={25} />
                </div>
                <div>
                  <h3>Job Title:</h3>
                  <p className='text-gray-500'>{job?.title}</p>
                </div>
              </li>
              <li className='flex gap-4'>
                <div className='text-green-500'>
                  <FaMoneyBill size={25} />
                </div>
                <div>
                  <h3>Rate:</h3>
                  <p className='text-gray-500'>Ghc{job?.rate}/Month</p>
                </div>
              </li>
            </ul>
            <div className='border-2 border-green-500 flex justify-center items-center p-3 text-sm text-white mt-5 cursor-pointer bg-green-500 font-semibold rounded-[3px]'>
              <button>Apply for This Job</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
