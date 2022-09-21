import React from 'react'
import '../styles/Services.css'
import { AiOutlineSearch } from "react-icons/ai";
import { BsBriefcase, BsFileEarmarkSpreadsheet, BsPeople } from "react-icons/bs";


export const Services = () => {
    return (
        <div className='services'>
            <div className="services__content">
                <div className="icon">
                    <AiOutlineSearch size={40} />
                </div>
                <h2>Find Job</h2>
            </div>
            <div className="services__content">
                <div className="icon">
                    <BsPeople size={40} />
                </div>
                <h2>Find Crew</h2>
            </div>
            <div className="services__content">
                <div className="icon">
                    <BsFileEarmarkSpreadsheet size={40} />
                </div>
                <h2>Create Resume</h2>
            </div>
            <div className="services__content">
                <div className="icon">
                    <BsBriefcase size={40} />
                </div>
                <h2>Apply To Jobs</h2>
            </div>
        </div>
    )
}
