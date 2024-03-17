import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const SingleProject = ({ id, skills, shortText, title, github, live, img }) => {
    console.log(github, live);
    return (
        <div className='flex
                        flex-row
                        flex-wrap
                        w-full
                        mt-8
                        z-50
                        '>
            <div className='lg:w-[60%] w-full
            z-50'>
                <img src={`${window.location.origin}` + `${img}`} alt="" className='
                rounded-lg
                w-full
                h-[400px]
                object-fill
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
                    md:text-3xl
                    text-xl
                    lg:text-right
                    w-full
                    cursor-pointer
                    lg:mt-0
                    mt-2'>
                    {title}
                </div>
                <div className='lg:text-right
                                bg-imgBg
                                backdrop-blur-sm
                                z-50
                                lg:-ml-[30%]
                                text-white
                                py-8
                                px-4
                                rounded-lg
                                text-sm
                                md:text-base
                                lg:mt-0
                                mt-2'>
                    {shortText}
                </div>
                <div className='flex
                                flex-row
                                flex-wrap
                                lg:justify-end
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
                                    my-1
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
                    {github &&
                        <div className='mx-2 cursor-pointer'>
                            <a href={github} target='_blank'>

                                <GitHubIcon style={{ fontSize: 40 }} />
                            </a>
                        </div>
                    }
                    {live && <div className='mx-2'>
                        <a href={live} target='_blank'>

                            <OpenInNewIcon style={{ fontSize: 40 }} />
                        </a>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default SingleProject
