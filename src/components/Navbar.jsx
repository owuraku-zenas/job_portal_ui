import React from 'react'
import '../styles/Navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <h3 className="logo">
                Logo
            </h3>
            
            <ul className="nav__links">
                <li>Find Jobs</li>
                <li>Find People</li>
                <li>Post Job</li>
                <li>Create Resume</li>
            </ul>
            <div className="right__nav">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}
