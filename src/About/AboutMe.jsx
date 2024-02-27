import React from 'react'
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div className='aboutme'>
            <p className='lg:text-7xl text-3xl md:text-6xl aboutme__title font-semibold'>ABOUT ME</p>
            <div className='aboutme__firstTile flex flex-row flex-wrap lg:flex-nowrap mt-3'>
                <div className='aboutme__basics lg:mr-4 my-2 lg:my-0 text-white lg:basis-3/4 basis-full lg:text-md xl:text-xl sm:text-sm'>
                    <div className="aboutme__inner backdrop-blur-sm flex flex-col  xl:px-16 justify-center w-full h-full lg text-gray-200">

                        <p className='mb-2'>
                            I am Sankalp.
                        </p>
                        <p className='mb-2'>

                            Currently pursuing a Master's in Computer Science degree at The University of Texas at Arlington.
                        </p>
                        <p className='mb-2'>
                            Ever since I was introduced to software development I have been working on uplifting my skills with the dream that one day I will be writing code which will shape people's lives.

                            During this phase I have explored various interests in the field of web, desktop and android application.
                        </p>
                    </div>
                </div>
                <div className='aboutme__basics text-white lg:basis-1/4 my-2 lg:my-0 basis-full'>
                    <div className='aboutme__inner backdrop-blur-sm w-full h-full flex flex-col items-center justify-center'>

                        <div className='aboutme__image'>
                            <img src={require('../linkedin.png')} alt="img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='aboutme__secondTile flex flex-row flex-wrap lg:flex-nowrap mt-1 lg:mt-3'>
                
                <div className='aboutme__basics lg:mr-4 text-white lg:basis-1/5 my-2 lg:my-0 basis-full'>
                    <div className='aboutme__inner backdrop-blur-sm w-full h-full flex flex-col items-center justify-center'>
                        <p className='font-semibold lg:text-xl xl:text-3xl xs:text-md'>6+ Months</p>
                        <p className='text-gray-300'>Experience</p>
                    </div>
                </div>
                <div className='aboutme__basics text-white lg:mr-4 lg:basis-1/5 my-2 basis-full lg:my-0'>
                    <div className='aboutme__inner backdrop-blur-sm w-full h-full flex flex-col items-center justify-center'>
                        <p className='font-semibold lg:text-md xl:text-3xl xs:text-md'>
                            Spring 2024</p>
                        <p className='text-gray-300'>Graduating</p>
                    </div>
                </div>
                <div className='aboutme__basics  my-2 text-white lg:basis-3/5 basis-full lg:text-md xl:text-xl sm:text-sm lg:my-0'>
                    <div className="aboutme__inner backdrop-blur-sm flex flex-col  xl:px-16 justify-center w-full h-full lg text-gray-200">
                        <p className='mb-2'>
                        I'm a Cybersecurity enthusiast with university courses and certifications to deepen my knowledge. Graduating in Spring 2024, I'm committed to becoming a Software Engineer to create impactful solutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className='aboutme__secondTile flex flex-row flex-wrap lg:flex-nowrap mt-1 lg:mt-3'>
                
                <div className='aboutme__basics text-white lg:mr-4 lg:basis-2/5 my-2 basis-full lg:my-0'>
                    <div className='aboutme__inner backdrop-blur-sm w-full h-full flex flex-col items-center justify-center'>
                        <p className='font-semibold lg:text-xl xl:text-xl xs:text-md'>
                            {/* <img src={require("../education.png")} alt="" className='basis-1/5 w-1/2 h-1/2 bg-white'/>  */}
                            Apart from coding</p>
                        <p className='text-gray-300 flex flex-row justify-center items-center gap-4'>

                        <img src={require("../football.png")} alt="" className='w-1/6 mt-3'/> 
                        <img src={require("../badminton.png")} alt="" className='w-1/6 mt-3'/> 
                        <img src={require("../gaming.png")} alt="" className='w-1/6 mt-3'/> 

                        </p>
                    </div>
                </div>
                <div className='aboutme__basics text-white lg:basis-3/5 my-2 basis-full lg:my-0'>
                    <div className='aboutme__inner backdrop-blur-sm w-full h-full flex flex-col items-center justify-center'>
                        <p className='font-semibold lg:text-xl xl:text-xl xs:text-md'>
                            {/* <img src={require("../education.png")} alt="" className='basis-1/5 w-1/2 h-1/2 bg-white'/>  */}
                            Something I believe in</p>
                        <p className='text-gray-300 mt-3'>"To get something new you have to do something new"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
