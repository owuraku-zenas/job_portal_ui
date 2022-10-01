import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { JobPageHero } from '../components/JobPageHero'
import { RiLinkedinBoxFill, RiLinksLine, RiTwitterFill } from 'react-icons/ri'
import { TbMap2 } from 'react-icons/tb'
import { BsPerson } from 'react-icons/bs'

export const JobPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <JobPageHero />
      <div className='flex flex-row py-10 items-start gap-8 w-[calc(100%-400px)]'>
        <div className='flex items-center flex-col gap-8 flex-1 text-gray-500'>
          <header className="flex items-center gap-6 w-full">
            <div className="h-[120px] w-[120px] bg-green-400">
              Logo
            </div>
            <div className="flex flex-col flex-1">
              <h3 className='text-2xl text-black'>Name of the company</h3>
              <ul className='flex gap-4'>
                <li className='flex items-center'><RiLinksLine />Website</li>
                <li className='flex items-center'><RiLinkedinBoxFill />Linked In</li>
                <li className='flex items-center '><RiTwitterFill />Twitter</li>
              </ul>
            </div>
          </header>
          <hr className='w-full' />
          <div className='flex flex-col gap-4'>
            <section>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, numquam ullam saepe rem distinctio odio incidunt vel iusto dolor adipisci voluptatem praesentium maxime dolore exercitationem omnis fugiat architecto dolorem tenetur.
              Dolorem eveniet vitae, voluptatem possimus et suscipit modi excepturi cupiditate obcaecati corporis asperiores laborum ratione, laboriosam quidem aspernatur quia eligendi delectus. Tempore provident eius incidunt consequuntur error culpa porro maiores.
            </section>
            <div className='flex flex-col gap-4'>
              <h3>The <span className='text-black'>Name of Job Role</span> will have responsibilities that include: </h3>
              <ul className='list-disc pl-5 flex flex-col gap-4 marker:text-green-500'>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis officia fuga id nobis, adipisci modi? Iure nisi quo labore culpa necessitatibus asperiores quos facilis voluptates soluta possimus, nesciunt, in qui.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi repellendus labore pariatur non nobis sequi laboriosam quod sed voluptatem quibusdam, fugiat atque iure, dignissimos nihil laudantium. Fugit unde ipsam dolore! </li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit </li>
              </ul>
            </div>
          </div>
          <div className="w-full  flex flex-col gap-4">
            <h3 className='text-black text-xl font-[500]'>Job Requirement</h3>
            <ul className='flex flex-col gap-4 list-disc pl-5 marker:text-green-500'>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia hic quos facere itaque, enim, nobis error earum libero numquam facilis, dolores tenetur totam excepturi. Necessitatibus omnis qui veritatis vitae voluptate!</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id dolor distinctio porro error fuga itaque ad accusantium sit. Quisquam labore sequi ipsum asperiores eaque error doloremque amet, odio illo.</li>
            </ul>
          </div>
        </div>
        <div className="overview w-3/7 ">
          <h3 className='py-4 text-lg font-semibold'>Overview</h3>
          <div className='border-2 p-8'>
            <ul className='flex flex-col gap-4'>
              <li className='flex gap-4'>
                <div className='text-green-500'>
                  <TbMap2 size={25} />
                </div>
                <div>
                  <h3>Location:</h3>
                  <p className='text-gray-500'>Actual Location</p>
                </div>
              </li>
              <li className='flex gap-4'>
                <div className='text-green-500'>
                  <BsPerson size={25} />
                </div>
                <div>
                  <h3>Job Title:</h3>
                  <p className='text-gray-500'>Senior Software Engineer</p>
                </div>
              </li>
              <li className='flex gap-4'>
                <div className='text-green-500'>
                  <BsPerson size={25} />
                </div>
                <div>
                  <h3>Hours:</h3>
                  <p className='text-gray-500'>40h/week</p>
                </div>
              </li>
              <li className='flex gap-4'>
                <div className='text-green-500'>
                  <BsPerson size={25} />
                </div>
                <div>
                  <h3>Rate:</h3>
                  <p className='text-gray-500'>$1.5k - $2k/month</p>
                </div>
              </li>
            </ul>
            <div className='border-2 border-green-500 flex justify-center items-center p-3 text-sm text-white mt-5 cursor-pointer bg-green-500 font-semibold rounded-[3px]'>
              <button>Apply for This Job</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
