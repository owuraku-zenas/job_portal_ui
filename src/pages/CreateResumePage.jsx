import React, { useState } from 'react'

export const CreateResumePage = () => {

  const [errorMessage, setErrorMessage] = useState("")
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [rate, setRate] = useState("")
  const [linkedIn, setLinkedIn] = useState("")
  const [website, setWebsite] = useState("")
  const [twitter, setTwitter] = useState("")
  const formHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <div className="bg-gray-100 bg-cover bg-center bg-[url('/src/assets/hero1.jpg')] h-[40vh] w-full">
        <div className="text-white flex flex-col items-center justify-center w-full h-full bg-opacity-80  bg-black gap-2">
          <div className='w-[calc(100%-400px)]'>
            <div className="text-center flex flex-row items-center justify-between w-full gap-10">
              <div className='flex-1 flex flex-col gap-4'>
                <h1 className='text-[3rem] text-left'>LET THE WORLD KNOW ABOUT YOUR SKILLS </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-gray-50/[0.1] text-gray-600 drop-shadow-2xl">
        <div className="header w-full p-6 ">
          <h2 className='text-[25px] p-2 w-[calc(100%-400px)]'>Add Resume</h2>
        </div>
        <form className='w-full flex flex-col items-center justify-center' onSubmit={formHandler}>
          <div className="w-[calc(100%-100px)] flex flex-col justify-center my-10 gap-4 items-start rounded-[5px] bg-white">
            <div className='w-full flex flex-wrap justify-between gap-8 px-4 py-10' >
              <div className="name flex flex-col w-[48%] gap-2">
                <label className='text-[20px]' htmlFor="title">Professional Title</label>
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
                <label className='text-[20px]' htmlFor="tags">Tags</label>
                <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                  type="text"
                  name="tags"
                  id="tags"
                  placeholder="e.g.  PHP, Laravel, React, Tailwind"
                  value={tags}
                  onChange={(event) => setTags(event.target.value)}
                  required
                />
                <p className='text-gray-400'>
                  Comma separate tags, such as required skills or technologies, for this job.
                </p>
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
              <div className="name flex flex-col w-[48%] gap-2">
                <label className='text-[20px]' htmlFor="website">Website</label>
                <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                  type="text"
                  name="website"
                  id="website"
                  placeholder='Enter Website'
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>
              <div className="name flex flex-col w-[48%] gap-2">
                <label className='text-[20px]' htmlFor="linked_in">Linked In</label>
                <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                  type="text"
                  name="linked_in"
                  id="linked_in"
                  placeholder='Enter Linked In Profile'
                  value={linkedIn}
                  onChange={(event) => setLinkedIn(event.target.value)}
                  required
                />
              </div>
              <div className="name flex flex-col w-[48%] gap-2">
                <label className='text-[20px]' htmlFor="twitter">Twitter</label>
                <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder='Enter Twitter Profile'
                  value={twitter}
                  onChange={(event) => setTwitter(event.target.value)}
                />
              </div>
            </div>

          </div>
          <div className="w-[calc(100%-100px)] flex flex-col justify-center my-10 gap-4 items-start rounded-[5px] bg-white">
            <div className="header w-full p-2 border-b border-gray-200">
              <h2 className='text-[20px] p-2 w-[calc(100%-400px)]'>Education</h2>
            </div>
            <div className='w-full flex flex-wrap justify-between gap-8 px-4 py-10' >
              <button className='p-2 bg-green-500 text-white font-semibold'>Add Education</button>
            </div>
          </div>
          <div className="w-[calc(100%-100px)] flex flex-col justify-center my-10 gap-4 items-start rounded-[5px] bg-white">
            <div className="header w-full p-2 border-b border-gray-200">
              <h2 className='text-[20px] p-2 w-[calc(100%-400px)]'>Expiriences</h2>
            </div>
            <div className='w-full flex flex-wrap justify-between gap-8 px-4 py-10' >
              <button className='p-2 bg-green-500 text-white font-semibold'>Add Expiriences</button>
            </div>
          </div>
          <div className="w-[calc(100%-100px)] flex flex-col justify-center my-10 gap-4 items-start rounded-[5px] bg-white">
            <div className="header w-full p-2 border-b border-gray-200">
              <h2 className='text-[20px] p-2 w-[calc(100%-400px)]'>Personal Projects</h2>
            </div>
            <div className='w-full flex flex-wrap justify-between gap-8 px-4 py-10' >
              <button className='p-2 bg-green-500 text-white font-semibold'>Add Personal Projects</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
