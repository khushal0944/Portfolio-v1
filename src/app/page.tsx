import HeroSection from "@/components/hero-section";
import Projects from "@/components/Projects";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Projects showNo={4} />
			<Link href={"/projects"}>
				<div className="project-box cursor-pointer mt-5 max-[425px]:text-lg p-4 text-center text-2xl w-1/2 mx-auto">
					View All <i className="ri-arrow-right-line"></i>
				</div>
			</Link>
			<div className="line">~~~</div>
		</>
	);
}
