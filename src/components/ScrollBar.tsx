"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProgressBar = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
    const pathName = usePathname()

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrollPercent = (scrollTop / scrollHeight) * 100;
		setScrollPosition(scrollPercent);
	};

	useEffect(() => {
        setScrollPosition(100)
        const timer = setTimeout(() => setScrollPosition(0), 100)
		window.addEventListener("scroll", handleScroll);
		return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        }
	}, [pathName]);

	return (
		<div
            className="fixed top-0 left-0 h-1 bg-pink-500 z-20"
			style={{
				width: `${scrollPosition}%`,
			}}
		/>
	);
};

export default ProgressBar;
