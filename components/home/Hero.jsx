"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Hero = () => {
	const textRef = useRef(null);
	const imageRef = useRef(null);

	const textInView = useInView(textRef, { once: true });
	const imageInView = useInView(imageRef, { once: true });

	return (
		<section className="w-full py-12 md:py-20 bg-background">
			<div className="max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
				{/* Text Section */}
				<motion.div
					ref={textRef}
					initial={{ opacity: 0, x: -50 }}
					animate={textInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="w-full lg:w-1/2 text-center lg:text-left"
				>
					<h1 className="text-3xl md:text-5xl font-bold mb-6">
						Hello, I'm a Full Stack Web Developer
					</h1>
					<p className="text-base md:text-lg leading-relaxed">
						I'm a passionate developer focused on building modern,
						scalable, and responsive web applications using the{" "}
						<strong className="text-primary">MERN stack</strong>,{" "}
						<strong className="text-primary">Python, Django</strong>,{" "}
						<strong className="text-primary">Next.js</strong>, and{" "}
						<strong className="text-primary">Tailwind CSS</strong>.
						I love turning ideas into real-world digital
						experiences.
					</p>
					<div className="mt-4">
						<Link href="/contact">
							<Button>Contact Me</Button>
						</Link>
					</div>
				</motion.div>

				{/* Image Section */}
				<motion.div
					ref={imageRef}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={imageInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="w-full lg:w-1/2 flex justify-center"
				>
					<Image
						className="rounded-full shadow-lg border-4 border-primary"
						width={300}
						height={300}
						alt="Profile picture"
						src="https://res.cloudinary.com/dxbgo7zzv/image/upload/v1759659538/WhatsApp_Image_2025-10-05_at_15.46.45_2d1d170a_kmjj2a.jpg"
						priority
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
