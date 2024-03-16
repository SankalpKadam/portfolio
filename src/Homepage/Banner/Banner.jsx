import React from 'react'
import './Banner.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Banner = () => {
    return (
        <div className='flex flex-row items-center justify-center z-[20]'>

            <div className='banner
                            w-full
                            flex
                            flex-col
                            text-white
                            text-3xl
                            justify-center
                            items-center
                            mt-[150px] 
                            '>
                <div className='banner__img 
                                rounded-full 
                                bg-imgBg 
                                z-50 
                                mb-10
                                md:mx-0
                                mx-3

                                '>
                    <img src={require("../../ProfileCropped.jpg")} alt=""
                        className='
                    xl:w-[300px]
                    xl:h-[300px]
                    lg:w-[400px] 
                    lg:h-[400px]
                    md:w-[600px]
                    sm:w-[500px]
                    object-contain 
                    rounded-full 
                    grayscale
                    hover:grayscale-0
                    transition
                    ease-in-out
                    duration-150
                    cursor-pointer
                    bg-img'/>
                </div>
                <div className='banner__name 
                                lg:text-7xl 
                                md:text-6xl 
                                text-3xl 
                                font-bold 
                                animate-bounce
                                bg-clip-text 
                                bg-gradient-to-r 
                                from-purple-500 
                                to-orange-400
                                text-transparent'>
                    Sankalp Kadam!
                </div>
                <div className='gradient__text 
                                lg:text-3xl 
                                md:text-2xl 
                                text-xl 
                                font-bold
                                my-3'>
                    Software Engineer
                </div>
                <div className="banner__para
                                lg:text-base
                                text-sm
                                xl:w-1/3
                                md:w-2/3
                                sm:w-2/3
                                w-full
                                text-center
                                text-gray-400">
                    Passionate Software Developer with proficiency in multiple programming languages and a focus on writing clean, readable and reusable code.
                </div>
                <div className="banner__para
                                lg:text-base
                                text-sm
                                lg:w-1/3
                                md:w-2/3
                                sm:w-2/3
                                w-full
                                text-center
                                text-gray-300
                                mt-2">
                    Arlington, TX, United States
                </div>
                <div className='
                banner__logos
                mt-[20px]
                flex
                flex-row
                lg:w-1/6
                justify-center
                items-center
                '>
                    {/* <div className='banner__img 
                                rounded-xl 
                                z-50 
                                mb-3
                                mx-4
                                border-2
                                border-navbarColor
                                px-4
                                py-2
                                text-base
                                bg-white
                                text-black
                                cursor-pointer
                                hover:text-white
                                hover:bg-black
                                transition
                                duration-300
                                ease-in-out
                                '>
                        Contact Me
                        
                    </div> */}
                    <div className='banner__img 
                                rounded-full 
                                // z-50 
                                mb-3
                                mx-4
                                '>
                        <LinkedInIcon style={{fontSize:50}} />
                    </div>
                    <div className='banner__img 
                                rounded-full 
                                z-50 
                                mb-3
                                mx-4
                                '>
                        <GitHubIcon style={{fontSize:45}} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner
