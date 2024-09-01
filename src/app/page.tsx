import HeroSection from "@/components/hero-section";
import Projects from "@/components/Projects";
import ViewAll from "@/components/ViewAll";

export default function Home() {
	return (
		<>
			<HeroSection />
            <Projects showNo={4}/>
            <ViewAll />
            <div className="line">~~~</div>
		</>
	);
}
