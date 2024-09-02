"use client";
import React, { useEffect, useState } from "react";

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.scrollY > 10) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    },[])

	return (
            isVisible && <div className="fixed bottom-5 right-3 z-50">
			<button className="Btn" onClick={scrollToTop}>
				<svg height="1.2em" className="arrow" viewBox="0 0 512 512">
					<path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
				</svg>
				<p className="text">Back to Top</p>
			</button>
		</div>
	);
}

export default BackToTop;
