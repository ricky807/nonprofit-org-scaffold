import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

export default function Index({ children }) {
	return (
		<>
			<Navbar />
			{/* <SocialLinks /> */}
			<main>{children}</main>
			<Footer />
		</>
	);
}
