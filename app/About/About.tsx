"use client";
import { motion } from "framer-motion";

const educationData = [
    {
        year: "2024 – Present",
        institution: "Universitas Pendidikan Indonesia",
        major: "Software Engineer",
    },
    {
        year: "2021 – 2024",
        institution: "SMA Negeri 7 Bandung",
        major: "Natural Science",
    },
    {
        year: "2018 – 2021",
        institution: "SMP Assalaam Bandung",
        major: "Foundational Studies",
    },
    {
        year: "2012 – 2018",
        institution: "SD Bina Talenta Bandung",
        major: "Primary Education",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function About() {
    return (
        <div className="w-full  px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center gap-4 w-full mb-12">
                    <h1 className="text-3xl font-light whitespace-nowrap text-white-color">
                        Educational Background
                    </h1>
                    <div className="flex-1 h-[1px] bg-white-color opacity-20"></div>
                </div>
            </motion.div>


            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col ml-3"
            >
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative pl-8 pb-10 last:pb-0"
                    >
                        {index !== educationData.length - 1 && (
                            <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-white-color opacity-25"></div>
                        )}
                        <div className="absolute -left-[5.5px] top-2 w-[12px] h-[12px] bg-white-color rounded-full border-2 border-background-color"></div>

                        <div className="flex flex-col gap-1 select-none">
                            <span className="text-sm text-white-color opacity-40 font-light">
                                {item.year}
                            </span>
                            <h3 className="text-xl font-normal text-white-color">
                                {item.institution}
                            </h3>
                            <span className="text-blue-color text-base font-normal">
                                {item.major}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
