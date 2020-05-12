import React from "react";
import {Link} from "react-router-dom";
import "../styles.css";

export default function Home() {
  return (
    <div>
      <div id="titlePage">
        <h1>sheltero.</h1>
      </div>
      <div>
        <Link to="/login">
          <button className="primButton">Sign In</button>
        </Link>
        <Link to="/register">
          <button className="primButton">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
