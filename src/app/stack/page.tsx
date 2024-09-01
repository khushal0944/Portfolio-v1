import { stackData } from "@/components/Items";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Stack | Khushal's Portfolio",
	description: "Portfolio of Khushal Kumar",
};

function page() {
	const data = stackData;
	return (
		<>
			<h1 className="text-5xl poppins font-black">Stack</h1>
			<p className="mt-4 text-lg max-[430px]:text-base">
				Software, Tech and Resources I use on a regular basis.
			</p>
			<hr className="mt-5 max-[800px]:mb-5" />
			{data.map((singleData, index) => {
				return (
					<div key={index} className="w-3/4 border  max-[860px]:w-full border-gray-700 mx-auto mt-8 rounded-xl p-5">
						<h1 className="text-2xl underline underline-offset-4 capitalize font-bold text-center">
							{singleData.heading}
						</h1>
						<div className="p-3 mt-2 grid grid-cols-2 grid-1 gap-5">
							{singleData.items.map((singleItem, index) => (
								<div key={index}>
									<a href={singleItem.websiteLink}>
										<div className="p-3 project-box flex items-center gap-3">
											<div
												dangerouslySetInnerHTML={{
													__html: singleItem.icon,
												}}
												className="p-2 rounded-lg"
												style={{
													backgroundColor:
														singleItem.avg_color,
												}}
											/>
											<div>
												<h1 className="poppins  capitalize">
													{singleItem.appName}
												</h1>
												<p className="poppins capitalize text-sm gray">
													{singleItem.description}
												</p>
											</div>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				);
			})}
            <div className="line">~~~</div>
		</>
	);
}

export default page;
