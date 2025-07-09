import React from "react";
import "./navbar.scss";

import type { Tab } from "../types.ts";

interface NavbarProps {
  activeTab: Tab;
  onChangeTab: (tab: Tab) => void;
}

const tabs: (Tab | '')[] = ['dev', 'motion', 'anim', 'contact', ''];

const Navbar: React.FC<NavbarProps> = ({ activeTab, onChangeTab }) => (
  <>
    <nav>
      <h3 className="logo">Andrey de Assis</h3>
      
      <ul>
        {tabs.map(tab => (
          (tab === '')
          ?
          <li key={tab} className="logo">
            <a onClick={() => {}}>
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
          :
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