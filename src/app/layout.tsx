import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollBar from "@/components/ScrollBar";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "Home | Khushal's Portfolio",
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
                <Header />
                <div id="wrapper" className="px-12">
                    {children}
                </div>
                <Footer />
            </body>
		</html>
	);
}
