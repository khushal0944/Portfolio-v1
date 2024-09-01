import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ScrollBar from "@/components/ScrollBar";

export const metadata: Metadata = {
	title: "Khushal's Portfolio",
	description: "Portfolio of Khushal Kumar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
					rel="stylesheet"
				/>
			</head>
			<body>
                <ScrollBar />                    
                <Navbar />
                <div id="wrapper" className="px-12">
                    {children}
                </div>
                <Footer />
            </body>
		</html>
	);
}
