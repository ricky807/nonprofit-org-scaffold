import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import TopNavigation from './components/TopNavigation'

export default function Index({ children }) {
	return (
		<>
			<TopNavigation />
			<Navbar />
			{/* <SocialLinks /> */}
			<main>{children}</main>
			<Footer />
		</>
	);
}
