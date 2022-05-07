import React from "react";

import Banner from "../components/Global/Banner";

import Person from "../components/Global/Person";
import RenderPeople from "../components/Lists/RenderPeople";

import jader from "../images/staff/jader.webp";

import * as styles from "../styles/Global/Staff.module.css";

import staffList from "../utils/data/staff";

export default function staff() {
  return (
    <div>
      <Banner color="white" backgroundColor="darkblue" height={"20vh"}>
        <h1>Our Team</h1>
        <p>
          For general information, please call our main number at (509) 747-5487
          or email us at office@familypromiseofspokane.org.
        </p>
      </Banner>

      <RenderPeople people={staffList} />
    </div>
  );
}

const RenderStaff = ({ staffList }) => {
  return staffList.map((staff) => <Person {...staff} />);
};
