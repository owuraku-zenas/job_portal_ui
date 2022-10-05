import React, { useContext, useState } from 'react'
import ReactDom from 'react-dom'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/services'
import AuthContext from '../context/AuthProvider'


export const Modal = ({ open, onClose }) => {

    const { setAuth } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    const formHandler = async (event) => {
        // TODO Login service
        event.preventDefault()
        const result = await login(email, password)
        if (result?.status === 200) {
            console.log(result?.data?.user?.user_type)
            localStorage.setItem('token', result?.data?.access_token)
            setAuth(result?.data?.user)
            onClose()
            navigate("/")

        } else {
            setErrorMessage("Login failed")
        }
    }

    if (!open) {
        return null
    }
    return ReactDom.createPortal(
        <>
            <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[1000]' onClick={() => onClose()} />
            <div className='fixed top-1/2 left-1/2 bg-white z-[10000] flex flex-col w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[4px]'>
                <div className='flex justify-end items-center flex-row p-2'>
                    <button className='text-red-700'><RiCloseCircleFill size={30} onClick={() => onClose()} /></button>
                </div>
                <div className='py-5 flex items-center justify-center'>
                    <form className='flex flex-col gap-5 justify-center items-center w-[calc(100%-80px)]' onSubmit={formHandler}>
                        {errorMessage ? <span className='text-red-500 font-semibold w-full flex justify-start items-center p-1 rounded-md'>{errorMessage}</span> : null}
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="email">Email:</label>
                            <input className='border-b-2 h-10 text-lg px-4 bg-white'
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="password">Password:</label>
                            <input className='border-b-2 h-10 text-lg px-4 bg-white'
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button className='bg-green-700 w-full text-white font-semibold border-0 px-5 py-3 flex items-center justify-center gap-2 rounded-[3px]' type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
