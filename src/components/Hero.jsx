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
            
            </div>
        </div>
    )
}
