import React from 'react'

const Experience = () => {
    const workdone = [`Enhanced the efficiency of the backend API by integrating PHP Laravel and MySQL and performed comprehensive testing comprising of 200 requests for validation of the API’s functionality using Postman.`,
        `Collaborated with senior engineers to enhance the company’s website, resulting in a 15% increase in user engagement through the development of a user-friendly and visually appealing user interface using Nuxt.Js.`,
        `Designed and implemented a robust REST API capable of efficiently handling 100 concurrent requests.`,
        `Developed an MVC model in Laravel to optimize code structure which helped to simplify the testing process by 10%.`,
        `Utilized AWS Lambda and harnessed its Lex chatbot to develop a robust voice communication system for a robotics project, achieving an impressive 95% accuracy in recognizing spoken language and generating responses in three different languages.`,
        `Contributed to develop a path planning algorithm for a robotics project with over 92% accuracy and used Python to gather data from multiple sensors and generate a map from the current location to the desired destination`,
        `Contributed to developing a live emotion and hand movement detection system and designed robot responses accordingly.`,
        `Developed a simple image search functionality for a client product with 97% accuracy and used Django server accompanied with a Convolutional Neural Network to process the given image and generate recommendations based on the analysis.`,
        `Collaborated with senior engineers to work with Docker containerization and followed agile methodology using ClickUp to manage all tasks and communications.`
        
    ]
    const usedSkills = ["Python", "JavaScript", "AWS","MySQL","PHP","Laravel","Docker"]
    return (
        <div className='
            experience 
            flex 
            flex-col 
            items-center
            mt-[150px]
            '>
            <div className='text-transparent 
                lg:text-7xl 
                md:text-6xl 
                text-3xl 
                font-bold
                bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400'>
                Work Experience
            </div>
            <div className='
                flex
                flex-row
                justify-between
                xl:w-1/2
                md:w-2/3
                sm:w-2/3
                w-full
                sm:px-0
                px-2
                mt-10
                z-50
            '>
                <div className='flex
                flex-col
                flex-1
                z-50
                    '>
                    <p className='
                    gradient__text
                    font-bold
                    lg:text-xl
                    text-sm
                    '>

                        PNT Robotics and Automation Solutions LLP
                    </p>
                    <p className='
                    lg:text-base
                    text-gray-300
                    mt-1
                    text-sm

                    '>
                        Software Engineering Intern
                    </p>
                </div>
                <div className='flex
                flex-col
                items-end
                flex-1'>
                    <p className='
                    md:text-base
                    text-sm
                    text-gray-300
                    '>

                        Mumbai, India
                    </p>
                    <p className='
                    md:text-base
                    text-sm
                    text-gray-300
                    mt-1
                    '>
                        December 2020 - May 2021
                    </p>
                </div>
            </div>
            <div className='
            xl:w-1/2
            md:w-2/3
            sm:w-2/3
            w-full
            sm:px-0
            px-2
            mt-5
            text-justify
            text-white
            text-xs
            md:text-lg
            z-50
            '>
                <ul className='
                list-disc'>
                    {
                        workdone.map((work)=><li className='md:mt-0.5 mt-1'>{work}</li>)
                    }
                </ul>
            </div>
            <div className='
            flex
            flex-row
            flex-wrap
            justify-start
            xl:w-1/2
            md:w-2/3
            sm:w-2/3
            w-full
            sm:px-0
            px-2
            mt-5
            '>
                {usedSkills.map((skill)=><div className='
                px-4
                py-2
                items-center
                rounded-full
                border-2
                border-gray-500
                text-white
                bg-transparent
                m-2
                md:text-lg
                text-sm
                '>
                    {skill}
                </div>)}
            </div>
        </div>
    )
}

export default Experience
