import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const SingleProject = ({ id }) => {
    const skills = ["Python", "JavaScript"]
    return (
        <div className='flex
                        flex-row
                        flex-wrap

                        w-full
                        mt-8
                        '>
            <div className='lg:w-[60%] bg-navbarColor w-full
            z-50'>
                <img src={require("./blogee.png")} alt="" className='
                rounded-md
                w-full
                h-[400px]
                object-cover
                grayscale
                hover:grayscale-0
                transition
                duration-150
                ease-in-out'/>
            </div>
            <div className='
                    flex
                    flex-col
                    justify-evenly
                    items-start
                    lg:w-[40%]
                    lg:mt-0
                mt-2
            '>
                <div className='gradient__text
                    font-bold
                    lg:text-3xl
                    text-sm
                    text-right
                    w-full
                    cursor-pointer
                    lg:mt-0
                mt-2'>
                    Project Title
                </div>
                <div className='text-right
                bg-imgBg
                backdrop-blur-sm
                z-50
                lg:-ml-[30%]
                text-white
                py-8
                px-4
                rounded-lg
                text-sm
                lg:mt-0
                mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe aspernatur ea, placeat quaerat fugit a! Libero labore perferendis dolores explicabo quae blanditiis a vel modi alias illo? Consequatur, culpa?
                </div>
                <div className='flex
                    flex-row
                    flex-wrap
                    justify-end
                    w-full
                    lg:mt-0
                mt-2'>
                    {skills.map((skill) => <div className='
                                    px-4
                                    py-2
                                    items-center
                                    rounded-full
                                    border-2
                                    border-gray-600
                                    text-white
                                    bg-transparent
                                    mx-2
                                    text-sm
                                    '>
                        {skill}
                    </div>)}
                </div>
                <div className='
                flex
                flex-row
                w-full
                justify-end
                text-white
                lg:mt-0
                mt-2'>
                    <div className='mx-2 cursor-pointer'>
                        <GitHubIcon style={{ fontSize: 40 }} />
                    </div>
                    <div className='mx-2'>
                        <OpenInNewIcon style={{ fontSize: 40 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject
