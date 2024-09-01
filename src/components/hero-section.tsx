import React from "react";
import Typer from "./typer";
import Connect from "./Connect";

function HeroSection() {
	const textLines = [
		"Modern Web Applications.",
		"Responsive Layouts.",
		"Pixel Perfect UIs.",
		"Things For Web.",
	];

	return (
		<>
			<div className="flex items-center justify-between max-[860px]:flex-col mb-16">
				<div className="w-3/5 max-[860px]:w-full">
					<h1 className="poppins text-4xl font-extrabold">
						Hi I am,
					</h1>
						<h1 className="text-pink-500 mt-4 text-6xl poppins font-black">
							Khushal Kumar
						</h1>
					<h1 className="mt-5 text-xl gray">
						I Build <Typer textArray={textLines} />
					</h1>
					<p className="mt-5 text-lg gray">
                    Engineering student with a strong passion for web development, specializing in the MERN stack. Currently pursuing a B.Tech degree with an expected graduation in 2026. Highly motivated to learn and collaborate on innovative projects.
					</p>
					<Connect />
				</div>
				<div className="w-1/3 max-[860px]:w-full max-w-[340px] mt-16 flex flex-col gap-8">
					<div className="flex justify-between rounded-xl border-gradient border-gradient1 items-center p-5">
						<span className="text-green-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 -rotate-6 text-green-700"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#4cb000 "
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
								></path>
							</svg>
						</span>
						<p>What I Built</p>
						<span className="text-gray-500">|</span>
						<a href="/projects" className="text-yellow-500 links yellow-link">
							Projects <i className="ri-arrow-right-line text-yellow-500"></i>
						</a>
					</div>
					<div className="flex justify-between  items-center rounded-xl border-gradient border-gradient2 p-5">
						<span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -rotate-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="#db2777 "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
						</span>
						<p>More About Me</p>
						<span className="text-gray-500">|</span>
						<a href="/about" className="text-blue-500 links blue-link">
							About <i className="ri-arrow-right-line text-blue-500"></i>
						</a>
					</div>
					<div className="flex justify-between items-center rounded-xl border-gradient border-gradient3 p-5">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 -rotate-6 text-fuchsia-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#c026d3"
							>
								<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
								<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
								></path>
							</svg>
						</span>
						<p>Hire Me!</p>
						<span className="text-gray-500">|</span>
						<a className="text-pink-500 links pink-link" href="https://drive.google.com/file/d/1Fpf3LJ0TR2xspNO52RmDcqqZD1t5uAK2/view?usp=sharing">
							Resume <i className="ri-arrow-right-line text-pink-500"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
