"use client";

import { motion } from "motion/react";

export default function Experience() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center gap-4 w-full mb-12">
                    <h1 className="text-3xl font-light whitespace-nowrap text-white-color">
                        Experience
                    </h1>
                    <div className="flex-1 h-[1px] bg-white-color opacity-20"></div>
                </div>
            </motion.div>
        </div>
    )
}