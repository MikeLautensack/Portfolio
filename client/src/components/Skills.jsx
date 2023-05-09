import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Express from '../assets/expressjs.png'
import Mongo from '../assets/mongo.png'
import Java from '../assets/java.png'
import SpringBoot from '../assets/springboot.png'
import Postman from '../assets/postman.png'
import Docker from '../assets/docker.png'
import Github from '../assets/github.png'
import Figma from '../assets/figma.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#15F777] py-4'>Skills</p>
                <p className='py-4 mt-1.5'>These are the technologies I am competent in.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={HTML} alt='html icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={CSS} alt='html icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={JavaScript} alt='html icon' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={Mongo} alt='html icon' />
                    <p className='mern'>M</p><p className='my-4'>MONGO</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={Express} alt='html icon' />
                    <p className='mern'>E</p><p className='my-4'>EXPRESS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={ReactImg} alt='html icon' />
                    <p className='mern'>R</p><p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={Node} alt='html icon' />
                    <p className='mern'>N</p><p className='my-4'>NODE</p>
                </div>                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={Java} alt='html icon' />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={SpringBoot} alt='html icon' />
                    <p className='my-4'>Spring Boot</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={Postman} alt='html icon' />
                    <p className='my-4'>Postman</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={Docker} alt='html icon' />
                    <p className='my-4'>Docker</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={Github} alt='html icon' />
                    <p className='my-4'>Git & Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 skill-card'>
                    <img className='w-20 mx-auto mt-4' src={Figma} alt='html icon' />
                    <p className='my-4'>Figma</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills 