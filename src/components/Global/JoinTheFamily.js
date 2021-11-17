import React from "react";

import * as styles from "../../styles/Global/JoinTheFamily.module.css";
import star from "../../images/FP-star-gold.png";

export default function JoinTheFamily() {
	return (
		<div className={styles.sectionContainer}>
			<div className={styles.container}>
				<div className={styles.sectionTitle}>
					<h2>Join the family</h2>
					<img src={star} alt="FP Star" />
				</div>
				<p className={styles.p}>
					Ending family homelessness begins with paying attention.
					<br />
					Be the first to hear success stories, ways to get involved and more.
				</p>
				<form className={styles.form}>
					<input type="firstname" placeholder="First Name" />
					<input type="lastname" placeholder="Last Name" />
					<input type="email" placeholder="Email" />
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}
