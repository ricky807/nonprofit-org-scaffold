import React from "react";

import Banner from "../components/Global/Banner";

import RenderPeople from "../components/Lists/RenderPeople";

import boardList from "../utils/data/board";

export default function board() {
  return (
    <div>
      <Banner color="white" backgroundColor="darkblue" height={"18vh"}>
        <h1>
          Board of Directors <small style={{ fontSize: "1.5rem" }}>2021</small>
        </h1>
        <small>
          For general information, please call our main number at (509) 747-5487
          or email us at office@familypromiseofspokane.org.
        </small>
      </Banner>

      <RenderPeople people={boardList} />
    </div>
  );
}
