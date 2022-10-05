import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createJob } from '../api/services'

export const CreateJobPage = () => {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [rate, setRate] = useState("")
  const [jobType, setJobType] = useState("full-time")
  const [responsibilities, setResponsibilities] = useState("")
  const [requirements, setRequirements] = useState("")
  const [workspace, setWorkspace] = useState("1")
  const [description, setDescription] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  const formHandler = async (event) => {
    event.preventDefault()
    const responsibilitiesFormatted = responsibilities.split(",").map(element => {
      return element.trim()
    })
    const requirementsFormatted = requirements.split(",").map(element => {
      return element.trim()
    })
    const response = await createJob(title, description, rate, location, jobType, workspace, responsibilitiesFormatted, requirementsFormatted)
    
    if(response?.status === 200) {
      alert("Job Added Successfully")
      console.log(response?.data);
      navigate("/")
    } else {

    }

  }

  return (
    <div>
      <div className="bg-gray-100 bg-cover bg-center bg-[url('/src/assets/hero1.jpg')] h-[40vh] w-full">
        <div className="text-white flex flex-col items-center justify-center w-full h-full bg-opacity-80  bg-black gap-2">
          <div className='w-[calc(100%-400px)]'>
            <div className="text-center flex flex-row items-center justify-between w-full gap-10">
              <div className='flex-1 flex flex-col gap-4'>
                <h1 className='text-[3rem] text-left'>Showcase the Jobs available</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-gray-50/[0.1] text-gray-600 drop-shadow-2xl'>
        <div className="w-[calc(100%-400px)] flex flex-col justify-center my-10 gap-8 items-start rounded-[5px] bg-white">
          <div className="header w-full p-2 border-b border-gray-300">
            <h2 className='text-[30px] p-2'>Add Job</h2>
          </div>
          <form className='w-full flex flex-wrap justify-between gap-8 p-4' onSubmit={formHandler}>
            {
              errorMessage ? <span className='drop-shadow-md p-1 bg-red-500 text-white font-bold rounded-md'>{errorMessage}</span> : null
            }
            <div className="name flex flex-col w-[48%] gap-2">
              <label className='text-[20px]' htmlFor="title">Job Title</label>
              <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="text"
                name="title"
                id="title"
                placeholder="e.g. Web Developer"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div className="name flex flex-col w-[48%] gap-2">
              <label className='text-[20px]' htmlFor="location">Location</label>
              <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="text"
                name="location"
                id="location"
                placeholder='Enter Location'
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
              />
            </div>
            <div className="name flex flex-col w-[48%] gap-2">
              <label className='text-[20px]' htmlFor="title">Rate/Month in Ghc</label>
              <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="number"
                name="rate"
                id="rate"
                placeholder="e.g. 1000"
                value={rate}
                onChange={(event) => setRate(event.target.value)}
                required
              />
            </div>
            <div className="user__type w-[48%] flex flex-col gap-2">
              <label className='text-[20px]' htmlFor="type">Job Type</label>
              <select className='border-2 w-full h-10 text-lg px-4 bg-white rounded-[4px]' name="type" id="type" value={jobType} onChange={(event) => setJobType(event.target.value)}>
                <option value='full-time'>Full-Time</option>
                <option value='part-time'>Part-Time</option>
                <option value='national-service'>National Service</option>
                <option value='internship'>Internship</option>
                <option value='freelance'>Freelance</option>
              </select>
            </div>
            <div className="user__type w-[48%] flex flex-col gap-2">
              <label className='text-[20px]' htmlFor="workspace">Workspace</label>
              <select className='border-2 w-full h-10 text-lg px-4 bg-white rounded-[4px]' name="workspace" value={workspace} id="workspace" onChange={(event) => setWorkspace(event.target.value)}>
                <option value='1'>Office</option>
                <option value='2'>Work From Home</option>
                <option value='3'>Hybrid</option>
              </select>
            </div>
            <div className="name flex flex-col w-[48%] gap-2">
              <label className='text-[20px]' htmlFor="responsibilities">Responsibilities</label>
              <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="text"
                name="responsibilities"
                id="responsibilities"
                placeholder="e.g.  PHP, Laravel, React, Tailwind"
                value={responsibilities}
                onChange={(event) => setResponsibilities(event.target.value)}
                required
              />
              <p className='text-gray-400'>
                Comma separates responsibilities.
              </p>
            </div>
            <div className="name flex flex-col w-[48%] gap-2">
              <label className='text-[20px]' htmlFor="requirements">Requirements</label>
              <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="text"
                name="requirements"
                id="requirements"
                placeholder="e.g.  PHP, Laravel, React, Tailwind"
                value={requirements}
                onChange={(event) => setRequirements(event.target.value)}
                required
              />
              <p className='text-gray-400'>
                Comma separate requirements.
              </p>
            </div>
            <div className="name flex flex-col w-full gap-2">
              <label className='text-[20px]' htmlFor="description">Description</label>
              <textarea rows={10} className='border-2 w-full text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </div>
            <button className='bg-green-700 w-full text-white font-semibold border-0 px-5 py-3 flex items-center justify-center gap-2 rounded-[3px] drop-shadow-2xl' type="submit">Add Job</button>
          </form>
        </div>
      </div>
    </div>
  )
}
