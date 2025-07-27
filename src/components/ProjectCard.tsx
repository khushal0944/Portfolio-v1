"use client"
import React, { useState } from "react";

interface JsonDataType {
	title: string;
    subTitle ?: string;
	vercel_link?: string;
	github_link?: string;
	description: string;
	tags?: string[];
}

interface DataType {
	data: JsonDataType;
}

function ProjectCard({ data }: DataType) {
    const [dataDesc, setDataDesc] = useState(false);
	return (
		<div className="project-box p-8 max-[800px]:p-4">
			<div id="linkBar" className="flex justify-between items-center">
				<div id="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#50C878"
						className="h-10 w-10 "
					>
						<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
					</svg>
				</div>
				<div>
					{data.vercel_link && (
						<a href={data.vercel_link} target="_blank">
							<i className="ri-external-link-fill mr-2 text-3xl text-white duration-150 hover:text-[#50C878]"></i>
						</a>
					)}
					{data.github_link && (
						<a href={data.github_link} target="_blank">
							<i className="ri-github-fill text-3xl text-white duration-150 hover:text-[#50C878]"></i>
						</a>
					)}
				</div>
			</div>
			<h1 className="my-4 text-2xl font-black poppins">
				{data.title}{" "}
				{data.subTitle && (
					<span className="ml-1 border-l-2 pl-2 border-gray-400 text-lg text-gray-400 ">
						{data.subTitle}
					</span>
				)}
			</h1>
			<p
				className="mb-4 text-[#a3a3a3]"
				onClick={() => setDataDesc((dataDesc) => (!dataDesc))}
			>
				{dataDesc
					? data.description
					: data.description.substring(0, 150).trim() + (data.description.length > 150 ? "..." : "")}
			</p>
			{data.tags &&
				data.tags.map((singleTag, index) => (
					<span
						key={singleTag}
						className="cursorText capitalize text-[#666666]"
					>
						{singleTag}
						{data.tags?.length === index + 1 ? "" : " • "}
					</span>
				))}
		</div>
	);
}

export default ProjectCard;
