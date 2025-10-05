"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "@/lib/projectsData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturedProjects() {
	const sectionRef = useRef(null);
	const sectionInView = useInView(sectionRef, { once: true });

	return (
		<section ref={sectionRef} className="py-12 px-4 max-w-6xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				animate={sectionInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				className="text-3xl font-bold text-center mb-10"
			>
				Featured Projects
			</motion.h2>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{projectsData.map((project, index) => {
					const cardRef = useRef(null);
					const cardInView = useInView(cardRef, { once: true });

					return (
						<motion.div
							key={index}
							ref={cardRef}
							initial={{ opacity: 0, y: 40 }}
							animate={cardInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
								ease: "easeOut",
							}}
						>
							<Card className="flex flex-col h-full">
								<div className="relative w-full aspect-video">
									<Image
										src={project.image}
										alt={project.name}
										fill
										className="object-cover rounded-t-md"
									/>
								</div>

								<CardContent className="p-4 flex flex-col flex-grow justify-between">
									<div>
										<h3 className="text-lg font-semibold mb-1">
											{project.name}
										</h3>
										<p className="text-sm text-muted-foreground line-clamp-3">
											{project.description}
										</p>
									</div>

									<div className="mt-4">
										<Button
											asChild
											className="w-full justify-center text-sm"
										>
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2"
											>
												Visit Site{" "}
												<FaExternalLinkAlt size={14} />
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
