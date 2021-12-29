import React from "react";

// components
import HelpShareThePromise from "../../Global/HelpShareThePromise";
import JoinTheFamily from "../../Global/JoinTheFamily";
// styling
import * as styles from "../../../styles/footer.module.css";
// assets
import FPLogo from "../../../images/familypromiselogo.png";

// footer data
const footerData = [
	{
		title: "WHO WE ARE",
		links: [
			{ linkName: "Mission & Vision", link: "" },
			{ linkName: "Programs", link: "" },
			{ linkName: "History", link: "" },
			{ linkName: "Staff", link: "" },
			{ linkName: "Board", link: "" },
			{ linkName: "Financials", link: "" },
		],
	},
	{
		title: "WHAT WE DO",
		links: [
			{ linkName: "Prevent", link: "" },
			{ linkName: "Provide", link: "" },
			{ linkName: "Prepare", link: "" },
		],
	},
	{
		title: "GET INVOLVED",
		links: [
			{ linkName: "Need Help?", link: "" },
			{ linkName: "Advocate", link: "" },
			{ linkName: "Volunteer", link: "" },
			{ linkName: "Internships", link: "" },
			{ linkName: "Careers", link: "" },
			{ linkName: "Contact us", link: "" },
		],
	},
	{
		title: "GIVE",
		links: [
			{ linkName: "Financial Gifts", link: "" },
			{ linkName: "Welcome Home Kits", link: "" },
			{ linkName: "Wishlist Items", link: "" },
		],
	},
];

export default function Footer() {
	return (
		<div>
			<HelpShareThePromise />
			<JoinTheFamily />
			<footer>
				<div className={styles.container}>
					<section className={styles.linksContainer}>
						{footerData.map(linkSection => {
							return (
								<div className={styles.linkContainer}>
									<h3>{linkSection.title}</h3>
									<div className={styles.links}>
										{linkSection.links.map(link => {
											return (
												<a href={link.link} target="_blank" alt={link.linkName}>
													{link.linkName}
												</a>
											);
										})}
									</div>
								</div>
							);
						})}

						<div className={styles.linkContainer}>
							<button className={styles.donateButton}>DONATE</button>
						</div>
					</section>

					<section className={styles.legalsContainer}>
						<img src={FPLogo} className={styles.lowerLogo} />
						<div className={styles.officeButtonContainer}>
							<button className={styles.officeButton}>
								Family Promise National Office
							</button>
						</div>
						<div className={styles.copyright}>
							&copy; Family Promise 2021. All Rights Reserved.
						</div>
					</section>
				</div>
			</footer>
		</div>
	);
}
