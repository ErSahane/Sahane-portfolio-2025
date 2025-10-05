// components/ContactContent.js
"use client";

import React, { useEffect, useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function ContactContent() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<main
			className={`max-w-6xl mx-auto px-4 py-16 transition-opacity duration-700 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className="text-center mb-12">
				<h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
					Get in Touch
				</h1>
				<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
					I’d love to hear from you! Whether you have a project in
					mind or just want to say hello, feel free to reach out
					below.
				</p>
			</div>

			<div className="bg-background border rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
				<ContactForm />
			</div>

			<div className="mt-12 text-center">
				<p className="text-sm text-muted-foreground mb-4">
					You can also find me here
				</p>
				<div className="flex justify-center items-center space-x-6">
					<Link
						href="mailto:sahanealam.dev@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Email"
						className="text-blue-600 hover:text-blue-800 transition-transform duration-300 hover:scale-110"
					>
						<FaEnvelope size={28} />
					</Link>
					<Link
						href="https://github.com/ErSahane"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="hover:text-black transition-transform duration-300 hover:scale-110"
					>
						<FaGithub size={28} />
					</Link>
					<Link
						href="https://www.linkedin.com/in/sahane-alamn"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="text-blue-700 hover:text-blue-900 transition-transform duration-300 hover:scale-110"
					>
						<FaLinkedin size={28} />
					</Link>
				</div>
			</div>
		</main>
	);
}
