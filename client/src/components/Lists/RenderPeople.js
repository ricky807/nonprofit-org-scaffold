import React from "react";

import Person from "../Global/Person";

import * as styles from "../../styles/Containers/People.module.css";

export default function RenderPeople({ people }) {
  return (
    <div className={styles.container}>
      <div className={styles.personList}>
        {people.map((person) => (
          <Person {...person} />
        ))}
      </div>
    </div>
  );
}
