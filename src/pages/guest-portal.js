import React from "react";
import PassswordProtected from "../components/Global/PasswordProtected";
export default function GuestPortal() {
  return (
    <PassswordProtected password={"WorldChanger20"} title={'Guest Portal'}>
      <div>GuestPortal</div>
    </PassswordProtected>
  );
}
