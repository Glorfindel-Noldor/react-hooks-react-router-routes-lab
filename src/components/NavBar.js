import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to={"/"} activeStyle={{ background: "green" }}>
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink exact to={"/movies"} activeStyle={{ background: "green" }}>
            Movies{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={"/directors"}
            activeStyle={{ background: "green" }}
          >
            Directors{" "}
          </NavLink>
        </li>
        <li>
          <NavLink exact to={"/actors"} activeStyle={{ background: "green" }}>
            Actors{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
