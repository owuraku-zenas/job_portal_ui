import React, { useContext, useEffect, useState } from 'react'
import { BsFileSpreadsheetFill, BsGearFill } from 'react-icons/bs'
import { FaLock, FaPaperPlane } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { getUser, logout } from '../api/services'
import AuthContext from '../context/AuthProvider'
import '../styles/Navbar.css'
import { Modal } from './Modal'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const { resetContext, auth, setAuth } = useContext(AuthContext)


    const onClose = () => {
        setIsOpen(!isOpen)
    }

    const logoutUser = async () => {
        const token = localStorage.getItem("token")
        const response = await logout(token)
        if (response?.status === 200) {
            resetContext()
            navigate("/explorer")
        } else {
            alert("Error Occured in Sign Out")
        }
    }

    const Menu = [
        { title: "Find Jobs", link: "/jobs" },
        { title: "Find People", link: "/candidates" },
    ]

    const candidateMenu = [
        { title: "Find Jobs", link: "/jobs" },
        { title: "Create Resume", link: "/add-resume", for: "candidate" },
    ]

    const recruiterMenu = [
        { title: "Find People", link: "/candidates" },
        { title: "Post Job", link: "/add-job", for: "recruiter" },
    ]

    return (
        <>
            <div className='navbar'>
                <h3 onClick={() => navigate("/")} className="logo">
                    Job Portal
                </h3>

                <ul className="nav__links">
                    {/* TODO Check if user logged in and determine which menu to show */}
                    {
                        auth?.user_type === "recruiter" ?
                            recruiterMenu.map((menu, index) => (
                                <li
                                    key={index}
                                    style={window.location.pathname === menu.link ? { backgroundColor: "green", color: "white" } : null}
                                    onClick={
                                        () => navigate(menu.link)
                                    }
                                >
                                    {menu.title}
                                </li>
                            )) : auth?.user_type === "candidate" ?
                                candidateMenu.map((menu, index) => (
                                    <li
                                        key={index}
                                        style={window.location.pathname === menu.link ? { backgroundColor: "green", color: "white" } : null}
                                        onClick={
                                            () => navigate(menu.link)
                                        }
                                    >
                                        {menu.title}
                                    </li>
                                )) :
                                Menu.map((menu, index) => (
                                    <li
                                        key={index}
                                        style={window.location.pathname === menu.link ? { backgroundColor: "green", color: "white" } : null}
                                        onClick={
                                            () => navigate(menu.link)
                                        }
                                    >
                                        {menu.title}
                                    </li>
                                ))
                    }
                </ul>
                {/* TODO Check if user is logged in to remove buttons */}
                <div className="right__nav">
                    {
                        auth ?
                            <>
                                <button className='flex justify-center items-center px-4 py-2 gap-2 bg-gray-300 font-semibold rounded-[3px] hover:bg-green-700 hover:text-white' onClick={() => navigate("/")}> Dashboard <BsGearFill /></button>
                                <button className='flex justify-center items-center px-4 py-2 gap-2 bg-gray-300 font-semibold rounded-[3px] hover:bg-green-700 hover:text-white' onClick={() => logoutUser()}> Logout <FaLock /></button>
                            </>
                            :
                            <>
                                <button className='flex justify-center items-center px-4 py-2 gap-2 bg-gray-300 font-semibold rounded-[3px] hover:bg-green-700 hover:text-white' onClick={() => navigate("/register")}> Register <BsFileSpreadsheetFill /></button>
                                <button className='flex justify-center items-center px-4 py-2 gap-2  text-white hover:text-black bg-green-700 hover:bg-gray-300 font-semibold rounded-[3px]' onClick={() => setIsOpen(true)}> Login <FaLock /> </button>
                            </>

                    }
                </div>
            </div>
            <Modal open={isOpen} onClose={onClose} />
        </>
    )
}
