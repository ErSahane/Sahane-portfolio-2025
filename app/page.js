import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";

export default function Home() {
	return (
		<div className="">
			<Hero />
			<Skills />
			<FeaturedProjects />
		</div>
	);
}
