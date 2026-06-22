import React from 'react';

import Navbar from '../components/Navbar';
import Home from './Home/Home';
import About from './About/About';

export default function page() {
  return (
    <>
      <div className='flex min-h-screen max-w-full'>
        <Navbar />
        <main className='flex-1 ml-[300px] p-8'>
          <div className='mb-[324px]'>
            <Home />
          </div>
          <div>
            <About />
          </div>
          
        </main>
      </div>
    </>
  )
}
