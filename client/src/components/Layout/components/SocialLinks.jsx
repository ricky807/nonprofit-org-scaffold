import React from "react";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import * as styles from "../../../styles/Global/sideSocials.module.css";

import { FACEBOOK, INSTAGRAM, YOUTUBE } from "../../../utils/data/socials";

export default function SocialLinks() {
	const redirectTo = link => window.open(link);

	return (
		<div className={styles.socials}>
			<FaFacebookF onClick={() => redirectTo(FACEBOOK)} />
			<FaYoutube onClick={() => redirectTo(YOUTUBE)} />
			<FaInstagram onClick={() => redirectTo(INSTAGRAM)} />
		</div>
	);
}
