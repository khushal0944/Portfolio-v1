import { educationData } from "@/components/Items";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "Education | Khushal's Portfolio",
	description: "Education of Khushal",
};

function Page() {

	return (
		<>
			<h1 className="text-5xl poppins font-black mb-10">Education</h1>
			{educationData.map((singleEducation) => {
				return (
					<ul className="relative education-list" key={singleEducation.institute}>
						<div className="ml-5 mt-5">
                            <li className="flex items-center justify-between">
								<h1 className="italic poppins text-2xl max-[428px]:text-base max-[768px]:text-lg text-white font-bold">
									{singleEducation.institute}
								</h1>
                                <Link href={singleEducation.instituteLink}>
                                    <i className="ri-external-link-fill hover:text-pink-500 text-2xl"></i>
                                </Link>
                            </li>
							<p className=" font-black gray text-sm">
								{singleEducation.year}
							</p>
							<p className=" text-[#ffff00] text-lg font-extrabold poppins">
								{singleEducation.description}
							</p>
						<div className="absolute right-0 bottom-0">
							{singleEducation.pursuing && (
								<span className="text-sm poppins min-[428px]:text-base bg-pink-700 font-bold rounded p-1">
									Currently Pursuing
								</span>
							)}
						</div>
						</div>
					</ul>
				);
			})}
			<div className="line">~~~</div>
		</>
	);
}

export default Page;
