"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from '../components/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Intro from './Intro/Intro';
import Experience from './Experience/Experience';

export default function page() {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Intro onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className='flex min-h-screen max-w-full'>
        <Navbar />
        <main className='flex-1 ml-[300px] p-8'>
          <div className='mb-[324px]'>
            <Home />
          </div>
          <div className='flex flex-col gap-[140px]'>
            <About />
            <Experience />
          </div>
        </main>
      </div>
    </>
  );
}

