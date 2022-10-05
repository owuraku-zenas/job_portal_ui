import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export const JobPageHero = ({ title, type }) => {
    return (
        <div className="bg-[url('/src/assets/hero2.jpg')] bg-cover bg-center h-[20vh] w-full">
            <div className="text-white flex flex-col items-center justify-center w-full h-full bg-opacity-70  bg-black gap-2">
                <div className='w-[calc(100%-400px)]'>
                    <div className="text-center flex flex-row items-center justify-between w-full gap-10">
                        <div className='flex-1 flex flex-row gap-4'>
                            <h1 className='text-[2rem] text-left'>{title}</h1>
                            <span className={`border-2 border-green-500 flex justify-center items-center p-[2px] text-sm text-green-600 bg-green-100 font-thin rounded-[3px]`}>
                                {type}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
