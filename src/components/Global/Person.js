import React from "react";

import * as styles from "../../styles/Global/Person.module.css";

export default function Person({ image, name, position, email }) {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.avatar} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <h4>{position}</h4>
        <h5>{email}</h5>
      </div>
    </div>
  );
}
