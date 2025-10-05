"use client";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export default function AboutIntro() {
	return (
		<motion.section
			className="flex flex-col md:flex-row items-center gap-8"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={fadeUp}
		>
			<motion.img
				src="https://res.cloudinary.com/dxbgo7zzv/image/upload/v1759659538/WhatsApp_Image_2025-10-05_at_15.46.46_7f8764fa_il152j.jpg"
				alt="Kairo Sen"
				className="w-40 h-40 rounded-full object-cover shadow-lg"
				variants={fadeUp}
			/>
			<motion.div variants={fadeUp}>
				<h1 className="text-3xl font-bold mb-2">Hi, I'm Sahane Alam 👋</h1>
				<p className="text-gray-600 dark:text-gray-300 max-w-xl mb-4">
					I'm a full-stack web developer passionate about building
					scalable, responsive, and intuitive web applications. I
					specialize in the Python, Django, MERN stack, React, Next.js, and Tailwind
					CSS.
				</p>
				<div className="flex gap-4 text-2xl text-primary">
					<FaCode />
					<FaLaptopCode />
				</div>
			</motion.div>
		</motion.section>
	);
}
