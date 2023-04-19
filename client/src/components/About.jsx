import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#15F777]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold pl'>
                    <p>Hi, I'm Mike, welcome to my portfolio.  Please take a look at my work!</p>
                </div>
                <div>
                    <p>Hi, my name is Mike Lautensack, and I'm a self-taught full-stack web developer specializing in the MERN stack, as well as Java and Spring Boot. I am passionate about building web applications and enjoy working on challenging projects that allow me to expand my skill set. With a strong foundation in programming, problem-solving, and attention to detail, I strive to create efficient, user-friendly, and responsive websites and webapps.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About