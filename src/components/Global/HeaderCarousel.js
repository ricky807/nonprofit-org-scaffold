import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import impact from "../../images/home/impact.webp";
import headerBackgroundImage from "../../images/hapbackgroundimage.webp";

// styles
import * as styles from "../../styles/pages/Home.module.css";

import Button from "../../components/Global/Button";
import Icon from "../../images/haplogoonly.webp";

const data = [
	{
		image: headerBackgroundImage,
		caption: "Need rental assistance?",
		description: "Family Promise is here to help",
		icon: Icon,
		buttonText: "Apply Now",
	},
	{
		image: impact,
		caption: "Caption 2",
		description: "Description Here",
	},
	{
		image: impact,
		caption: "Caption 3",
		description: "Description Here",
	},
];

function HeaderCarousel(props) {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			{data.map((slide, i) => {
				return (
					<Carousel.Item>
						<header className={styles.header}>
							<img
								alt="slider image"
								className={styles.headerImg}
								style={{
									backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0.712), rgba(255, 255, 255, 0.767) ), url(${slide.image})`,
								}}
								// this is a blank gif image that allows the image and gradient in the 'style'
								src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
							/>
							<div className={styles.header}>
								<Carousel.Caption>
									<div className={styles.headerContent}>
										{slide.icon && <img src={slide.icon} />}
										<div className={styles.headerTitle}>
											<h1>{slide.caption}</h1>
											<h1>{slide.description}</h1>
											{slide.buttonText && <Button>{slide.buttonText}</Button>}
										</div>
									</div>
								</Carousel.Caption>
							</div>
						</header>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}
export default HeaderCarousel;
