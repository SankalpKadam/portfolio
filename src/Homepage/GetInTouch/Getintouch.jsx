import React from 'react'
import './Getintouch.css'
const Getintouch = () => {
    return (
        <div className='
                    flex
                    flex-col
                    justify-center
                    items-center
                    mt-[150px]'>
            <div className='text-transparent 
                lg:text-7xl 
                md:text-6xl 
                text-3xl 
                font-bold
                bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400'>
                GET IN TOUCH!
            </div>
            <div className='lg:text-base
                                text-sm
                                xl:w-1/4
                                md:w-2/3
                                sm:w-2/3
                                w-full
                                sm:px-0
                                px-2
                                text-center
                                text-white
                                mt-10'>
                Whether you have a question or just want to say hello, feel free to email me. I will always reply. Let me know if you have any job opportunities for me.
            </div>
            <div className='text-white
                        mt-10
                        px-8
                        py-4
                        border-2
                        border-gray-600
                        rounded-full
                        animate-bounce
                        hover:bg-gradient-to-r 
                        from-purple-500 
                        to-orange-400
                        transition-fill
                        duration-150
                        ease-in-out
                        cursor-pointer
                        bg-transparent
                        text-white
                        z-50
                        '
                        onClick={() => window.open("mailto:sankalpsunilkadam@gmail.com")}>
                Contact Me
            </div>
        </div>
    )
}

export default Getintouch
