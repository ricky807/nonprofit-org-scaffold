import React from "react";
import "./Button.css";
import { Link } from "gatsby";

export function Button() {
  return (
    <Link to="sign-up">
      <button className="btn">Sign Up</button>
    </Link>
  );
}
