import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, register } from '../api/services'
import AuthContext from '../context/AuthProvider'

export const RegisterPage = () => {

  const { setAuth } = useContext(AuthContext)

  const [userType, setSetUserType] = useState('candidate')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [location, setLocation] = useState("")
  const [website, setWebsite] = useState("")
  const [linkedIn, setLinkedIn] = useState("")
  const [twitter, setTwitter] = useState("")
  const [instagram, setInstagram] = useState("")
  const [about, setAbout] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  const formHandler = async (event) => {
    // TODO Check passwords
    event.preventDefault()
    if(password !== confirmPassword) {
      setErrorMessage("Passwords do not match")
      return
    }

    const response = await register(userType, name, email, password, location, website, linkedIn, twitter, instagram, about)
    if (response?.status === 200) {
      // console.log(response?.data?.message);

      const response2 = await login(email, password)

      if (response2?.status === 200) {
        localStorage.setItem("token", response2?.data?.access_token)
        setAuth(response2?.data?.user)
        navigate("/")
      }
    } else {
      console.log(response2?.data?.errors);
      setErrorMessage("Registration Failed")
    }
  }

  return (
    <div>
      <div className="bg-gray-100 bg-cover bg-center bg-[url('/src/assets/hero5.jpg')] h-[40vh] w-full">
        <div className="text-white flex flex-col items-center justify-center w-full h-full bg-opacity-50  bg-black gap-2">
          <div className='w-[calc(100%-400px)]'>
            <div className="text-center flex flex-row items-center justify-between w-full gap-10">
              <div className='flex-1 flex flex-row gap-4'>
                <h1 className='text-[3rem] text-left'>Join our Diverse Community</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-gray-50/[0.1] text-gray-600 drop-shadow-2xl'>
        <div className="w-[calc(100%-400px)] flex flex-col justify-center my-10 gap-8 items-start rounded-[5px] bg-white">
          <div className="header w-full p-2 border-b border-gray-300">
            <h2 className='text-[30px] p-2'>Registration Form</h2>
          </div>
          <form className='w-full flex flex-wrap justify-between gap-8 p-4' onSubmit={formHandler}>
            {
              errorMessage ? <span className='drop-shadow-md p-1 bg-red-500 text-white font-bold rounded-md'>{errorMessage}</span> : null
            }
            <div className="user__type w-full flex flex-col gap-2">
              <label className='text-[20px]' htmlFor="user-type">Candidate or Recruiter</label>
              <select className='border-2 w-full h-10 text-lg px-4 bg-green-700 border-green-700 text-white rounded-[4px]' name="user-type" id="user-type" onChange={(event) => setSetUserType(event.target.value)}>
                <option value='candidate'>Candidate</option>
                <option value='recruiter'>Recruiter</option>
              </select>
            </div>
            <div className="name flex flex-col w-[48%] gap-2">
              <label className='text-[20px]' htmlFor="name">{userType === 'candidate' ? 'Full Name' : 'Company Name'}</label>
              <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="text"
                name="name"
                id="name"
                placeholder={userType === 'candidate' ? 'Enter Full Name' : 'Enter Company Name'}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="name flex flex-col w-[48%] gap-2">
              <label className='text-[20px]' htmlFor="email">Email</label>
              <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="email"
                name="email"
                id="email"
                placeholder='Enter email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="name flex flex-col w-[48%] gap-2">
              <label className='text-[20px]' htmlFor="password">Password</label>
              <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="password"
                name="password"
                id="password"
                placeholder='Enter Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="name flex flex-col w-[48%] gap-2">
              <label className='text-[20px]' htmlFor="password2">Confirm Password</label>
              <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                type="password"
                name="password2"
                id="password2"
                placeholder='Enter Password'
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
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
            {
              userType === 'candidate' ? null :
                <>
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
                  <div className="name flex flex-col w-[48%] gap-2">
                    <label className='text-[20px]' htmlFor="instagram">Instagram</label>
                    <input className='border-2 w-full h-10 text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                      type="text"
                      name="instagram"
                      id="instagram"
                      placeholder='Enter Instagram Profile'
                      value={instagram}
                      onChange={(event) => setInstagram(event.target.value)}
                    />
                  </div>
                  <div className="name flex flex-col w-full gap-2">
                    <label className='text-[20px]' htmlFor="about">About</label>
                    <textarea rows={10} className='border-2 w-full text-lg px-4 bg-white text-gray-600 rounded-[4px]'
                      type="text"
                      name="about"
                      id="about" placeholder='About the Company'
                      value={about}
                      onChange={(event) => setAbout(event.target.value)}
                      required
                    />
                  </div>
                </>
            }
            <button className='bg-green-700 w-full text-white font-semibold border-0 px-5 py-3 flex items-center justify-center gap-2 rounded-[3px] drop-shadow-2xl' type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
