import React from "react";

import PasswordProtected from "../components/Global/PasswordProtected";

export default function BoardPortal() {
  return (
    <PasswordProtected password={"board2021"} title={"Board Portal"}>
      <div>BoardPortal</div>
    </PasswordProtected>
  );
}
