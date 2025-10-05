"use client";
import { motion } from "framer-motion";

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export default function AboutTimeline() {
	return (
		<motion.section
			className="mt-16"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={fadeUp}
		>
			<h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
				My Journey
			</h2>
			<ul className="space-y-4 border-l-2 border-primary pl-4">
				<motion.li variants={fadeUp}>
					<div className="text-blue-500 font-medium">
						2025 (Expected)
					</div>
					<p className="text-gray-700 dark:text-gray-300">
						Graduating with BCA in Computer Science from
						IFTM University Moradabad
					</p>
					<p className="text-gray-700 dark:text-gray-300">
						Post Graduating with MCA in Computer Science from
						IFTM University Moradabad
					</p>
				</motion.li>
				<motion.li variants={fadeUp}>
					<div className="text-blue-500 font-medium">2024</div>
					<p className="text-gray-700 dark:text-gray-300">
						Built CelebSkyMedia, a complete influencer marketing
						site
					</p>
				</motion.li>
				<motion.li variants={fadeUp}>
					<div className="text-blue-500 font-medium">2023</div>
					<p className="text-gray-700 dark:text-gray-300">
						Started learning full-stack development and built
						projects with Pyhton, Django, MERN, Next.js, Appwrite
					</p>
				</motion.li>
			</ul>
		</motion.section>
	);
}
