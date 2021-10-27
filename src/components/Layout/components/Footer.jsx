import React from "react";

import HelpShareThePromise from "../../Global/HelpShareThePromise";

import * as styles from "../../../styles/footer.module.css";

export default function Footer() {
	return (
		<div>
			<HelpShareThePromise />
			<footer>
				<div className={styles.container}>
					<section className={styles.linksContainer}>
						<div className={styles.linkContainer}>
							<h3>WHO WE ARE</h3>
							<div className={styles.links}>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
							</div>
						</div>
						<div className={styles.linkContainer}>
							<h3>WHO WE ARE</h3>
							<div className={styles.links}>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
							</div>
						</div>
						<div className={styles.linkContainer}>
							<h3>WHO WE ARE</h3>
							<div className={styles.links}>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
							</div>
						</div>
						<div className={styles.linkContainer}>
							<h3>WHO WE ARE</h3>
							<div className={styles.links}>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
								<a href="#" alt="altyalt">
									Mission & Vision
								</a>
							</div>
						</div>
						<div className={styles.linkContainer}>
							<button className={styles.donateButton}>Donate</button>
						</div>
					</section>

					<section className={styles.container}></section>
				</div>
			</footer>
		</div>
	);
}
