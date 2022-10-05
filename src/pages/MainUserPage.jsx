import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { BsPlus, BsPlusCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../api/services'
import { ResumeList } from '../components/ResumeList'
import AuthContext from '../context/AuthProvider'
import { CandidateDashboard } from './CandidateDashboard'
import { RecruiterDashboardPage } from './RecruiterDashboardPage'

export const MainUserPage = () => {
  const navigate = useNavigate()
  const { setIsLoggedIn, isLoggedIn, setAuth, auth } = useContext(AuthContext)

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setIsLoggedIn(false)
        // TODO Set isLoggedIn to false and then use a button to redirect in the render
        return
      }

      const response = await getUser(token)
      if (response?.status === 200) {
        setAuth(response?.data)
      } else {
        localStorage.removeItem("token")
        navigate("/explorer")
      }
      console.log(response);
    }

    checkUser()

  },[])

  return (
    <div className='w-full'>
      <div className="header">
        <div className="bg-[url('/src/assets/hero2.jpg')] bg-cover bg-center h-[20vh] w-full">
            <div className="text-white flex flex-col items-center justify-center w-full h-full bg-opacity-70  bg-black gap-2">
                <div className='w-[calc(100%-400px)]'>
                    <h2 className='flex justify-start w-full text-gray-400'>Job Portal</h2>
                    <div className="text-center flex flex-row items-center justify-between w-full gap-10">
                        <div className='flex-1 flex flex-row gap-4'>
                            <h1 className='text-[2rem] text-left'>Making it easy to find Staff</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        {
          auth?.user_type === "recruiter" ?
            <>
              {/* <h2 className='text-[30px]'>Your Jobs</h2>
              <ResumeList />
              <button className='p-2 bg-green-500 text-white font-semibold rounded-md flex items-center justify-center gap-2'
                onClick={() => {
                  navigate("/add-resume")
                }}
              > <BsPlusCircleFill /> Add Resume</button> */}
              <RecruiterDashboardPage />
            </> :
            <>
              {/* <h2 className='text-[30px]'>Your Resumes</h2>
              <ResumeList />
              <button className='p-2 bg-green-500 text-white font-semibold rounded-md flex items-center justify-center gap-2'
                onClick={() => {
                  navigate("/add-resume")
                }}
              > <BsPlusCircleFill /> Add Resume</button> */}
              <CandidateDashboard />
            </>
        }
      </div>
    </div>
  )
}
