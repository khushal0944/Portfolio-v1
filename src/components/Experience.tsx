import Link from "next/link";
import React from "react";

interface propsType {
    experienceData: companyExperienceType
}

function Experience({experienceData}: propsType) {
	return (
		<>
			<h1 className="mt-8 poppins text-lg gray">
				{experienceData.post} @{" "}
				<Link href={experienceData.company_link}>
					<div className="pink poppins animated-box">
						{experienceData.company}
					</div>
				</Link>
			</h1>
			<div className="ml-2 font-mono text-[#525252] cursorText">{experienceData.joiningEndDate}</div>
			<ul className="list-disc ml-8 mt-2 pointer">
                {
                    experienceData.work.length > 0 && experienceData.work.map((singleWork,index) => <li key={index} className="gray max-[420px]:text-sm">
                        {singleWork}
                    </li>)
                }
			</ul>
		</>
	);
}

export default Experience;
