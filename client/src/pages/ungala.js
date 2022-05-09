import React from "react";

import video from "../images/ungala/video.mp4";
import image from "../images/ungala/gala.png";

import * as styles from "../styles/pages/UnGala.module.css";

import * as globalStyles from "../styles/Global/Global.module.css";

import Button from '../components/Global/Button'

import { navigate } from "gatsby";

export default function ungala() {
  return (
    <div>
      <div className={styles.videoContainer}>
        <div className={styles.videoOverlay}>
          <img src={image} />
        </div>
        <video
          className={styles.video}
          autoPlay
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={globalStyles.genericContainer}>
        <section className={styles.section}>
          <Button onClick={() => window.open('https://familypromisespokane-bloom.kindful.com/e/ungala-2022', '_blank')} color={'lightpurple'}>Reserve Your Seats</Button>
          <h3>October 27, 2022, <br /> 6pm | In-Person & Virtual</h3>
          <h4>
            Join us for a "Homecoming" themed celebration and vision-casting
            evening of Family Promise fun!
          </h4>

          <h2>
            Even if you are unable to attend, you can still be a part of
            changing the future for homeless families.
          </h2>

          <Button onClick={() => navigate('/donate')} color='lightpurple'>DONATE</Button>
        </section>
      </div>
    </div>
  );
}
