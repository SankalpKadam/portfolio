import React from 'react'
import StarsCanvas from '../StarsBackground'
import Navbar from '../Navbar/Navbar'
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div className="App h-full bg-[url('./LooperGroup2.png')] bg-no-repeat">
            <StarsCanvas />
            <Navbar />
            <div className='flex flex-col justify-center items-center'>
                <div className='text-transparent 
                lg:text-7xl 
                md:text-6xl 
                text-3xl 
                font-bold
                bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400
                mt-[150px]
                text-center
                z-50'>
                    ABOUT ME
                    {/* <img src={require('../ProfileWithBg.jpg')} alt="" className='w-[400px] h-full object-cover m-auto rounded-lg bg-[#111] mt-4'/> */}
                </div>
                <div className='flex
                flex-row
                flex-wrap
                h-full
                justify-center
                items-center
                md:w-[75%]
                sm:w-2/3
                w-full
                mt-10'>
                    <img src={require("../ProfileWithBg.jpg")} alt="" className='z-40 sm:px-0 px-2 lg:w-[200px]' />
                    <div className='flex flex-col lg:w-2/3 lg:ml-4'>
                        <div className='text-lg lg:text-xl text-white font-bold w-full text-center'>
                            WHO I AM
                        </div>
                        <div className='md:text-base
                                text-sm
                                w-full
                                sm:px-0
                                px-2
                                text-justify
                                text-white
                                md:mt-0
                                mt-2
                                z-40'>
                            I am currently pursuing a <b className='bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400
                text-transparent'>Master's in Computer Science</b> degree at <b className='bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400
                text-transparent'>The University of Texas at Arlington</b>. Ever since I was introduced to software development I have been working on uplifting my skills with the dream that one day I will be writing code which will shape people's lives. During this phase I have explored various interests in the field of web, desktop and android application. <br /><br />Apart from coding, I am also a CyberSecurity enthusiast. I have taken some steps such as university level courses and certifications to enhance my knowledge in this domain. I am currently in my final semester and will <b className='bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400
                text-transparent'>graduate in Spring 2024</b> and I have decided that I will be a Software Engineer and realize my dream of writing meaningful code that actually impacts people's lives.
                        </div>
                    </div>
                </div>
                <div className='text-transparent 
                lg:text-7xl 
                md:text-6xl 
                text-3xl 
                font-bold
                bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400
                mt-10
                text-center
                z-50'>
                    THINGS I KNOW
                    {/* <img src={require('../ProfileWithBg.jpg')} alt="" className='w-[400px] h-full object-cover m-auto rounded-lg bg-[#111] mt-4'/> */}
                </div>
                <div className='thingsIknow
                                xl:w-1/2
                                md:w-2/3
                                sm:w-2/3
                                w-full
                                sm:px-0
                                px-2
                                flex
                                flex-row
                                flex-wrap'>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="80" height="80" /> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="80" height="80" />  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80" /> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="80" height="80" /> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="80" height="80" /> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80" height="80" /> <img src="https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" alt="hadoop" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80" /> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="80" height="80" /> <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="80" height="80" /> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="80" height="80" /> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="80" height="80" /> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="80" height="80" />
                </div>
                <div className='text-transparent 
                lg:text-7xl 
                md:text-6xl 
                text-3xl 
                font-bold
                bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400
                mt-10
                text-center
                z-50'>
                    WHEN I AM NOT CODING
                    {/* <img src={require('../ProfileWithBg.jpg')} alt="" className='w-[400px] h-full object-cover m-auto rounded-lg bg-[#111] mt-4'/> */}
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
                    I am a sports person and I love to play soccer. I have recently explored and developed a liking for badminton as well. Snooker, carrom and chess are some indoor games that I like.
                </div>
                <div className='text-transparent 
                lg:text-7xl 
                md:text-6xl 
                text-3xl 
                font-bold
                bg-clip-text 
                bg-gradient-to-r 
                from-purple-500 
                to-orange-400
                mt-10
                text-center
                z-50'>
                    WHAT I BELIEVE
                    {/* <img src={require('../ProfileWithBg.jpg')} alt="" className='w-[400px] h-full object-cover m-auto rounded-lg bg-[#111] mt-4'/> */}
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
                    Overall, in my life I follow a principle - "To get something new, you have to do something new". I believe in exploring and gathering my own understanding which I believe is an important quality for a Software Engineer.
                </div>
            </div>
        </div>
    )
}

export default AboutMe
