import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { RiLinkedinBoxFill, RiLinksLine, RiTwitterFill } from 'react-icons/ri'

export const ResumeList = () => {
  return (
    <div className='flex flex-col border-2 border-gray-200 rounded-[3px] my-3 w-full'>
      <div className='flex flex-row justify-between items-center h-32 p-4 gap-5 hover:bg-gray-200 cursor-pointer'>
        <div className="h-[100px] w-[100px] bg-green-400">
          Logo
        </div>
        <div className="flex flex-col flex-1 gap-1 ">
          <h3>Senior Software Engineer</h3>
          <div className="">
            <ul className='flex flex-row gap-3 text-xs text-gray-500'>
              <li className='flex items-center gap-1'><FiMapPin /> Location</li>
              <li className='flex items-center gap-1'><FaRegMoneyBillAlt /> $100/hour</li>
              <li className='flex items-center gap-1'><RiLinksLine />Website</li>
              <li className='flex items-center gap-1'><RiLinkedinBoxFill />Linked In</li>
              <li className='flex items-center gap-1'><RiTwitterFill />Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center h-32 p-4 gap-5 hover:bg-gray-200 cursor-pointer'>
        <div className="h-[100px] w-[100px] bg-green-400">
          Logo
        </div>
        <div className="flex flex-col flex-1 gap-1 ">
          <h3>Senior Software Engineer</h3>
          <div className="">
            <ul className='flex flex-row gap-3 text-xs text-gray-500'>
              <li className='flex items-center gap-1'><FiMapPin /> Location</li>
              <li className='flex items-center gap-1'><FaRegMoneyBillAlt /> $100/hour</li>
              <li className='flex items-center gap-1'><RiLinksLine />Website</li>
              <li className='flex items-center gap-1'><RiLinkedinBoxFill />Linked In</li>
              <li className='flex items-center gap-1'><RiTwitterFill />Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center h-32 p-4 gap-5 hover:bg-gray-200 cursor-pointer'>
        <div className="h-[100px] w-[100px] bg-green-400">
          Logo
        </div>
        <div className="flex flex-col flex-1 gap-1 ">
          <h3>Senior Software Engineer</h3>
          <div className="">
            <ul className='flex flex-row gap-3 text-xs text-gray-500'>
              <li className='flex items-center gap-1'><FiMapPin /> Location</li>
              <li className='flex items-center gap-1'><FaRegMoneyBillAlt /> $100/hour</li>
              <li className='flex items-center gap-1'><RiLinksLine />Website</li>
              <li className='flex items-center gap-1'><RiLinkedinBoxFill />Linked In</li>
              <li className='flex items-center gap-1'><RiTwitterFill />Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center h-32 p-4 gap-5 hover:bg-gray-200 cursor-pointer'>
        <div className="h-[100px] w-[100px] bg-green-400">
          Logo
        </div>
        <div className="flex flex-col flex-1 gap-1 ">
          <h3>Senior Software Engineer</h3>
          <div className="">
            <ul className='flex flex-row gap-3 text-xs text-gray-500'>
              <li className='flex items-center gap-1'><FiMapPin /> Location</li>
              <li className='flex items-center gap-1'><FaRegMoneyBillAlt /> $100/hour</li>
              <li className='flex items-center gap-1'><RiLinksLine />Website</li>
              <li className='flex items-center gap-1'><RiLinkedinBoxFill />Linked In</li>
              <li className='flex items-center gap-1'><RiTwitterFill />Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
