import React from "react";
import "./navbar.scss";

import type { Tab } from "../types.ts";

interface NavbarProps {
  activeTab: Tab;
  onChangeTab: (tab: Tab) => void;
}

const tabs = ['dev', 'motion', 'anim'];

const Navbar: React.FC<NavbarProps> = ({ activeTab, onChangeTab }) => (
  <>
    <nav>
      <ul>
        {(tabs as Tab[]).map(tab => (
          <li key={tab}>
            <a
              className={activeTab === tab ? 'active' : ''}
              onClick={() => onChangeTab(tab)}
            >
              <div className="nav-item-content">
                <div
                  className="item-icon"
                  style={
                    {
                      "--icon-url": `url('/src/assets/icons/${tab}.svg')`,
                    } as React.CSSProperties
                  }
                />
                <span>{tab}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export { Navbar };