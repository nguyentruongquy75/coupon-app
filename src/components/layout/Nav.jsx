import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav
      className={`fixed z-10 top-0 left-0 bottom-0 w-[50vw] bg-[#f6f6f6] py-3 text-center translate-x-[-100%] transition-transform duration-300 ${
        props.className ? props.className : ""
      }`}
    >
      <ul onClick={props.hideNav}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "block p-2 bg-white" : "block p-2"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "block p-2 bg-white" : "block p-2"
            }
            to="/shoppe"
          >
            Shoppe
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "block p-2 bg-white" : "block p-2"
            }
            to="/tiki"
          >
            Tiki
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "block p-2 bg-white" : "block p-2"
            }
            to="/sendo"
          >
            Sendo
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "block p-2 bg-white" : "block p-2"
            }
            to="/lazada"
          >
            Lazada
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "block p-2 bg-white" : "block p-2"
            }
            to="/now"
          >
            Now
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "block p-2 bg-white" : "block p-2"
            }
            to="/grab"
          >
            Grab
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "block p-2 bg-white" : "block p-2"
            }
            to="/mytour"
          >
            Mytour
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "block p-2 bg-white" : "block p-2"
            }
            to="/traveloka"
          >
            Traveloka
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
