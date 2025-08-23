"use client";
import React from 'react'
import Typewriter from 'typewriter-effect'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


const page = () => {
  return (
    <div>
      {/*Navbar*/}
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

      {/*About me Section*/}

      <div className='border mr-300 border-black m-20'>
        <h1 className='text-[75px] font-semibold'>
          Hey There,<br/> I'm Hilmi
        </h1>
        <h2 className='text-[35px]'>
          <Typewriter 
            options={{
              strings: ['UI/UX Desginer', 'Front End Developer', 'Currenly deepening Machine learning'],
              autoStart: true,
              loop: true,
            }}
        />
        </h2>
        <p className='text-[20px] mt-5 text-justify'>
          Iam an undergraduate Software Engineer student at Universitas Pendidikan Indonesia, passionate about building innovative solutions through technology. Currently, i’m deepening my skills on Machine Learning, exploring how intelligent system can solve real world problems.
        </p>
        
        <button className='mt-10 border-blueGans border-2 p-5 rounded-[10px]'>
          <a href='https://www.linkedin.com/in/hilmi-mithwa-ramadhan-4a1b46275/' className='text-[30px] font-light'>My LinkedIn</a>
        </button>
      </div>

      {/* Profile Picture */}

      <div>
        <div>
            

        </div>
      </div>
      
    </div>
  )
}

export default page