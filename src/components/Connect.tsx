import Link from "next/link";
import React from "react";
import { connectionItems } from "./Items";

function Connect() {
	return (
		<>
			<div className="mt-5 text-xl underline underline-offset-8">
				Connect With Me
			</div>
			<div id="IconBar" className="flex items-center text-5xl mt-2 gap-2 ">
                {
                    connectionItems && connectionItems.map((singleItem) => (
                    <Link href={singleItem.link} key={singleItem.name} target="_blank">
					    <i className={`${singleItem.icon} text-[#a3a3a3] duration-150 hover:text-white`}></i>
				    </Link>
                    )) 
                }
			</div>
		</>
	);
}

export default Connect;
