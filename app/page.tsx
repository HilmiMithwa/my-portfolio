import React from 'react';
import Navbar from '../components/Navbar';
import Home from './Home/Home';

export default function page() {
  return (
    <>
      <div className='flex min-h-screen max-w-full'>
        <Navbar />
        <main className='flex-1 ml-[300px] p-8'>
          <Home />
        </main>
      </div>
    </>
  )
}
