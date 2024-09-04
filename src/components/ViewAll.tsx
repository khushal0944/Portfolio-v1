"use client"
import React from "react";
import { useRouter } from "next/navigation";

function ViewAll() {
	const router = useRouter();
	function navigateToProjects() {
		router.push("/projects");
	}
	return (
        <div className="w-full flex justify-center mt-7 ">
        <button
        onClick={navigateToProjects}
			className="project-box cursor-pointer max-[425px]:text-lg p-4 text-center text-2xl w-1/2 mx-auto"
		>
			View All <i className="ri-arrow-right-line"></i>
		</button>
        </div>
	);
}

export default ViewAll;