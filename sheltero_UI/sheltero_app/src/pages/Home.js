import React from "react";
import { Link as RouterLink} from "react-router-dom";
import "../styles.css";

export default function Home() {
  return (
    <div>
      <div id="titlePage">
        <h1>sheltero.</h1>
      </div>
      <div>
        <RouterLink to="/login">
          <button className="primButton">Sign In</button>
        </RouterLink>
        <RouterLink to="/register">
          <button className="primButton">Sign Up</button>
        </RouterLink>
      </div>
    </div>
  );
}
