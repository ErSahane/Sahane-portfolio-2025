import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className=" px-4 md:px-6 py-12 mt-16">
			<div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">
				{/* About Me */}
				<div>
					<h2 className="text-xl font-semibold  mb-4">
						Er. Sahane Alam
					</h2>
					<p className="text-sm leading-relaxed">
						A passionate full-stack web developer , Web Designer, Data Analyst focused on
						building fast, accessible, and user-centric applications
						using the MERN stack, Python, Djnago, Html, CSS, Next.js, and modern tools like
						Tailwind CSS and Shadcn UI.
					</p>
				</div>

				{/* Quick Navigation */}
				<div>
					<h3 className="text-lg font-semibold  mb-3">Navigation</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link href="/" className="hover:underline">
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:underline">
								About
							</Link>
						</li>

						<li>
							<Link href="/projects" className="hover:underline">
								Projects
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:underline">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Featured Projects */}
				<div>
					<h3 className="text-lg font-semibold  mb-3">
						Featured Projects
					</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link
								href="https://www.celebskymedia.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								Celeb Sky Media
							</Link>
						</li>
						<li>
							<Link
								href="https://recipeswebsite.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								Food Recipes App
							</Link>
						</li>
						<li>
							<Link
								href="https://medi-zone.vercel.app"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								Medical Agency System
							</Link>
						</li>
						<li>
							<Link
								href="https://usermanagementsystem-nu.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								User Management
							</Link>
						</li>
					</ul>
				</div>

				{/* Social Links */}
				<div>
					<h3 className="text-lg font-semibold  mb-3">
						Connect With Me
					</h3>
					<ul className="flex gap-4 text-xl">
						<li>
							<Link
								href="https://github.com/ErSahane"
								target="_blank"
								rel="noopener noreferrer"
								// className="hover:text-white"
							>
								<FaGithub />
							</Link>
						</li>
						<li>
							<Link
								href="https://www.linkedin.com/in/sahane-alam"
								target="_blank"
								rel="noopener noreferrer"
								// className="hover:text-white"
							>
								<FaLinkedin />
							</Link>
						</li>

						<li>
							<Link
								href="mailto:sahanealam.dev@gmail.com"
								// className="hover:text-white"
							>
								<FaEnvelope />
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Copyright */}
			<div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
				© {new Date().getFullYear()} Er. Sahane Alam. All rights reserved.
			</div>
		</footer>
	);
}
