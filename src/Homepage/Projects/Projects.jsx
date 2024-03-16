import React from 'react'
import SingleProject from './SingleProject'

const Projects = () => {
    return (
        <div className='projects flex flex-col items-center justify-center mt-10'>
            <div className='text-transparent 
                lg:text-7xl 
                md:text-6xl 
                text-3xl 
                font-bold
                bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400'>
                SOME THINGS I'VE BUILT
            </div>
            <div className='flex
                    flex-row
                    flex-wrap
                    xl:w-1/2
                    md:w-2/3
                    sm:w-2/3
                    w-full
                    sm:px-0
                    px-2
                    mt-10
            '>
                <SingleProject />
                <SingleProject />
            </div>
        </div>
    )
}

export default Projects
