import { AiOutlineSearch } from 'react-icons/ai'


// TODO: Sliging images
export const Hero = () => {

    return (
        <div className="bg-[url('/src/assets/hero2.jpg')] bg-cover bg-center bg-fixed h-[75vh]">
            <div className="text-white flex flex-col items-center justify-center h-full bg-opacity-60 bg-black">
                <div className="text-center px-10">
                    <h1>You deserve a job that loves you back</h1>
                    <p className='text-lg font-bold'>Find a Job that fits your style and constraints.</p>
                </div>
                <div className="py-10 w-4/5 max-w-screen-lg flex flex-row justify-center items-center h-12">
                    <input className='w-3/5 text-base text-black px-5 py-1 border-0' type="text" />
                    <button className='bg-green-700 border-0 px-5 py-1'><AiOutlineSearch size={24}/> </button>
                </div>
            </div>
        </div>
    )
}
