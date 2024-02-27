import React from 'react'
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div className='aboutme'>
            <p className='text-4xl aboutme__title font-semibold'>ABOUT ME</p>
            <div className='aboutme__firstTile flex flex-row mt-3'>
                <div className='aboutme__basics text-white mr-4 basis-3/4'>
                    <div className="aboutme__inner backdrop-blur-sm flex flex-col lg:px-16 justify-center w-full h-full">

                        <p className='mb-2'>
                            I am Sankalp.
                        </p>
                        <p className='mb-2'>

                            I am currently pursuing a Master's in Computer Science degree at The University of Texas at Arlington.


                        </p>
                        <p className='mb-2'>
                            Ever since I was introduced to software development I have been working on uplifting my skills with the dream that one day I will be writing code which will shape people's lives.

                            During this phase I have explored various interests in the field of web, desktop and android application.
                        </p>
                    </div>
                </div>
                <div className='aboutme__basics text-white basis-1/4'>
                    <div className='aboutme__inner backdrop-blur-sm w-full h-full flex flex-col items-center justify-center'>

                        <div className='aboutme__image'>
                            <img src={require('../linkedin.png')} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
