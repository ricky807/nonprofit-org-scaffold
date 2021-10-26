import * as React from "react";
import { Parallax } from "react-parallax";

// styles
import * as styles from "../styles/pages/Home.module.css";

// components
import Icon from "../images/haplogoonly.webp";
import Button from "../components/Global/Button";
import WhyWeExist from "../images/home/WhyWeExist.webp";
import OurStory from "../images/home/OurStory.webp";
import HowYouCanHelp from "../images/home/HowYouCanHelp.webp";

// imported icons
import { FaPlusCircle, FaHome } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdPeople } from "react-icons/md";

// assets
import parallaxBackground from "../images/home/impact.webp";

const IndexPage = () => {
	return (
		<main className={styles.container}>
			<header className={styles.header}>
				<div className={styles.headerContent}>
					<img src={Icon} />
					<div className={styles.headerTitle}>
						<h1>
							Need rental assistance? <br /> Family Promise is here to help.
						</h1>
						<Button>Apply Now</Button>
					</div>
				</div>
			</header>
			<section className={styles.sectionA}>
				<h1>We are Family Promise of Spokane. </h1>
				<p>
					Equipping families & communities to end the cycle of homelessness.
					<br />
					Because every child deserves a home.
				</p>
			</section>

			<section className={styles.sectionB}>
				<div className={styles.circles}>
					<Circle image={WhyWeExist} title={"Why We Exist"} />

					<Circle image={OurStory} title={"Our Story"} />

					<Circle image={HowYouCanHelp} title={"How You Can Help"}></Circle>
				</div>
			</section>

			<section>
				<Parallax
					bgImage={parallaxBackground}
					bgImageAlt="children"
					strength={500}
					contentClassName={styles.sectionC}
				>
					<div className={styles.analytics}>
						<Analytic
							statistic={"$2,500"}
							description={"ends homelessness for an entire family"}
						>
							<FaPlusCircle fontSize={"2.5rem"} />
						</Analytic>

						<Analytic
							statistic={"1,152"}
							description={"kids, moms and dads impacted"}
						>
							<FaHome fontSize={"2.5rem"} />
						</Analytic>

						<Analytic
							statistic={"89%"}
							description={"of those served are from Spokane County"}
						>
							<IoLocationSharp fontSize={"2.5rem"} />
						</Analytic>

						<Analytic
							statistic={"894+"}
							description={"volunteers engaged community-wide"}
						>
							<MdPeople fontSize={"2.5rem"} />
						</Analytic>
					</div>
					<Button>Learn more</Button>
				</Parallax>
			</section>

			<section className={styles.sectionD}>
				<div className={styles.sectionDContent}>
					<iframe
						className={styles.video}
						width="100%"
						src="https://www.youtube.com/embed/tgbNymZ7vqY"
					></iframe>
					<div className={styles.sectionDBlurbs}>
						<h4>
							Spreading the word will help us transform the lives of ONE
							THOUSAND families per year.
						</h4>
						<p>
							Hailey - a former guest of Family Promise of Spokane - shares her
							family's amazing journey from homelessness to housing... and calls
							the community to take part in transforming the lives of many more
							family's like hers.{" "}
						</p>
					</div>
				</div>
			</section>

			<section className={styles.sectionE}>
				<div className={styles.sectionEContent}>
					<h1>Donate or Volunteer</h1>
					<p>
						The problem of homelessness is complex. You can make a difference in
						the lives of our families by making a donation or by becoming a
						volunteer.
					</p>
					<Button>Learn more2</Button>
				</div>
			</section>
		</main>
	);
};

const Circle = ({ image, title }) => {
	return (
		<div
			className={`${styles.circle}`}
			style={{
				background: `url(${image})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<div className={styles.circleContent}>
				<h3>{title}</h3>
				<a>Learn more</a>
			</div>
		</div>
	);
};

const Analytic = ({ statistic, description, children }) => {
	return (
		<div className={styles.analytic}>
			<div className={styles.analyticCircle}>
				<div className={styles.analyticIcon}>{children}</div>
				<h2>{statistic}</h2>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default IndexPage;
