import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
export default function Navbar() {
  return (
    <div style={{ padding: "1em" }}>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/saved_sets">Saved Sets</Link> |{" "}
        <Link to="/create_a_clothing_set">Create A Clothing Set</Link>
      </nav>
      <div style={{ padding: "1em" }}>
        <SideBar />
      </div>
    </div>
  );
}
