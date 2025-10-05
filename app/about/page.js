import AboutIntro from "@/components/about/AboutIntro";
import AboutTimeline from "@/components/about/AboutTimeline";
import React from "react";

const About = () => {
	return (
		<main className="max-w-5xl mx-auto px-4 py-16">
			<AboutIntro />
			<AboutTimeline />
		</main>
	);
};

export default About;
