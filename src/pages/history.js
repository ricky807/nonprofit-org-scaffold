import React from "react";

import Banner from "../components/Global/Banner";

export default function history() {
  return (
    <div>
      <Banner
        color="white"
        backgroundColor="darkblue"
        textDirection="left"
        height={"30vh"}
      >
        <h1>Our Story</h1>
        <p>
          A simple act of compassion set in motion a national movement <br /> to
          end family homelessness.
        </p>
      </Banner>
    </div>
  );
}
