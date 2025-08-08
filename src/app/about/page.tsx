import React from "react";
import Image from "next/image";
import Link from "next/link";
import Experience from "@/components/Experience";
import { companyExperience } from "@/components/Items";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Khushal's Portfolio",
	description: "About page of Portfolio of Khushal Kumar",
};

function About() {
	return (
		<>
			<h1 className="text-5xl poppins font-black mb-10">About</h1>
			<div className="flex justify-center p-5 gap-x-4 max-[710px]:p-0 max-[710px]:flex-col">
				<div
					id="left"
					className="w-1/3 max-[710px]:mb-10 max-[710px]:w-full"
				>
					<div className="flex flex-col items-center sticky top-8 gap-5">
						<Image
							alt="Profile Picture"
							className="object-cover rounded-full w-52 h-52"
							src="/profile.jpg"
							width={208} // 52 * 4 = 208px
							height={208}
							priority
						/>
						<div className="text-center">
							<h1 className="text-2xl mb-3 poppins font-bold">
								Khushal Kumar
							</h1>
							<p className="poppins gray">React Dev. Intern</p>
							<Link
								href="www.automatically.cc"
								className="gray poppins"
							>
								Celebal
							</Link>
						</div>
						<Link
							href={
								"https://www.linkedin.com/in/khushal0944/?message=Hello"
							}
							className="border poppins border-white hover:bg-white hover:text-black duration-200 p-2 font-semibold rounded-3xl"
						>
							<i className="ri-linkedin-fill text-blue-600 mr-1.5 text-xl"></i>
							Say Hello
						</Link>
					</div>
				</div>
				<div id="right" className="w-2/3 max-[710px]:w-full">
					<div className="gray text-lg max-[420px]:text-base cursorText">
						Hey, I&apos;m{" "}
						<span className="font-semibold">Khushal Kumar</span>,
						full stack developer based in India. Currently working
						as an Intern at{" "}
						<Link href={"https://celebaltech.com"}>
							<div className="floating-underline">
								Celebal Technologies
							</div>
						</Link>
						. My goal is to bring your ideas to life by crafting
						beautiful and inspiring websites.
					</div>
					<div className="gray text-lg max-[420px]:text-base mt-10 cursorText">
						I am always eager to learn and take on new challenges. I
						am currently working on the{" "}
						<div className="inline-block px-1 bg-blue-900">
							SendFilez website at Celebal Technologies
						</div>
						, where I&apos;m gaining hands-on experience in React
						development. At the same time, I am actively seeking
						remote job or internship opportunities across diverse
						domains, where I can contribute effectively while
						continuing to grow professionally.
					</div>
					<div className="gray my-10 text-lg max-[420px]:text-base cursorText">
						I am a strong advocate for open source and I am always
						interested in working on new projects with new people.
						Feel free to reach out if you have anything to talk
						about, you can reach me through{" "}
						<Link href={"mailto:khushalsuthar0944@gmail.com"}>
							<div className="floating-underline">
								Gmail{" "}
								<i className="ri-external-link-fill text-xl text-white duration-150 cursor-pointer"></i>
							</div>
						</Link>{" "}
						or{" "}
						<Link href={"https://www.linkedin.com/in/khushal0944"}>
							<div className="floating-underline">
								Linkedin{" "}
								<i className="ri-external-link-fill text-xl text-white duration-150 cursor-pointer"></i>
							</div>
						</Link>
					</div>
					{companyExperience.length > 0 && (
						<h1 className="text-5xl max-[420px]:text-4xl mt-2 poppins font-black">
							Experience
						</h1>
					)}
					{companyExperience.length > 0 &&
						companyExperience.map((singleExperience, index) => (
							<Experience
								experienceData={singleExperience}
								key={index}
							/>
						))}
				</div>
			</div>
			<div className="line">~~~</div>
		</>
	);
}

export default About;
