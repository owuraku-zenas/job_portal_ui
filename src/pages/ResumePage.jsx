import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { RiLinkedinBoxFill, RiLinksLine, RiTwitterFill } from 'react-icons/ri'

export const ResumePage = () => {
    return (
        <div className='flex flex-col items-center text-gray-500'>
            <div className="bg-[#f7f7f7] bg-cover bg-center h-[35vh] w-full">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className='w-[calc(100%-400px)] flex gap-4'>
                        <div className="h-[120px] w-[120px] bg-green-400">
                            Logo
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="">
                                <h1 className='text-2xl text-green-500 font-semibold'>Zenas Awuku</h1>
                                <p>Software Engineer</p>
                            </div>
                            <div className="contact_info_rate">
                                <ul className='flex gap-4'>
                                    <li className='flex items-center gap-1'><FiMapPin /> Location</li>
                                    <li className='flex items-center gap-1'><FaRegMoneyBillAlt /> $100/hour</li>
                                    <li className='flex items-center gap-1'><RiLinksLine />Website</li>
                                    <li className='flex items-center gap-1'><RiLinkedinBoxFill />Linked In</li>
                                    <li className='flex items-center gap-1'><RiTwitterFill />Twitter</li>
                                </ul>
                            </div>
                            <div className='keywords '>
                                <ul className='flex gap-4 text-white text-sm'>
                                    <li className='bg-gray-400 p-1 rounded-[3px]'>JavaScript</li>
                                    <li className='bg-gray-400 p-1 rounded-[3px]'>PHP</li>
                                    <li className='bg-gray-400 p-1 rounded-[3px]'>React</li>
                                    <li className='bg-gray-400 p-1 rounded-[3px]'>Laravel</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-center gap-2">
                            <button className='items-center p-3 text-white cursor-pointer bg-green-500 flex gap-2 font-semibold rounded-[3px] hover:bg-gray-800 hover:text-white'> <BsEnvelopeFill /> Send Message</button>
                            <button className="text-white bg-gray-800 font-semibold border-0 px-5 py-3 flex items-center gap-2 rounded-[3px] hover:bg-green-500 hover:text-white"> <AiFillStar />Bookmark This Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start gap-4 w-[calc(100%-400px)]'>
                <div className="py-12  flex flex-row gap-10">
                    <section className='flex flex-col gap-4'>
                        <h3 className='text-black text-lg'>About Me</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex laborum et nisi modi animi atque soluta nihil cumque magnam aut, aperiam in, eveniet aliquam id explicabo consectetur magni maiores.
                        </p>
                    </section>
                    <section className='flex flex-col'>
                        <h3 className='text-black text-lg border-b-2 border-b-gray-300'>Education</h3>
                        <ul className="job_experiences list-disc border-l-2 border-l-gray-300 flex flex-col gap-4 ml-8">
                            <li className="job_expirence gap-3 ml-[13px] ">
                                <span className=''>Date</span>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl text-black font-semibold'>Certification</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt rerum magni impedit odit animi dicta, explicabo id qui necessitatibus! Ipsam, illo inventore eum minus corporis repellat repellendus nulla ratione.</p>
                                </div>
                            </li>
                            <li className="job_expirence gap-3 ml-[13px] ">
                                <span className=''>Date</span>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl text-black font-semibold'>Certification</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt rerum magni impedit odit animi dicta, explicabo id qui necessitatibus! Ipsam, illo inventore eum minus corporis repellat repellendus nulla ratione.</p>
                                </div>
                            </li>
                            <li className="job_expirence gap-3 ml-[13px] ">
                                <span className=''>Date</span>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl text-black font-semibold'>Certification</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt rerum magni impedit odit animi dicta, explicabo id qui necessitatibus! Ipsam, illo inventore eum minus corporis repellat repellendus nulla ratione.</p>
                                </div>
                            </li>
                            <li className="job_expirence gap-3 ml-[13px] ">
                                <span className=''>Date</span>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl text-black font-semibold'>Certification</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt rerum magni impedit odit animi dicta, explicabo id qui necessitatibus! Ipsam, illo inventore eum minus corporis repellat repellendus nulla ratione.</p>
                                </div>
                            </li>
                            <li className="job_expirence gap-3 ml-[13px] ">
                                <span className=''>Date</span>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl text-black font-semibold'>Certification</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt rerum magni impedit odit animi dicta, explicabo id qui necessitatibus! Ipsam, illo inventore eum minus corporis repellat repellendus nulla ratione.</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
                <section className=''>
                    <h3 className='text-black text-lg py-6'>Job Experiences</h3>
                    <ul className="job_experiences list-disc border-l-2 border-l-gray-300 flex flex-col gap-4">
                        <li className="job_expirence gap-3 ml-[13px] ">
                            <span className=''>Date</span>
                            <div className="flex flex-col gap-3">
                                <div className="title">
                                    <h3 className='text-xl text-black font-semibold' >Instiution Name</h3>
                                    <p className='text-lg'>Title</p>
                                </div>
                                <ul className='flex flex-col gap-4 list-disc pl-5 marker:text-green-500'>
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, fugiat? Dolorem esse eius hic! Quae a eaque quibusdam molestias tempora ducimus. Voluptate aperiam deserunt modi unde quaerat et doloremque est.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio necessitatibus et corporis repellendus eos fugit libero similique expedita quis explicabo neque, mollitia pariatur, possimus, labore repudiandae enim magni laborum consequuntur!</li>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptate eos quisquam perferendis. Qui minima, aperiam hic magni consectetur voluptates ab eius non laborum aliquam cum. Consectetur quisquam numquam ipsam!</li>
                                </ul>
                            </div>
                        </li>
                        <li className="job_expirence gap-3 py-6 ml-[13px] ">
                            <span className=''>Date</span>
                            <div className="flex flex-col gap-3">
                                <div className="title">
                                    <h3 className='text-xl text-black font-semibold' >Instiution Name</h3>
                                    <p className='text-lg'>Title</p>
                                </div>
                                <ul className='flex flex-col gap-4 list-disc pl-5 marker:text-green-500'>
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, fugiat? Dolorem esse eius hic! Quae a eaque quibusdam molestias tempora ducimus. Voluptate aperiam deserunt modi unde quaerat et doloremque est.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio necessitatibus et corporis repellendus eos fugit libero similique expedita quis explicabo neque, mollitia pariatur, possimus, labore repudiandae enim magni laborum consequuntur!</li>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptate eos quisquam perferendis. Qui minima, aperiam hic magni consectetur voluptates ab eius non laborum aliquam cum. Consectetur quisquam numquam ipsam!</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className=''>
                    <h3 className='text-black text-lg py-6'>Personal Projects</h3>
                    <div className="job_experiences border-2 border-gray-200 flex flex-col">
                        <div className="flex flex-col gap-3 p-4 border-b-2 border-gray-200">
                            <h3 className='text-xl text-black font-semibold' >Project Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis adipisci consequatur molestias tempore eius libero expedita nemo. Aliquam repudiandae autem iste ipsam, repellendus quos eius voluptas enim ut temporibus?</p>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <button className='items-center p-3 text-white cursor-pointer bg-green-500 flex gap-2 font-semibold rounded-[3px] hover:bg-gray-800 hover:text-white'>Source Code</button>
                                <button className="text-white bg-gray-800 font-semibold border-0 px-5 py-3 flex items-center gap-2 rounded-[3px] hover:bg-green-500 hover:text-white">Project Link</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-4 border-b-2 border-gray-200">
                            <h3 className='text-xl text-black font-semibold' >Project Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis adipisci consequatur molestias tempore eius libero expedita nemo. Aliquam repudiandae autem iste ipsam, repellendus quos eius voluptas enim ut temporibus?</p>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <button className='items-center p-3 text-white cursor-pointer bg-green-500 flex gap-2 font-semibold rounded-[3px] hover:bg-gray-800 hover:text-white'>Source Code</button>
                                <button className="text-white bg-gray-800 font-semibold border-0 px-5 py-3 flex items-center gap-2 rounded-[3px] hover:bg-green-500 hover:text-white">Project Link</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-4 border-b-2 border-gray-200">
                            <h3 className='text-xl text-black font-semibold' >Project Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis adipisci consequatur molestias tempore eius libero expedita nemo. Aliquam repudiandae autem iste ipsam, repellendus quos eius voluptas enim ut temporibus?</p>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <button className='items-center p-3 text-white cursor-pointer bg-green-500 flex gap-2 font-semibold rounded-[3px] hover:bg-gray-800 hover:text-white'>Source Code</button>
                                <button className="text-white bg-gray-800 font-semibold border-0 px-5 py-3 flex items-center gap-2 rounded-[3px] hover:bg-green-500 hover:text-white">Project Link</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
