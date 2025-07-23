import React from "react";
import "./navbar.scss";

import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <>
    <nav>
      <h3 className="logo">Andrey de Assis</h3>
      
      <ul>
        <li>
          <NavLink
            to="/dev"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="nav-item-content">
              <div
                className="item-icon"
                style={
                  {
                    "--icon-url": `url('/src/assets/icons/dev.svg')`,
                  } as React.CSSProperties
                }
              />
              <span>Dev</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/motion"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="nav-item-content">
              <div
                className="item-icon"
                style={
                  {
                    "--icon-url": `url('/src/assets/icons/motion.svg')`,
                  } as React.CSSProperties
                }
              />
              <span>Motion</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/anim"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="nav-item-content">
              <div
                className="item-icon"
                style={
                  {
                    "--icon-url": `url('/src/assets/icons/anim.svg')`,
                  } as React.CSSProperties
                }
              />
              <span>Animation</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="nav-item-content">
              <div
                className="item-icon"
                style={
                  {
                    "--icon-url": `url('/src/assets/icons/contact.svg')`,
                  } as React.CSSProperties
                }
              />
              <span>Contact</span>
            </div>
          </NavLink>
        </li>


        <li className="logo">
          <a>
            <div className="nav-item-content">
              <div
                className="item-icon"
                style={
                  {
                    "--icon-url": `url('/src/assets/icons/menu.svg')`,
                  } as React.CSSProperties
                }
              />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </>
);

export { Navbar };