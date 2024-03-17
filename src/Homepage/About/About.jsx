import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const About = () => {
    return (
        <div className='about flex flex-col justify-center items-center mt-[150px]'>
            <div className='
                text-transparent 
                lg:text-7xl 
                md:text-6xl 
                text-3xl 
                font-bold
                bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400'>
                ABOUT ME
            </div>
            <div className='md:text-lg
                                text-sm
                                xl:w-1/2
                                md:w-2/3
                                sm:w-2/3
                                w-full
                                sm:px-0
                                px-2
                                text-center
                                text-white
                                mt-10
                                z-40'>

                Currently pursuing a Master's degree in Computer Science at The University of Texas at Arlington, I have delved into a diverse array of courses including Machine Learning, Neural Networks, Information Security, Big Data, and Cloud Computing. These courses have equipped me with comprehensive skills spanning multiple fields.
                <br />
                <br />
                With over 6 months of internship experience, I discovered my fervor for Software Development. Proficient in languages such as Python, JavaScript, Java, and TypeScript, I've channeled this passion into creating numerous projects, refining my expertise along the way.
                <br />
                <br />
                Graduating in Spring 2024, I am poised to embark on a career in Software Engineering. My aspiration is to evolve into a Software Architect, contributing significantly to the design of databases, APIs, and backend architectures, ultimately simplifying our daily lives.
            </div>
            <div className='lg:text-lg
                                text-base
                                xl:w-1/2
                                md:w-2/3
                                sm:w-2/3
                                w-full
                                sm:px-0
                                px-2
                                text-right
                                text-transparent
                                mt-6
                                bg-clip-text 
                                bg-gradient-to-r 
                                from-purple-500 
                                to-orange-400
                                '>
                Know More
            </div>
        </div>
    )
}

export default About
