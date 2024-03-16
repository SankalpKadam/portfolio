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
            <div className='lg:text-base
                                text-sm
                                xl:w-1/2
                                md:w-2/3
                                sm:w-2/3
                                w-full
                                sm:px-0
                                px-2
                                text-center
                                text-white
                                mt-10'>
                I am currently pursuing a <b className='lg:text-lg'>
                    
                    Master's degree in Computer Science</b> at <b className='lg:text-lg'>The University of Texas at Arlington</b>. With courses such as Machine Learning, Neural Networks, Information Security and Big Data and Cloud Computing I have gained skills in multiple fields.
                <br />
                <br />
                I have 6+ months of internship experience and I am passionate about Software Development. I am proficient in multiple programming languages such as Python, JavaScript, Java and TypeScript. My passion for software development led to make multiple projects which in turn helped me to hone my skills.
                <br />
                <br />
                I will be graduating in Spring 2024 and want to pursue a career in Software Engineering. My goal is to become a Software Architect and play significant roles in designing databases, API and backend architectures which will help to make our lives easier.
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
