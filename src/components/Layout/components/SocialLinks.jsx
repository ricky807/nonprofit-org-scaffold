import React from "react";

import { FaFacebookSquare, FaYoutube, FaInstagram } from "react-icons/fa";

import "../../../styles/socialsStyling.css";

export default function SocialLinks() {
	const linkSize = "3rem";
	return (
		<div className="socialLinks facebook">
			<a
				alt="Facebook"
				className="socialLink"
				href="https://www.facebook.com/FamilyPromise"
				target="_blank"
			>
				<FaFacebookSquare fontSize={linkSize} />
			</a>
			<a
				alt="Youtube"
				className="socialLink youtube"
				target="_blank"
				href="https://www.youtube.com/channel/UCfQTOJ9P0uiBC9XAe-Qc9dQ"
			>
				<FaYoutube fontSize={linkSize} />
			</a>
			<a
				alt="Instagram"
				className="socialLink instagram"
				href="https://www.instagram.com/family.promise/"
				target="_blank"
			>
				<FaInstagram fontSize={linkSize} />
			</a>
		</div>
	);
}
