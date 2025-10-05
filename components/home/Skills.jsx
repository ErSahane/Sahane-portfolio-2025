"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaGithub,
	FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiDjango, SiPython } from "react-icons/si";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	const skills = [
		{ name: "HTML", icon: <FaHtml5 className="w-6 h-6 text-orange-600" /> },
		{ name: "CSS", icon: <FaCss3Alt className="w-6 h-6 text-blue-600" /> },
		{
			name: "JavaScript",
			icon: <FaJs className="w-6 h-6 text-yellow-500" />,
		},
		{
			name: "Python",
			icon: <SiPython className="w-6 h-6 text-yellow-500" />,
		},
		{
			name: "Django",
			icon: <SiDjango className="w-6 h-6 text-yellow-500" />,
		},
		{ name: "React", icon: <FaReact className="w-6 h-6 text-cyan-400" /> },
		{
			name: "Next.js",
			icon: <SiNextdotjs className="w-6 h-6 dark:text-white" />,
		},
		{
			name: "Node.js",
			icon: <FaNodeJs className="w-6 h-6 text-green-600" />,
		},
		{
			name: "MongoDB",
			icon: <SiMongodb className="w-6 h-6 text-green-700" />,
		},
		{
			name: "Tailwind CSS",
			icon: <SiTailwindcss className="w-6 h-6 text-sky-500" />,
		},
		{ name: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
		{
			name: "Database",
			icon: <FaDatabase className="w-6 h-6 text-purple-500" />,
		},
	];

	return (
		<section
			className="py-12 px-6 md:px-10 max-w-6xl mx-auto text-center"
			ref={ref}
		>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				className="text-3xl font-bold mb-8"
			>
				My Skills
			</motion.h2>

			<motion.div
				className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
			>
				{skills.map((skill, index) => (
					<motion.div key={index} variants={cardVariants}>
						<Card className="flex items-center justify-center flex-col py-6 hover:shadow-md transition">
							<CardContent className="flex flex-col items-center gap-2">
								{skill.icon}
								<span className="text-sm font-medium">
									{skill.name}
								</span>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
