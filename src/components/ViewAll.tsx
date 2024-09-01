import Link from "next/link";
import React from "react";

function ViewAll() {
	return (
		<Link href={"/projects"}>
			<div className="project-box cursor-pointer mt-5 max-[425px]:text-lg p-4 text-center text-2xl w-1/2 mx-auto">
				View All <i className="ri-arrow-right-line"></i>
			</div>
		</Link>
	);
}

export default ViewAll;
