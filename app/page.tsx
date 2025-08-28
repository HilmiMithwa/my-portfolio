"use client";

import React from 'react'
import Typewriter from 'typewriter-effect'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className='flex justify-between items-center bg-black m-20 text-[30px] font-sans-serif'>
        <h1 className='sf-pro'>Hilmi Mithwa</h1>
        <div>
          <ul className='flex gap-[55px]'>
            <li><a>About me</a></li>
            <li><a>Skills</a></li>
            <li><a>Projects</a></li>
            <li><a>Social Media</a></li>
          </ul>
        </div>
      </nav>

      {/* About me Section */}
      <motion.div
        className='border mr-300 border-black m-20'
        initial={{ opacity: 0, y: 50 }}        
        whileInView={{ opacity: 1, y: 0 }}     
        transition={{ duration: 1 }}
        viewport={{ once: true }}              
      >
        <h1 className='text-[75px] font-semibold'>
          Hey There,<br/> I'm Hilmi
        </h1>
        <h2 className='text-[35px]'>
          <Typewriter 
            options={{
              strings: [
                'UI/UX Designer',
                'Front End Developer',
                'Currently deepening Machine Learning'
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className='text-[20px] mt-5 text-justify'>
          I am an undergraduate Software Engineer student at Universitas Pendidikan Indonesia, passionate about building innovative solutions through technology. Currently, I’m deepening my skills on Machine Learning, exploring how intelligent system can solve real world problems.
        </p>
        
        <motion.button
          className='mt-10 border-blueGans border-2 p-5 rounded-[10px]'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href='https://www.linkedin.com/in/hilmi-mithwa-ramadhan-4a1b46275/' className='text-[30px] font-light'>
            My LinkedIn
          </a>
        </motion.button>
      </motion.div>

      {/* Profile Picture */}
      <motion.div
        className='flex justify-end mr-25 mt-[-650px]'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className='border-[3px] w-[436px] h-[543px] border-oldBlueGans bg-oldBlueGans flex items-center justify-center rounded-[25px]'>
          <CardContainer>
            <CardItem>
              <CardBody className="flex flex-col items-center justify-center">
                <img src='/images/foto_hilmi.png' alt="Profile Picture" className='w-[327px] h-[384px]  object-cover rounded-[25px]'/>
                <img src='/images/name.png' className='w-[219px] h-[30px] mt-5 border-youngBlueGans bg-youngBlueGans rounded-[25px] object-contain '  />
              </CardBody>
            </CardItem>
          </CardContainer>
        </div>
      </motion.div>

      {/* Skill Section */}
      <div className='flex items-center mt-35 mr-25 flex-col'>
        <motion.h1
          className='text-[75px] m-20 self-end'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h1>

        <div id='skills-container' className='flex gap-10 mt-10 flex-wrap justify-center'>
          {[
            "/images/next_logo.png",
            "/images/react_logo.png",
            "/images/py_logo.png",
            "/images/js_logo.png",
            "/images/tailwind_logo.png",
            "/images/figma_logo.png",
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              className='border-1 border-white rounded-[25px] p-20'
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }} 
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id='projects-container'>

      </div>


    </div>
  )
}

export default Page;
