import React from 'react'
import EstimateGeneratorIMG from '../assets/localhost_3000_dashboard.png'
import ChessAPI from '../assets/chess.png'
import ProjectCard from './ProjectCard'

const Work = () => {

  const projects = [
    {
        img: `url(${EstimateGeneratorIMG})`,
        name: 'Estimate Generator',
        description: 'test',
        liveLink: 'http://estimategeneratorapp.com/',
        githubLink: 'https://github.com/MikeLautensack/Estimate-Generator'
    }
  ]

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#15F777]'>Work</p>
                <p className='py-6'>Check out my projects!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work