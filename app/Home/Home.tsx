"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from 'next/image';
import hilmi from "../../public/hilmi.png"

export default function Home() {
    return (
        <>

            <div className="flex flex-col justify-center min-h-[75vh] max-w-[1109px] w-full px-4 select-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full"
                >

                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                            Hello, my name is{" "}
                            <span className="font-rocksalt text-blue-color inline-block mt-2 md:mt-0 ">
                                Hilmi
                            </span>
                        </h1>

                        <div className="text-xl md:text-2xl min-h-[40px] flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-3xl md:text-4xl">I'm a</span>
                            <span className="text-blue-color font-semibold text-3xl md:text-4xl">
                                <Typewriter
                                    options={{
                                        strings: ["Backend Developer", "UI/UX Designer", "Software Analyst"],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </span>
                        </div>

                        <div>
                            <p className="text-justify text-lg font-light leading-relaxed">
                                Iam an undergraduate Software Engineer student at Universitas Pendidikan Indonesia, passionate about building innovative solutions through technology. Currently, i’m deepening my skills on Machine Learning, exploring how intelligent system can solve real world problems.
                            </p>
                        </div>
                    </div>

                    <div className="translate-y-30">
                        <Image src={hilmi} alt="hilmi" />
                    </div>
                </motion.div>
            </div>

            
        </>

    );
}