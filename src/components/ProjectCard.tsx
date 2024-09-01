import React from "react";

interface JsonDataType {
	title: string;
	vercel_link?: string;
	github_link?: string;
	description: string;
	tags?: string[];
}

interface DataType {
	data: JsonDataType;
}

function ProjectCard({ data }: DataType) {
	return (
		<div className="project-box p-8 max-[800px]:p-4">
			<div id="linkBar" className="flex justify-between items-center">
				<div id="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#de1d8d"
						className="h-10 w-10 "
					>
						<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
					</svg>
				</div>
				<div>
					{data.vercel_link && (
						<a href={data.vercel_link} target="_blank">
							<i className="ri-external-link-fill mr-2 text-3xl text-white duration-150 hover:text-[#de1d8d]"></i>
						</a>
					)}
					{data.github_link && (
						<a href={data.github_link} target="_blank">
							<i className="ri-github-fill text-3xl text-white duration-150 hover:text-[#de1d8d]"></i>
						</a>
					)}
				</div>
			</div>
			<h1 className="my-4 text-2xl font-black poppins">{data.title}</h1>
			<p className="mb-4 text-[#a3a3a3]">
				{data.description.trim().length > 300
					? data.description.substring(0, 300).trim() + "..."
					: data.description}
			</p>
			{data.tags &&
				data.tags.map((singleTag, index) => (
					<span key={singleTag} className="cursorText capitalize text-[#a3a3a3]">
						{singleTag}
						{data.tags?.length === index + 1 ? "" : " • "}
					</span>
				))}
		</div>
	);
}

export default ProjectCard;
