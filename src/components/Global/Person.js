import React from "react";

import * as styles from "../../styles/Global/Person.module.css";

export default function Person({ image, name, position, email }) {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.avatar} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <h4>{position}</h4>
        <a style={{color: 'black', textDecoration: 'none'}} href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
}
