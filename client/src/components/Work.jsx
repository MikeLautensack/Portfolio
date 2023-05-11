import React from 'react'
import EstimateGeneratorIMG from '../assets/localhost_3000_dashboard.png'
import ChessAPI from '../assets/chess.png'
import ProjectCard from './ProjectCard'

const Work = () => {

  const projects = [
    {
        img: `url(${EstimateGeneratorIMG})`,
        name: 'Estimate Generator',
        description: 'A webapp for contractors to create and send estimates',
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

            <div className='grid gap-4 project-cards'>
                <div className='project-card'>
                  <div className='img eg'>
                    
                  </div>
                  <div className='project-content'>
                    <h1>Estimate Generator</h1>
                    <p>Estimate Generator is a web app for contractors and smal business's to create, send and manage estimates.</p>
                    <div className='tech'>
                      <div className='skill react'>

                      </div>
                      <div className='skill node'>

                      </div>
                      <div className='skill express'>

                      </div>
                      <div className='skill mongo'>

                      </div>
                      <div className='skill docker'>

                      </div>
                    </div>
                    <div className='project-content-buttons'>
                      <button className='live-button'>Live Link</button>
                      <button className='git-hub'>Git-Hub</button>
                    </div>
                  </div>
                </div>
                <div className='project-card'>
                  <div className='img chess-api'>

                  </div>
                  <div className='project-content'>
                    <h1>Chess API</h1>
                    <p>Chess API generates legal moves for each piece in any position with simple JSON Object Input and Output</p>
                    <div className='tech'>
                      <div className='skill react'>

                      </div>
                      <div className='skill spring-boot'>

                      </div>
                      <div className='skill java'>

                      </div>
                      <div className='skill docker'>

                      </div>
                    </div>
                    <div className='project-content-buttons'>
                      <button className='live-button'>Live Link</button>
                      <button className='git-hub'>Git-Hub</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work